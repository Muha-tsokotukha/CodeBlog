from django.contrib import admin

# Register your models here.
from .models import UserManager,User,Blog,Categories,Tags

# admin.site.register(UserManager)
admin.site.register(User)
admin.site.register(Blog)
admin.site.register(Categories)
admin.site.register(Tags)
