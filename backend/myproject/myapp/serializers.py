from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'favourite_pokemon']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            favourite_pokemon=validated_data['favourite_pokemon']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
