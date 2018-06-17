from django.contrib import admin
from . import models


@admin.register(models.AdminNotified)
class AdminNotificationAdmin(admin.ModelAdmin):
    list_display = ('notified', 'date', )