from google import genai
from dotenv import load_dotenv
import os

load_dotenv()


GEMINI_API_KEY= os.getenv("api_key")

client = genai.Client(api_key=GEMINI_API_KEY)
uploaded_file = client.files.upload(file="chargerrt.jpg")

interaction = client.interactions.create(
    model="gemini-3.6-flash",
    input= [
        {"type": "text", "text": "Ocen zniszczenia tego samochodu i go opisz"},
        {
            "type" : "image",
            "uri": uploaded_file.uri,
            "mime_type": uploaded_file.mime_type
        }
    ]
    
)
print(interaction.output_text)