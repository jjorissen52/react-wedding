from django.core.mail import send_mail
from django.db import models
from django.conf import settings
from django.utils.timezone import now


class AdminNotified(models.Model):
    notified = models.BooleanField(default=True)
    date = models.DateTimeField(default=now)

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        if self.pk is None:
            if AdminNotified.objects.all().exists():
                # only one needs to exist... I don't want to be emailed a bunch of times.
                return
            else:
                mail_text = "Someone has abused your mail API. Mail has been disabled."
                send_mail("EMAIL API ABUSE ALERT", mail_text,
                          "DANGER@hooks-jorissen.com",
                          ["jjorissen52@gmail.com"], html_message=f"<html>{mail_text}</html>")
        super().save(force_insert, force_update, using, update_fields)

    class Meta:
        verbose_name_plural = 'admin notified'

