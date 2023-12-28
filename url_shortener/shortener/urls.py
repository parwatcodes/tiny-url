from django.urls import path
from .views import UrlShortenerView

shortenerView = UrlShortenerView()

urlpatterns = [
    path("", shortenerView.init, name='init'),
    path('create/', shortenerView.create, name='create'),
    path('get/', shortenerView.get , name='get'),
    # Add other app-specific URLs here
]
