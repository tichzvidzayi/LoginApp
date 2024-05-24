from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    favourite_pokemon = models.CharField(max_length=100)
