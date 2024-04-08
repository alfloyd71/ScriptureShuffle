from django.apps import AppConfig


class QuizConfig(AppConfig):
    #default_auto_field specifies the default auto-generated primary key field used for model classes within the app
    # 64-bit integer suitable for large databases
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'quiz'
