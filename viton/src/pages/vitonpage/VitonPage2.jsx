import React, { useEffect, useState } from "react";
import {
  VitonContainerInside,
  VitonContainerOutside,
  VitonLeftDiv,
  VitonRightDiv,
} from "./style";
import ClotheImage from "../../components/try_on/ClotheImage";
import { useParams } from "react-router-dom";
import YourImage from "../../components/try_on/YourImage";
import ResultImage from "../../components/try_on/ResultImage";

import Try_it_Buttton from "../../components/try_on/Try_it_Buttton";
import TryItButton2 from "../../components/try_on/Try_it_Button_2";
import StoredImages from "../../viton_comp/Stored_Img";
import Try_it_Button_Self from "../../components/try_on/Try_it_Button_Self";
import female_data from "../../data/female_dress";
import { ToTop } from "../../components";

function VitonPage2() {
  let { id } = useParams();
  const productId = parseInt(id, 10); // Convert id to a number for comparison
  const product = female_data.find((item) => item.id === productId); // Find the product by id

  const [vton_img, setVtonImg] = useState(null);
  const [garm_img, setGarmImg] = useState(product?.thumbnail || null);
  const [result_img, setResultImg] = useState(null);

  const [isResultImgLoading, setIsResultImgLoading] = useState(false);

  // Load existing images from localStorage
  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem("tryOnImages")) || [];
    console.log("Stored images:", storedImages);
  }, []);

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 2);

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

  if (!product) {
    return <div>Product not found</div>; // Handle case where no product matches the id
  }

  console.log("viton", vton_img, garm_img, result_img);

  return (
    <VitonContainerOutside>
      <VitonContainerInside>
        <VitonLeftDiv>
          <ClotheImage thumbnail={product.thumbnail} />
          <YourImage setVtonImg={setVtonImg} />
        </VitonLeftDiv>

        <VitonRightDiv>
          <ResultImage
            resultImg={result_img}
            isResultImgLoading={isResultImgLoading}
          />
        </VitonRightDiv>
      </VitonContainerInside>
      <TryItButton2
        backgroundUrl={vton_img}
        garmImgUrl={garm_img}
        setIsResultImgLoading={setIsResultImgLoading}
        setResultImg={setResultImg}
        
      />
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

export default VitonPage2;
