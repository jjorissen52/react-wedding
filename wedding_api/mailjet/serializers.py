from rest_framework import serializers


class MailJetSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=200)
    email = serializers.EmailField(max_length=200)
    message = serializers.CharField(max_length=10000)