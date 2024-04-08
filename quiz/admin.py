from django.contrib import admin
from .models import QuesModel

@admin.register(QuesModel)
class QuesModelAdmin(admin.ModelAdmin):
    list_display = ('question', 'ans')
    search_fields = ('question','ans',)
