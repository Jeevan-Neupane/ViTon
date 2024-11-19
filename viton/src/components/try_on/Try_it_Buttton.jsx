import React, { useState } from "react";
import { useProcessImageMutation } from "../../store/apis/vitonApi"; // Ensure path is correct
import { ConfirmButton, ConfirmButtonDiv } from "./style";

function Try_it_Buttton({
  vton_img,
  garm_img,
  setResultImg,
  setIsResultImgLoading,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  console.log("vton_img", vton_img, garm_img);
  const [processImage] = useProcessImageMutation();

  const handleTryItClick = async () => {
    const requestData = {
      vton_img: vton_img,
      garm_img: garm_img,
      n_samples: 1,
      n_steps: 20,
      image_scale: 2,
      seed: -1,
    };

    setIsLoading(true); // Start loading
    setIsResultImgLoading(true); // Notify parent component of loading state
    setIsError(false); // Reset error state

    try {
      // Step 1: Send the request to the API and get the image response
      const response = await processImage(requestData).unwrap();
      console.log("API response:", response);

      // Extract image path from response
      const imagePath = response?.result[0]?.image;
      if (!imagePath) throw new Error("Image not found in response");

      console.log(imagePath);

      // Step 2: Upload image to Cloudinary
      const cloudinaryResponse = await uploadToCloudinary(imagePath);
      console.log("Cloudinary response:", cloudinaryResponse);

      // Step 3: Update the state with Cloudinary URL
      setResultImg(cloudinaryResponse.secure_url);
    } catch (err) {
      console.error("Error during processing or Cloudinary upload:", err);
      setIsError(true);
      setError(err);
    } finally {
      setIsLoading(false); // End loading
      setIsResultImgLoading(false); // Notify parent component of loading state
    }
  };

  // Function to upload image to Cloudinary
  const uploadToCloudinary = async (imagePath) => {
    const formData = new FormData();
    formData.append("file", imagePath); // Image path from API response
    formData.append("upload_preset", "chat_app"); // Replace with your Cloudinary upload preset
    formData.append("cloud_name", "chatappjeevanneupane"); // Replace with your Cloudinary cloud name

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/chatappjeevanneupane/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    if (!response.ok) throw new Error("Failed to upload image to Cloudinary");
    return await response.json();
  };

  return (
    <ConfirmButtonDiv>
      <ConfirmButton
        onClick={handleTryItClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className='loading'>
            <span>Processing...</span>
            <div className='loader'></div>
          </div>
        ) : (
          "Try It"
        )}
      </ConfirmButton>
      {isError && (
        <div className='errordiv'>
          Error: {error?.message || "An error occurred"}
        </div>
      )}
    </ConfirmButtonDiv>
  );
}

export default Try_it_Buttton;
