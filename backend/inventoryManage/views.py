from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import viewsets
from .serializers import InventorySerializer
from .models import Inventory
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class InventoryView(viewsets.ModelViewSet):
    serializer_class = InventorySerializer
    queryset = Inventory.objects.all()
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createItem(request):
    data = request.data
    item = Inventory.objects.create(
        user = request.user,
        title = data['title'],
        description = data['description'],
        sku = data['sku'],
        count = data['count']
    )
    serializer = InventorySerializer(instance = item, data=request.data)
    
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

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.username

        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer