import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
  YourImageDiv,
  WebcamBox,
  ImageBox,
  UploadIcon,
  ImagePreview,
  LoadingScreen,
  CaptureButton,
  CancelButton,
} from "./style";
import { FaCamera } from "react-icons/fa";

function ClickImage({ setVtonImg }) {
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [showWebcam, setShowWebcam] = useState(false); // Toggle webcam
  const videoRef = useRef(null); // Reference to the webcam video element
  const canvasRef = useRef(null); // Reference to the canvas element for capturing the image

  useEffect(() => {
    setVtonImg(imageURL);
  }, [imageURL, setVtonImg]);

  const startWebcam = () => {
    setShowWebcam(true);
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((error) => console.error("Error accessing webcam:", error));
  };

  const stopWebcam = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
    setShowWebcam(false);
  };

  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Stop the webcam
    stopWebcam();

    // Get image data URL
    const imageDataURL = canvas.toDataURL("image/png");
    uploadImage(imageDataURL);
  };

  const cancelCapture = () => {
    stopWebcam(); // Stop the webcam
    setShowWebcam(false); // Hide the webcam view
  };

  const uploadImage = async (imageDataURL) => {
    setLoading(true); // Start loading
    try {
      // Convert the Data URL to a Blob
      const response = await fetch(imageDataURL);
      const blob = await response.blob();

      // Upload to Cloudinary
      const formData = new FormData();
      formData.append("file", blob);
      formData.append("upload_preset", "chat_app"); // Use your Cloudinary preset

      const cloudinaryResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/chatappjeevanneupane/image/upload", // Replace with your Cloudinary cloud name
        formData
      );

      setImageURL(cloudinaryResponse.data.secure_url); // Display the Cloudinary URL of the uploaded image
    } catch (error) {
      console.error("Error uploading the image:", error);
    } finally {
      setLoading(false); // Stop loading when done
    }
  };

  return (
    <YourImageDiv>
      <h1>Your Image</h1>
      {loading && (
        <LoadingScreen>
          <div className='loader'></div>
        </LoadingScreen>
      )}
      {!showWebcam && (
        <>
          <ImageBox onClick={startWebcam}>
            {imageURL ? (
              <ImagePreview
                src={imageURL}
                alt='Captured Image'
              />
            ) : (
              <UploadIcon>
                <FaCamera size={50} />
                <p>Capture Image</p>
              </UploadIcon>
            )}
          </ImageBox>
        </>
      )}
      {showWebcam && (
        <WebcamBox>
          <video
            ref={videoRef}
            style={{
              width: "100%",  // Ensure it fills the width of the parent container
              height: "100%", // Ensure it fills the height of the parent container
              objectFit: "contain", // Ensures it stays within bounds and maintains aspect ratio
            }}
          />
          <canvas
            ref={canvasRef}
            style={{ display: "none" }}
          />
          <CaptureButton onClick={captureImage}>Capture</CaptureButton>
          <CancelButton onClick={cancelCapture}>Cancel</CancelButton>
        </WebcamBox>
      )}
    </YourImageDiv>
  );
}

export default ClickImage;
