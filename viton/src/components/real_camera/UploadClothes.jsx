import React, { useState, useRef } from "react";
import { ClotheImageDiv, ClotheImg } from "./style";

function UploadClothe({ setGarmImg }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const CLOUDINARY_UPLOAD_PRESET = "chat_app";

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result); // Set the base64-encoded image data
      };
      reader.readAsDataURL(file);
      uploadToCloudinary(file); // Upload the file to Cloudinary
    }
  };

  const uploadToCloudinary = async (file) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/chatappjeevanneupane/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Uploaded to Cloudinary:", data);
        setGarmImg(data.secure_url); // Pass the Cloudinary URL to the parent component
      } else {
        console.error("Failed to upload to Cloudinary:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click(); // Programmatically click the hidden file input
  };

  return (
    <ClotheImageDiv>
      <h1 style={{ marginBottom: "1rem" }}>Clothe's Image</h1>
      <div
        onClick={handleIconClick}
        style={{
          display: "inline-block",
          padding: "1rem",
          backgroundColor: "#f0f0f0",
          borderRadius: "50%",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
      >
        📷 {/* Replace this emoji with an icon from your preferred library */}
      </div>
      <input
        type='file'
        accept='image/*'
        ref={fileInputRef}
        style={{ display: "none" }} // Hide the file input
        onChange={handleImageChange}
      />
      {uploading && <p>Uploading...</p>}
      {imageSrc && (
        <ClotheImg
          src={imageSrc}
          alt='Selected clothing'
        />
      )}
    </ClotheImageDiv>
  );
}

export default UploadClothe;
