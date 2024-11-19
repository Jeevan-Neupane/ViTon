import React from "react";
import { ProductNotFoundDiv, ProductNotFoundText } from "./style";

function NoProduct() {
  return (
    <ProductNotFoundDiv>
      <ProductNotFoundText>No Products Are Availabe</ProductNotFoundText>
    </ProductNotFoundDiv>
  );
}

export default NoProduct;
