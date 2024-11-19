import React, { useEffect, useState } from "react";
import {
  VitonContainerInside,
  VitonContainerOutside,
  VitonLeftDiv,
  VitonRightDiv,
} from "./style";
import UploadClothe from "../../components/real_camera/UploadClothes";
import ClickImage from "../../components/real_camera/ClickImage";
import ResultImage from "../../components/try_on/ResultImage";
import Try_it_Buttton from "../../components/try_on/Try_it_Buttton";
import TryItButton2 from "../../components/try_on/Try_it_Button_2";
import Try_it_Button_Self from "../../components/try_on/Try_it_Button_Self";
import StoredImages from "../../viton_comp/Stored_Img";
import { ToTop } from "../../components";
import YourImage from "../../components/try_on/YourImage";

function CameraTryPage() {
  const [vton_img, setVtonImg] = useState(null); // User's uploaded or captured image
  const [garm_img, setGarmImg] = useState(null); // Garment image
  const [result_img, setResultImg] = useState(null); // Try-on result image

  const [isResultImgLoading, setIsResultImgLoading] = useState(false); // Loading state for result image

  // Load existing images from localStorage
  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem("tryOnImages")) || [];
    console.log("Stored images:", storedImages);
  }, []);

  // Smooth scroll to the top when the component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const storeImagesInLocalStorage = (vton, garm, result) => {
    const storedImages = JSON.parse(localStorage.getItem("tryOnImages")) || [];
    const newImage = { vton_img: vton, garm_img: garm, result_img: result };
    storedImages.push(newImage);
    localStorage.setItem("tryOnImages", JSON.stringify(storedImages));
  };

  // Store images in localStorage whenever all three are set
  useEffect(() => {
    if (vton_img && garm_img && result_img) {
      storeImagesInLocalStorage(vton_img, garm_img, result_img);
    }
  }, [vton_img, garm_img, result_img]);

  console.log("CameraTryPage Images:", { vton_img, garm_img, result_img });

  return (
    <VitonContainerOutside>
      <VitonContainerInside>
        <VitonLeftDiv>
          <UploadClothe setGarmImg={setGarmImg} />
          <YourImage setVtonImg={setVtonImg} />
        </VitonLeftDiv>

        <VitonRightDiv>
          <ResultImage
            resultImg={result_img}
            isResultImgLoading={isResultImgLoading}
          />
        </VitonRightDiv>
      </VitonContainerInside>

      
      <Try_it_Button_Self
        backgroundUrl={vton_img}
        garmImgUrl={garm_img}
        setIsResultImgLoading={setIsResultImgLoading}
        setResultImg={setResultImg}
      />
      <StoredImages />
      <ToTop />
    </VitonContainerOutside>
  );
}

export default CameraTryPage;
