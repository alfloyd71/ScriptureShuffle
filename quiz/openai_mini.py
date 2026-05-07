import os
from openai import OpenAI
from dotenv import load_dotenv

if("RealPythonDjango" in str(os.getcwd()) or "Android" in str(os.getcwd())):
     load_dotenv()
elif("PointForecaster" in str(os.getcwd())):
     load_dotenv('/home/alfloyd/PointForecaster/.env')
else:
    load_dotenv('/home/alfloyd/FreeSmartPhoneapps/.env')

# Initialize the OpenAI client
client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)

def getResponse(user_input):
    # Create the chat completion request
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": user_input,
            }
        ],
        model="gpt-4o-mini",
        #model="gpt-3.5-turbo",
    )
    # Extract and return the response content
    return chat_completion.choices[0].message.content.strip()

def getUserPrompt():
 while True:
     user_input = input("Please enter a prompt (or 'exit' to quit): ")
     if user_input.lower() == 'exit':
         print("Goodbye!")
         break
     user_input = 'respond only about the weather. '+user_input
     print(getResponse(user_input))
