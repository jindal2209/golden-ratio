from django.db.models import *


class ImagesModel(Model):
    image_type = CharField(blank=False,null=False,max_length=50)
    image_title = CharField(blank=False,null=False,max_length=50)
    description = CharField(max_length=3000,blank=True,null=False)
    image = ImageField()

    class Meta:
        ordering = ['image_type']

