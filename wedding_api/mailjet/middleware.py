from django.utils.deprecation import MiddlewareMixin

from .signals import custom_request_finished


class ProcessRequestMiddleware(MiddlewareMixin):

    def process_request(self, request):
        """
        Check for denied User-Agents and rewrite the URL based on
        settings.APPEND_SLASH and settings.PREPEND_WWW
        """
        custom_request_finished.send(sender=__name__, request=request)
