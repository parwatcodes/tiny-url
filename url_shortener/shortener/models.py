from django.db import models

# Create your models here.
class ShortenedURL(models.Model):
  tiny_url = models.URLField()
  original_url = models.URLField()
  short_code = models.CharField(max_length=10, unique=True)
  created_at = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f"{self.original_url} - {self.short_code}"
