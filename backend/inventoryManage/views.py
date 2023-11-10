from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
from rest_framework import viewsets
from .serializers import InventorySerializer
from .models import Inventory

class InventoryView(viewsets.ModelViewSet):
    serializer_class = InventorySerializer
    queryset = Inventory.objects.all()
    
@api_view(['POST'])
def createItem(request):
    data = request.data
    item = Inventory.objects.create(
        title = data['title'],
        description = data['description'],
        sku = data['sku'],
        count = data['count']
    )
    serializer = InventorySerializer(instance = item, data=data)
    
    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)
    
@api_view(['DELETE'])
def deleteItem(request, pk):
    item = Inventory.objects.get(id=pk)
    item.delete()
    return Response('Item was deleted!')

@api_view(['PUT'])
def updateItem(request, pk):
    data = request.data
    item = Inventory.objects.get(id=pk)
    serializer = InventorySerializer(instance = item, data=data)
    
    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)