from django.shortcuts import render,redirect
from .models import ImagesModel
from .forms import ImagesForm

def home(request):
    return render(request,"home.html")

def extras(request):
    return render(request,'extras.html')

def examples(request):
    form = ImagesModel.objects.all()
    # form = ImagesForm(instance=images)
    return render(request,'examples.html',{"data":form})
