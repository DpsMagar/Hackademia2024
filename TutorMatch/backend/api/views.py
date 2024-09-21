# views.py
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import Tutor, Student
from .serializers import UserSerializer, TutorSerializer, StudentSerializer,CustomTokenObtainPairSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken

class UserRegisterView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        # Generate tokens
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'role': user.role  # Assuming you want to send back the user's role
        }, status=status.HTTP_201_CREATED)


class TutorRegisterView(generics.CreateAPIView):
    serializer_class = TutorSerializer
    permission_classes = [AllowAny]


class StudentRegisterView(generics.CreateAPIView):
    serializer_class = StudentSerializer
    permission_classes = [AllowAny]


class UserProfileView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user = request.user
        if user.role == 'tutor':
            tutor = Tutor.objects.get(user=user)
            serializer = TutorSerializer(tutor)
        elif user.role == 'student':
            student = Student.objects.get(user=user)
            serializer = StudentSerializer(student)
        else:
            return Response({'error': 'Invalid user role'}, status=400)
        return Response(serializer.data)  

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
    
# Token refresh view
class TokenRefreshView(TokenRefreshView):
    permission_classes = [AllowAny]