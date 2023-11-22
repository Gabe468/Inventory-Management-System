from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Inventory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length= 30)
    description = models.CharField(max_length = 200)
    sku = models.CharField(max_length=30)
    count = models.PositiveIntegerField()
    