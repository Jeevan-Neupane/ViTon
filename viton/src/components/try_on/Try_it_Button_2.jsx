import React, { useState } from "react";
import { useTryOnMutation } from "../../store/apis/vitonApi2"; // Ensure path is correct
import { ConfirmButton, ConfirmButtonDiv } from "./style";

function TryItButton2({
  backgroundUrl,
  garmImgUrl,
  garmentDesc,
  setIsResultImgLoading,
  setResultImg,
}) {
  const [tryOn] = useTryOnMutation();
  const [isLoading, setIsLoading] = useState(false); // Local loading state
  const [isError, setIsError] = useState(false);

  const [error, setError] = useState(null); // Local error state

  const handleTryItClick = async () => {
    const requestData = {
      background_url: backgroundUrl,
      garm_img_url: garmImgUrl,
      garment_des: garmentDesc,
      is_checked: true,
      is_checked_crop: true,
      denoise_steps: 20,
      seed: 0,
    };

    setIsLoading(true); // Start loading
    setIsResultImgLoading(true); // Start loading

    setError(null); // Clear any previous error
    try {
      const response = await tryOn(requestData).unwrap();
      console.log("API Response:", response);

      if (response) {
        setResultImg(response.cloudinary_urls[0]);
      }
    } catch (err) {
      console.error("Error during processing:", err);
      setIsError(err);
    } finally {
      setIsLoading(false); // Stop loading
      setIsResultImgLoading(false); // Stop loading
    }
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
            <div class='loader'></div>{" "}
          </div>
        ) : (
          "Try It 2"
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

export default TryItButton2;
