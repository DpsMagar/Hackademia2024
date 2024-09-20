from django.contrib import admin
from .models import Tutor, Student

class TutorAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Tutor._meta.fields]

class StudentAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Student._meta.fields]

admin.site.register(Tutor, TutorAdmin)
admin.site.register(Student, StudentAdmin)
