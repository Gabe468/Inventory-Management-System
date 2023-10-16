from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import InventorySerializer
from .models import Inventory

class InventoryView(viewsets.ModelViewSet):
    serializer_class = InventorySerializer
    queryset = Inventory.objects.all()