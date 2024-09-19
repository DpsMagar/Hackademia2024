from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from .views import (
    LoginView,LogoutView, userRegisterView, UserListView
)

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('register/', userRegisterView.as_view(), name='register'),
    path('logout/', LogoutView.as_view(), name='logout'),
    
    #for retreiving the data of the user
    path('users/', UserListView.as_view(), name='user-list'),
    
     # Other URL patterns
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    


]
