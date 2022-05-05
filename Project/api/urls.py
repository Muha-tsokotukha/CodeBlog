from django.urls import path
from .views import *

urlpatterns = [
    path('login/', LoginAPIView.as_view()),
    path('blogs/', AllBlogsAPIView.as_view()),
    path('blogs/<int:category_id>/', blog_detail),
    path('categories/', category_list),
    path('tags/', tags_list)
]