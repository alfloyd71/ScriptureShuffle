from django.contrib import admin
from .models import QuesModel

# Register Models using a Decorator
@admin.register(QuesModel)
class QuesModelAdmin(admin.ModelAdmin):
    list_display = ('question', 'ans')
    #ordering = ('question',)#order by last updated instead of question string
    search_fields = ('question','ans',)

# old way of registering models
#admin.site.register(QuesModel, QuesModelAdmin)