from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from .serializer import ProductSerializer
from rest_framework.decorators import api_view

from .models import Product


# Create your views here.

@api_view(["GET"])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def get_product(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)
