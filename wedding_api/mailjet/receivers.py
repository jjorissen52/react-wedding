from django.dispatch import receiver
from django.conf import settings

from . signals import custom_request_finished
from activity_log.models import ActivityLog
from . models import AdminNotified


@receiver(custom_request_finished)
def audit_email_requests(sender, request, **kwargs):
    if "send_mail" in request.META.get('PATH_INFO', ''):
        total_emails_sent = ActivityLog.objects\
            .filter(request_method="POST", request_url__contains="api/v1/send_mail").count()
        request._total_emails_sent = total_emails_sent
        print(total_emails_sent)
        if total_emails_sent >= settings.TOTAL_EMAILS_ALLOWED:
            AdminNotified.objects.create()