import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  YourImageDiv,
  ImageInput,
  ImageBox,
  UploadIcon,
  ImagePreview,
  LoadingScreen,
} from "./style";
import { FaCloudUploadAlt } from "react-icons/fa";

function YourImage({ setVtonImg }) {
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    setVtonImg(imageURL);
  }, [imageURL]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true); // Start loading
    try {
      // Upload the image to Cloudinary
      const formData = new FormData();
      formData.append("file", file);
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
          <div class='loader'></div>{" "}
        </LoadingScreen>
      )}{" "}
      {/* Show loading screen */}
      <ImageInput
        type='file'
        accept='image/*'
        id='fileUpload'
        onChange={handleImageChange}
      />
      <ImageBox htmlFor='fileUpload'>
        {imageURL ? (
          <ImagePreview
            src={imageURL}
            alt='Uploaded Image'
          />
        ) : (
          <UploadIcon>
            <FaCloudUploadAlt size={50} />
            <p>Upload Image</p>
          </UploadIcon>
        )}
      </ImageBox>
    </YourImageDiv>
  );
}

export default YourImage;
