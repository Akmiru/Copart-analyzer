from google import genai
from dotenv import load_dotenv
import os
from fastapi import FastAPI
from pydantic import BaseModel
import requests



app = FastAPI()#sdokoncz fastapi 

load_dotenv()

GEMINI_API_KEY= os.getenv("api_key")


class Car(BaseModel):
    name: str
    haskey: str
    odometer: int
    pdamage: str   #Primary damage
    sdamage: str   #Secondary damage
    status: str    #Status of driving (run and drive, stationary etc.)
    images: list[str]





@app.post("/analyze")
async def getImages(car: Car):
    client = genai.Client(api_key=GEMINI_API_KEY)

    i = 1
    for x in car.images:
        img_data = requests.get(x).content
        with open(f'image_name{i}.jpg', 'wb') as handler:
                handler.write(img_data)
        i+=1
    
    
    
    uploaded_file1 = client.files.upload(file="image_name1.jpg")
    uploaded_file2 = client.files.upload(file="image_name2.jpg")
    uploaded_file3 = client.files.upload(file="image_name3.jpg")
    uploaded_file4 = client.files.upload(file="image_name4.jpg")



    interaction = client.interactions.create(
        model="gemini-3.6-flash",
        input =[
            {"type": "text", "text": "Ocen zniszczenia tego samochodu i go opisz"},

            {
                "type" : "image",
                "uri": uploaded_file1.uri,
                "mime_type": uploaded_file1.mime_type
            },
            {
                "type" : "image",
                "uri": uploaded_file2.uri,
                "mime_type": uploaded_file2.mime_type
            },
            {
                "type" : "image",
                "uri": uploaded_file3.uri,
                "mime_type": uploaded_file3.mime_type
            },
            {
                "type" : "image",
                "uri": uploaded_file4.uri,
                "mime_type": uploaded_file4.mime_type
            }
            ]
        )
    return interaction.output_text;


