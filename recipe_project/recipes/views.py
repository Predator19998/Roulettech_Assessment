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

@api_view(['POST'])
def create_recipe(request):
    if isinstance(request.data, list):
        # Handle bulk upload
        serializer = RecipeSerializer(data=request.data, many=True)
    else:
        # Handle single recipe upload
        serializer = RecipeSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)