from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from gradio_client import Client, file

app = FastAPI()

# Initialize Gradio Client
client = Client("Nymbo/Virtual-Try-On")

# Define the request model for the input parameters
class TryOnRequest(BaseModel):
    background_url: str
    garm_img_url: str
    garment_des: str
    is_checked: bool
    is_checked_crop: bool
    denoise_steps: int
    seed: int

@app.post("/tryon")
async def try_on(request: TryOnRequest):
    try:
        # Use Gradio client to interact with the endpoint
        result = client.predict(
            dict={
                "background": file(request.background_url),
                "layers": [],
                "composite": None
            },
            garm_img=file(request.garm_img_url),
            garment_des=request.garment_des,
            is_checked=request.is_checked,
            is_checked_crop=request.is_checked_crop,
            denoise_steps=request.denoise_steps,
            seed=request.seed,
            api_name="/tryon"
        )
        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
