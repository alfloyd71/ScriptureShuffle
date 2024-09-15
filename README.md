# Scripture Shuffle: Random Verse Challenge 
This fully functional Django application empowers your users to embark on a multiple-choice quiz featuring your personally curated selection of Bible verses sourced from the King James Version (KJV). With every quiz, participants encounter a fresh array of randomly selected verses, ensuring each Bible challenge remains uniquely engaging and enriching. 

The only other requirement besides Django is to install the pythonbible package: 

pip install pythonbible

![ScriptureShuffleAndroid.png](https://www.freesmartphoneapps.com/static/projects/images/ScriptureShuffleAndroid.png)
![ScriptureShuffleAndroidResult.png](https://www.freesmartphoneapps.com/static/projects/images/ScriptureShuffleAndroidResult.png)

Add multiple choice verses in Admin like so:

![AdminQuesmodelScreenshot1.png](https://www.freesmartphoneapps.com/static/projects/images/AdminQuesmodelScreenshot.png)

The QuesModel Model has been pre-registered and should show up in Admin for editing

![AdminQuesmodelScreenshot2.png](https://www.freesmartphoneapps.com/static/projects/images/AdminQuesmodelScreenshot2.png)

The final step is to customize the 'verses_limit_range' variable in the views.py file to select the desired number of multiple-choice verses for the Bible quiz. Ensure that the number of verses in the database is equal to or exceeds the value set in the 'verses_limit_range' setting; otherwise, the verses will not be displayed.

https://www.freesmartphoneapps.com/verseoftheday/


