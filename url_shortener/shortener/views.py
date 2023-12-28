from django.shortcuts import render
from django.views.decorators.http import require_POST
from django.http import JsonResponse
from django.views import View
from .models import ShortenedURL
from django.conf import settings
import random
import string
import json
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
# shortener/views.py
from .models import ShortenedURL

def generate_unique_key(key_length = 10):
  key = ''.join(random.choices(string.ascii_uppercase + string.digits + string.ascii_lowercase, k = key_length))

  return key

class UrlShortenerView(View):
  def init(self, request):

    return JsonResponse({
      'message': 'Welcome to URL shortener API'
    })

  def get(self, request):
    try:
      url = request.GET.get('url')

      if not url:
        return JsonResponse({
          'message': 'Tiny url is missing in the query string!'
          }, status=400)
      else:
        dbInstance = ShortenedURL.objects.get(tiny_url = url)

        return JsonResponse({
          'message': 'Data found!',
          'original_url': dbInstance.original_url
        })
    except ShortenedURL.DoesNotExist:
      response_data = {
        'message': 'Data not found for the provided URL.',
      }

      return JsonResponse(response_data, status=404)

  @csrf_exempt
  def create(self, request):
    if request.method == 'POST':
      # post_data = request.POST

      post_data = json.loads(request.body.decode('utf-8'))
      original_url = post_data.get('original_url')

      # make a check whether original_url is null or not

      short_code = generate_unique_key(10)
      tiny_url = settings.HOST_NAME + short_code

      dbInstance = ShortenedURL(original_url=original_url, short_code=short_code, tiny_url=tiny_url)

      dbInstance.save()

      return JsonResponse({
      'message': 'Url shortened!',
      'tiny_url': tiny_url
    })

    else:
      return JsonResponse({
      'message': 'Not a post request',
      'code': '400 error'
    })
