from django.db import models

# Create your models here.
class Inventory(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length= 30)
    description = models.CharField(max_length = 200)
    sku = models.CharField(max_length=30)
    count = models.PositiveIntegerField()
