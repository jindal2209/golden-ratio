from django import forms
from .models import ImagesModel

class ImagesForm(forms.ModelForm):
    class Meta:
        model = ImagesModel
        fields = ['image_type','image_title','description','image']