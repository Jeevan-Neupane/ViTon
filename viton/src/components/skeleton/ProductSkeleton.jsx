import React from "react";
import {
  CCDiv,
  CompanyTag,
  DiscountedPrice,
  ImageDiv,
  InfoDiv,
  Name,
  Price,
  RatingTag,
  SingleProductDiv,
} from "./style";
import InsideAnimatedDiv from "./AnimatedDiv";

function ProductSkeleton() {
  return (
    <SingleProductDiv>
      <ImageDiv>
        <InsideAnimatedDiv />
      </ImageDiv>
      <InfoDiv>
        <Name>
          <InsideAnimatedDiv />
        </Name>
        <DiscountedPrice>
          <InsideAnimatedDiv />
        </DiscountedPrice>
        <Price>
          <InsideAnimatedDiv />
        </Price>
        <RatingTag>
          <InsideAnimatedDiv />
        </RatingTag>

        <CCDiv>
          <CompanyTag>
            <InsideAnimatedDiv />
          </CompanyTag>
          <CompanyTag>
            <InsideAnimatedDiv />
          </CompanyTag>
        </CCDiv>
      </InfoDiv>
    </SingleProductDiv>
  );
}

export default ProductSkeleton;
