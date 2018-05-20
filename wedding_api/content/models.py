from django.db import models


class Page(models.Model):
    slug = models.CharField(max_length=50, unique=True)
    contents = models.ManyToManyField('content.Content')

    def __str__(self):
        return str(self.slug)


class Content(models.Model):
    header = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    background = models.FileField(blank=True, null=True, upload_to='uploaded_backgrounds')
    order = models.IntegerField(default=0, help_text='lower number is higher priority.')

    class Meta:
        ordering = ('order', )

    def __str__(self):
        return str(self.header)


class Image(models.Model):
    title = models.CharField(max_length=50)
    file = models.FileField(blank=True, null=True, upload_to='uploaded_images')

    def __str__(self):
        return str(self.title)

