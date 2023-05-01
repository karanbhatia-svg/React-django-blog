from rest_framework import serializers
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .serialziers import ArticleSerializer,UserSerializer
from .models import Article
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    def current_user(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    authentication_classes = (TokenAuthentication,)
