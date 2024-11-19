import React from "react";
import { ClotheImageDiv, ClotheImg } from "./style";

function ClotheImage({ thumbnail }) {
  console.log(thumbnail);
  return (
    <>
      <ClotheImageDiv>
        <h1
          style={{
            marginBottom: "1rem",
          }}
        >
          Clothe's Image
        </h1>
        <ClotheImg src={thumbnail} />
      </ClotheImageDiv>
    </>
  );
}

export default ClotheImage;
