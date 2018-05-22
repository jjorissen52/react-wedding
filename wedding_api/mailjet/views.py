import json
import os, configparser

import requests
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

    def create(self, request, *args, **kwargs):
        url = f"https://api.mailjet.com/v3.1/send"
        serializer = SendViaMailJet.serializer_class(data=request.data)
        if not serializer.is_valid():
            return Response({
                "errors": "Your email could not be sent. Please ensure that you've filled out all fields completely."
            })
        payload = {
            "Messages": [
                {
                    "From": {
                        "Email": SENDER_EMAIL,
                        "Name": "no-reply"
                    },
                    "To": [
                        {
                            "Email": RECIPIENT_EMAIL,
                            "Name": "Me"
                        },
                    ],
                    "Subject": "Wedding Contact Request",
                    "TextPart": serializer.data["message"]
                },
                {
                    "From": {
                        "Email": SENDER_EMAIL,
                        "Name": "no-reply"
                    },
                    "To": [
                        {
                            "Email": serializer.data['email'],
                            "Name": serializer.data['name']
                        },
                    ],
                    "Subject": "Wedding Contact Request - Message Receipt",
                    "TextPart": f'You sent the following message to JP and Sarah: {serializer.data["message"]}'
                }
            ]
        }
        payload = json.dumps(payload)
        response = requests.post(url, data=payload,
                                 auth=requests.auth.HTTPBasicAuth(MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE))

        # class Pretend:
        #     text = 'test text'
        #
        # response = Pretend()

        if "Error" in response.text:
            return Response({
                "errors": "Your email could not be sent. Please ensure that you've filled out all fields completely."
            })

        else:
            return Response({"results": "Thanks for reaching out! You should receive a message receipt soon."})
