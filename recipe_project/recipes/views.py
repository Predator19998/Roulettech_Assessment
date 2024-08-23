from rest_framework import viewsets
from rest_framework.filters import SearchFilter
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Recipe
from .serializers import RecipeSerializer

class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    filter_backends = [SearchFilter]
    search_fields = ['name']