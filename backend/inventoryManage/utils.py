from rest_framework.response import Response
from .models import Inventory
from .serializers import InventorySerializer

def createItem(request):
    data = request.data
    item = Inventory.objects.create(
        body=data['body']
        title=data['title']
        description=data['description']
        sku=data['sku']
        count=data['count']
    )
    serializer = InventorySerializer(item, many=True)
    return Response(serializer.data)

def updateNote(request, pk):
    data = request.data
    item = Inventory.objects.get(id=pk)
    serializer = InventorySerializer(instance=item, data=data)

    if serializer.is_valid():
        serializer.save()

    return serializer.data


def deleteNote(request, pk):
    item = Inventory.objects.get(id=pk)
    item.delete()
    return Response('Item was deleted!')