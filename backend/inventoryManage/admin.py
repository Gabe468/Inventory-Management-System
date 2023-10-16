from django.contrib import admin
from .models import Inventory
# Register your models here.
class inventoryAdmin(admin.ModelAdmin):
    list_display = ("id","title","description","sku","count")

admin.site.register(Inventory,inventoryAdmin)