# Generated by Django 5.0.3 on 2024-03-09 09:44

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quesmodel',
            name='update_date',
            field=models.DateTimeField(default=datetime.datetime(2024, 3, 9, 4, 44, 51, 268604), verbose_name='Last Updated'),
        ),
    ]
