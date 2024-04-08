from django.db import models
import datetime
 
# Create your models here.
class QuesModel(models.Model):
    question = models.CharField(max_length=600,null=True)#542 chars is the longest verse
    op1 = models.CharField(max_length=200,null=True)
    op2 = models.CharField(max_length=200,null=True)
    op3 = models.CharField(max_length=200,null=True)
    op4 = models.CharField(max_length=200,null=True)
    ans = models.CharField(max_length=200,null=True)

    #Page last updated
    update_date = models.DateTimeField('Last Updated', default=datetime.datetime.now())
    
    def __str__(self):
        return self.question