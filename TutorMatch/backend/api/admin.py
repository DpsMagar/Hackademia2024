from django.contrib import admin
from .models import Tutor, Student, User

class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'role']  # Add more fields as needed
    search_fields = ['username', 'email']

class TutorAdmin(admin.ModelAdmin):
    list_display = ['user', 'address', 'contact', 'age']
    search_fields = ['user__username', 'address']

class StudentAdmin(admin.ModelAdmin):
    list_display = ['user', ]
    search_fields = ['user', ]

# Register the models
admin.site.register(User, UserAdmin)
admin.site.register(Tutor, TutorAdmin)
admin.site.register(Student, StudentAdmin)
