from django.shortcuts import redirect,render
from .forms import *
from .models import *
import random

# Create your views here.
def getQuiz(request):
    update_date=0
    quests=list(QuesModel.objects.all())

    #negative indexing not allowed for objects.all() access
    index=len(quests)-1

    quests_limit = []

    #populate list_questions with random verses
    list_questions=random.sample(quests, len(quests))

    #customize the verses_limit_range to the number of random verses to be added to the quiz
    # e.g., verses_limit_range = len(list_questions) would show all of the verses in the database

    """### WARNING - Do not set verses_limit_range = len(list_questions) unless the database has at least 1 entry
                     or this will cause the Django server to crash.
       ###"""
    verses_limit_range = 3
    flag_dbempty = False

    #message to display when the database has not yet been populated like right after a fresh clone from GitHub
    dbempty_message = "The database is currently void of any verses."

    #create a new list and set number of verses to verses_limit_range
    for i in range(verses_limit_range):
        if len(list_questions)>=verses_limit_range:
            update_date = quests[index].update_date
            #fresh GitHub clone - database hasn't been populated with verses yet

            quests_limit.append(list_questions[i])
            print('quests_limit[i] is ',quests_limit[i])
            flag_dbempty = False
        else:
            flag_dbempty = True
            break


    if request.method == 'POST':
        questions=list(request.POST.keys())[1:]
        selections=list(request.POST.values())[1:]
        print("all questions = ", questions)
        print("and all selections = ", selections)

        score=0
        wrong=0
        correct=0
        total=0
        selected=""
        percent ="0.00"
        wrong_answers=[]
        correct_answers=[]
        #print ('request.POST =',request.POST)

        for i in range(len(questions)):
            print('question is ',questions[i])
            print('choice is ',selections[i])
            try:
                q = QuesModel.objects.get(question=questions[i])
                print('q question is ', q.question)
                print('q answer is ',q.ans)

                selected = selections[i]#gets question from QuesModel
                print('selected is ',selected)
                if selected=="option1":#gets question with the 'option1' value of form radio button selected

                    if q.op1 == q.ans:
                        print('You have chosen the correct verse.', q.op1)
                        score+=10
                        correct+=1
                        correct_answers.append(str(q)+' - '+str(q.ans))
                    else:
                        wrong_answers.append(str(q)+' - '+str(q.ans))



                if selected=="option2":

                    if q.op2 == q.ans:
                        print('You have chosen the correct verse.', q.op2)
                        score+=10
                        correct+=1
                        correct_answers.append(str(q)+' - '+str(q.ans))
                    else:
                        wrong_answers.append(str(q)+' - '+str(q.ans))


                if selected=="option3":

                    if q.op3 == q.ans:
                        print('You have chosen the correct verse.', q.op3)
                        score+=10
                        correct+=1
                        correct_answers.append(str(q)+' - '+str(q.ans))
                    else:
                        wrong_answers.append(str(q)+' - '+str(q.ans))

                if selected=="option4":

                    if q.op4 == q.ans:
                        print('You have chosen the correct verse.', q.op4)
                        score+=10
                        correct+=1
                        correct_answers.append(str(q)+' - '+str(q.ans))
                    else:
                        wrong_answers.append(str(q)+' - '+str(q.ans))
            except QuesModel.DoesNotExist:
                print('Question not found')
            except QuesModel.MultipleObjectsReturned:
                print('Multiple questions returned for the same question text')

        total = len(quests_limit)
        wrong = total - correct
        score = round((correct/total)*100)

        print('Answers you got correct: ',correct_answers)
        print('Answers you got wrong: ', wrong_answers)
        if score!=0:
            percent = score
            #percent = round(percent)
        context = {
            'score':score,
            'time': request.POST.get('timer'),
            'correct':correct,
            'wrong':wrong,
            'percent':percent,
            'total':total,
            'correct_answers':correct_answers,
            'wrong_answers':wrong_answers,

        }
        return render(request,'quiz/result.html',context)
    else:


        context = {
            'questions':quests_limit, 'update_date':update_date,'flag_dbempty':flag_dbempty,
            'dbempty_message':dbempty_message,
        }
        return render(request,'quiz/home.html',context)
