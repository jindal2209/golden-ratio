from django.contrib import admin
from django.contrib.admin import ModelAdmin
from .models import ImagesModel

# Register your models here.'

class ImageAdmin(ModelAdmin):
    list_display = ('image_type','image_title')
    readonly_fields = ()
    filter_horizontal = ()
    filter_vertical = ()
    search_fields = ('image_type','image_title')
    fieldsets = ()
    filter_horizontal =()
    list_filter = ('image_type',)
    ordering = []

admin.site.register(ImagesModel,ImageAdmin)
