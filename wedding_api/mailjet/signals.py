from django.dispatch import Signal

custom_request_finished = Signal(providing_args=["request"])
