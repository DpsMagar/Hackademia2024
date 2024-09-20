# views.py
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import Tutor, Student
from .serializers import UserSerializer, TutorSerializer, StudentSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate

class UserRegisterView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

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

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)
        if user is not None:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'role': user.role  # Send the user's role
            })
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)