from django.urls import path
from quiz.views import getQuiz

urlpatterns=[
path('', getQuiz,name='getQuiz'),
]