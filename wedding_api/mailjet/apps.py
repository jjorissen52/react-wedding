from django.apps import AppConfig


class MailjetConfig(AppConfig):
    name = 'mailjet'

    def ready(self):
        from . import receivers