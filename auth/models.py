from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    email = models.EmailField('email address', unique=True, help_text='Required, Add a valid email address')
    designation = models.CharField(max_length=50)

    def __str__(self):
        return self.username
