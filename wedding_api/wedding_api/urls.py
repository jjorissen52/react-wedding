from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from content.views import PageViewSet, ContentViewSet, ImageViewSet
from mailjet.views import SendViaMailJet

from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register('pages', PageViewSet)
router.register('contents', ContentViewSet)
router.register('images', ImageViewSet)
router.register('send_mail', SendViaMailJet, 'send')

urlpatterns = [
    path('admin/', admin.site.urls),
    url('api/v1/', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)