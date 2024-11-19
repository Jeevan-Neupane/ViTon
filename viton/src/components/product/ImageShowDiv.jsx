import React, { useEffect, useState } from "react";
import {
  AllImageContainer,
  AllImg,
  AllImgDiv,
  ImageContainer,
  SingleImageContainer,
  SingleImg,
} from "./style";

function ImageShowDiv({ item }) {
  const [index, setIndex] = useState(item.images.length - 1);

  return (
    <ImageContainer>
      <AllImageContainer>
        {item.images.map((imageUrl, ind) => {
          return (
            <AllImgDiv
              key={imageUrl}
              onPointerEnter={() => {
                setIndex(ind);
              }}
              highlight={index === ind ? "highlight" : false}
            >
              <AllImg src={imageUrl} />
            </AllImgDiv>
          );
        })}
      </AllImageContainer>
      <SingleImageContainer>
        <SingleImg src={item.images[index]} />
      </SingleImageContainer>
    </ImageContainer>
  );
}

export default ImageShowDiv;
