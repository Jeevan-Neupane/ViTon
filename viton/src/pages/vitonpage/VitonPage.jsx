import React, { useEffect, useState } from "react";
import {
  VitonContainerInside,
  VitonContainerOutside,
  VitonLeftDiv,
  VitonRightDiv,
} from "./style";
import ClotheImage from "../../components/try_on/ClotheImage";
import { useParams } from "react-router-dom";
import { useFetchSingleProductQuery } from "../../store/store";
import YourImage from "../../components/try_on/YourImage";
import ResultImage from "../../components/try_on/ResultImage";

import Try_it_Buttton from "../../components/try_on/Try_it_Buttton";
import TryItButton2 from "../../components/try_on/Try_it_Button_2";
import StoredImages from "../../viton_comp/Stored_Img";
import Try_it_Button_Self from "../../components/try_on/Try_it_Button_Self";

function VitonPage() {
  let { category, id } = useParams();
  const { isFetching, data } = useFetchSingleProductQuery(id);

  const [vton_img, setVtonImg] = useState(null);
  const [garm_img, setGarmImg] = useState(null);
  const [result_img, setResultImg] = useState(null);

  const [isResultImgLoading, setIsResultImgLoading] = useState(false);

  // Load existing images from localStorage
  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem("tryOnImages")) || [];
    console.log("Stored images:", storedImages);
  }, []);

  const storeImagesInLocalStorage = (vton, garm, result) => {
    const storedImages = JSON.parse(localStorage.getItem("tryOnImages")) || [];
    const newImage = { vton_img: vton, garm_img: garm, result_img: result };
    storedImages.push(newImage);
    localStorage.setItem("tryOnImages", JSON.stringify(storedImages));
  };

  useEffect(() => {
    if (data) {
      setGarmImg(data?.thumbnail);
    }
  }, [data]);

  useEffect(() => {
    if (vton_img && garm_img && result_img) {
      storeImagesInLocalStorage(vton_img, garm_img, result_img);
    }
  }, [vton_img, garm_img, result_img]);
  console.log("viton", vton_img, garm_img, result_img);
  return (
    <VitonContainerOutside>
      <VitonContainerInside>
        <VitonLeftDiv>
          {!isFetching && <ClotheImage thumbnail={data?.thumbnail} />}
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
    </VitonContainerOutside>
  );
}

export default VitonPage;
