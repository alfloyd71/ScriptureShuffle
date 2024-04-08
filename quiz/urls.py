from quiz.views import getQuiz  
from django.urls import path

urlpatterns=[
path('', getQuiz,name='getQuiz'),
]