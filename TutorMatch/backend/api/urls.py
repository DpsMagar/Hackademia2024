from django.urls import path
from .views import UserRegisterView, TutorRegisterView, StudentRegisterView, UserProfileView, CustomTokenObtainPairView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('register/', UserRegisterView.as_view(), name='user_register'),
    path('register/tutor/', TutorRegisterView.as_view(), name='tutor_register'),
    path('register/student/', StudentRegisterView.as_view(), name='student_register'),
    path('profile/', UserProfileView.as_view(), name='user_profile'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('login/', CustomTokenObtainPairView.as_view(), name='login'),

]