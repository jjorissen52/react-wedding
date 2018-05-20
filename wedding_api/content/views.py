from django.shortcuts import render
from rest_framework import viewsets
from . import models
from . import serializers


class PageViewSet(viewsets.ModelViewSet):
    queryset = models.Page.objects.all()
    serializer_class = serializers.PageSerializer
    lookup_field = 'slug'


class ContentViewSet(viewsets.ModelViewSet):
    queryset = models.Content.objects.all()
    serializer_class = serializers.ContentSerializer


class ImageViewSet(viewsets.ModelViewSet):
    queryset = models.Image.objects.all()
    serializer_class = serializers.ImageSerializer

