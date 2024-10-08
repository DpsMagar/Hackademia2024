# serializers.py
from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import User, Tutor, Student
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'role')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data['email'],
            role=validated_data['role']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class TutorSerializer(serializers.ModelSerializer):
    # Fields related to the user
    username = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True)
    role = serializers.ChoiceField(choices=User.ROLE_CHOICES, default='tutor')
    
    # Fields related to the Tutor
    address = serializers.CharField()
    contact = serializers.CharField()
    age = serializers.IntegerField()
    document = serializers.FileField()
    cover_letter = serializers.CharField()

    class Meta:
        model = Tutor
        fields = ['username', 'password', 'role', 'address', 'contact', 'age', 'document', 'cover_letter']
        

    def create(self, validated_data):
        # Extract user-related data
        username = validated_data.pop('username')
        password = validated_data.pop('password')
        role = validated_data.pop('role')

        # Create the user
        user = User.objects.create(username=username, role=role)
        user.set_password(password)
        user.save()

        # Create the Tutor profile
        tutor = Tutor.objects.create(user=user, **validated_data)
        return tutor

class StudentSerializer(serializers.ModelSerializer):
    username = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True)
    role = serializers.ChoiceField(choices=User.ROLE_CHOICES, default='student')

    class Meta:
        model = Student
        fields = ['username', 'password', 'role']

    def create(self, validated_data):
        username = validated_data.pop('username')
        password = validated_data.pop('password')
        role = validated_data.pop('role')

        # Check for existing user
        if User.objects.filter(username=username).exists():
            raise serializers.ValidationError({"username": "This username is already taken."})

        # Create the user
        try:
            user = User(username=username, role=role)
            user.set_password(password)
            user.save()
        except Exception as e:
            raise serializers.ValidationError({"error": str(e)})

        # Create the Student profile
        student = Student.objects.create(user=user)
        return student
    
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims if needed
        return token