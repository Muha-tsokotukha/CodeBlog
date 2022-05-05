from unicodedata import category
from requests import delete
from rest_framework import serializers
from .models import *
from django.contrib.auth import authenticate


class LoginSerializer(serializers.Serializer):

    username = serializers.CharField(max_length=255, write_only=True)
    password = serializers.CharField(max_length=128, write_only=True)

    # Ignore these fields if they are included in the request.
    token = serializers.CharField(max_length=255, read_only=True)

    def validate(self, data):

        username = data.get('username', None)
        password = data.get('password', None)

        user = authenticate(username=username, password=password)

        if user is None:
            raise serializers.ValidationError('A user with this email and password was not found.')

        return {'token': user.token, }


class BlogSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField()
    user = serializers.PrimaryKeyRelatedField(many = False, read_only=True)
    text = serializers.CharField()
    category = serializers.PrimaryKeyRelatedField(read_only = True)
    # categ_name = serializers.StringRelatedField(read_only = True)
    tags = serializers.PrimaryKeyRelatedField(many = True, read_only = True)

    def create(self, validated_data):
        return Blog.objects.create(validated_data)
    
    def update(self, instance, validated_data):
        instance.title = validated_data['title']
        instance.text = validated_data['text']
        instance.save()
        return instance

class CategorySerializer(serializers.ModelSerializer):
    name = serializers.CharField()
    class Meta:
        model = Categories
        fields = '__all__'

class TagsSerializer(serializers.ModelSerializer):
    name = serializers.CharField()
    class Meta:
        model = Tags
        fields = ('id', 'name')
        