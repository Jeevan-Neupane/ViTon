from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, HttpUrl
from fastapi.middleware.cors import CORSMiddleware
from gradio_client import Client, handle_file
import asyncio
import logging

# Initialize FastAPI and Gradio client
app = FastAPI()

# Configure CORS middleware to allow all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow requests from any origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

client = Client("levihsu/OOTDiffusion")

# Set up logging
logging.basicConfig(level=logging.INFO)

# Define request models with validation for image URLs
class ProcessHDRequest(BaseModel):
    vton_img: HttpUrl  # Ensures URL validity
    garm_img: HttpUrl  # Ensures URL validity
    n_samples: int = 1
    n_steps: int = 20
    image_scale: float = 2
    seed: int = -1

class ProcessDCRequest(BaseModel):
    vton_img: HttpUrl
    garm_img: HttpUrl
    category: str
    n_samples: int = 1
    n_steps: int = 20
    image_scale: float = 2
    seed: int = -1

# Helper function to call Gradio client asynchronously
async def predict_async(*args, **kwargs):
    return await asyncio.to_thread(client.predict, *args, **kwargs)

# Define the /process_hd endpoint
@app.post("/process_hd")
async def process_hd(request: ProcessHDRequest):
    try:
        # Log request details
        logging.info(f"Processing HD request: {request}")
        
        # Call Gradio client asynchronously
        result = await predict_async(
            vton_img=handle_file(request.vton_img),
            garm_img=handle_file(request.garm_img),
            n_samples=request.n_samples,
            n_steps=request.n_steps,
            image_scale=request.image_scale,
            seed=request.seed,
            api_name="/process_hd"
        )
        return {"result": result}
    except ValueError as e:  # Catch specific errors if needed
        logging.error(f"ValueError: {e}")
        raise HTTPException(status_code=400, detail="Invalid input provided")
    except Exception as e:
        logging.error(f"Error processing HD request: {e}")
        raise HTTPException(status_code=500, detail="An error occurred while processing the request")

# Define the /process_dc endpoint
@app.post("/process_dc")
async def process_dc(request: ProcessDCRequest):
    try:
        # Log request details
        logging.info(f"Processing DC request: {request}")
        
        # Call Gradio client asynchronously
        result = await predict_async(
            vton_img=handle_file(request.vton_img),
            garm_img=handle_file(request.garm_img),
            category=request.category,
            n_samples=request.n_samples,
            n_steps=request.n_steps,
            image_scale=request.image_scale,
            seed=request.seed,
            api_name="/process_dc"
        )
        return {"result": result}
    except ValueError as e:
        logging.error(f"ValueError: {e}")
        raise HTTPException(status_code=400, detail="Invalid input provided")
    except Exception as e:
        logging.error(f"Error processing DC request: {e}")
        raise HTTPException(status_code=500, detail="An error occurred while processing the request")
