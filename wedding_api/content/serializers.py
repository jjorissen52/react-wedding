from rest_framework import serializers
from . import models


class ContentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Content
        fields = '__all__'


class PageSerializer(serializers.HyperlinkedModelSerializer):
    contents = ContentSerializer(many=True, read_only=True)

    class Meta:
        model = models.Page
        fields = ('url', 'slug', 'contents')
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }


class ImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Image
        fields = '__all__'
