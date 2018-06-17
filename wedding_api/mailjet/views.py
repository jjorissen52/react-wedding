import json
import os, configparser

import requests
from django.core.mail import send_mail
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import GenericViewSet
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response

from . import serializers
from django.conf import settings

config = configparser.ConfigParser()

config.read(os.path.join(settings.BASE_DIR, 'secrets.ini'))

SENDER_EMAIL = config.get('mailjet', 'SENDER_EMAIL')
RECIPIENT_EMAIL = config.get('mailjet', 'RECIPIENT_EMAIL')
MJ_APIKEY_PUBLIC = config.get('mailjet', 'MJ_APIKEY_PUBLIC')
MJ_APIKEY_PRIVATE = config.get('mailjet', 'MJ_APIKEY_PRIVATE')


class SendViaMailJet(CreateAPIView, GenericViewSet):
    serializer_class = serializers.MailJetSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = SendViaMailJet.serializer_class(data=request.data)
        if not serializer.is_valid():
            return Response({
                "errors": "Your email could not be sent. Please ensure that you've filled out all fields completely."
            })
        if getattr(request, "_total_emails_sent", None) >= settings.TOTAL_EMAILS_ALLOWED:
            return Response({
                "errors": "Your email could not processed at this time. We are recieving an unusally large amount of "
                          "email requests and must investigate."
            })
        error_message = ""
        try:
            notification_text = serializer.data["message"]
            send_mail(f"Wedding Contact Request - {serializer.data['name']}",
                      notification_text,
                      settings.DEFAULT_FROM_EMAIL,
                      [serializer.data['email']], html_message=f"<html>{notification_text}</html>", fail_silently=False)
        except Exception:
            error_message += "Something went wrong, and JP and Sarah will not be receiving this email."

        try:
            reciept_text = f'You sent the following message to JP and Sarah: {serializer.data["message"]}'
            send_mail("Wedding Contact Request - Message Receipt",
                      reciept_text,
                      settings.DEFAULT_FROM_EMAIL,
                      [serializer.data['email']], html_message=f"<html>{reciept_text}</html>", fail_silently=False)
        except Exception:
            if not error_message:
                error_message += "Your email was sent, but something went wrong and you will not be receiving a " \
                                 "send receipt via email."

        if error_message:
            return Response({
                "errors": error_message
            })

        else:
            return Response({"results": "Thanks for reaching out! You should receive a message receipt soon."})
