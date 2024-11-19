import React from "react";
import { ProductsDiv } from "./style";
import ProductSkeleton from "./ProductSkeleton";

function SearchItemSkeleton() {
  return (
    <ProductsDiv>
      {Array.from({ length: 8 }, (_, index) => {
        return <ProductSkeleton key={index} />;
      })}
    </ProductsDiv>
  );
}

export default SearchItemSkeleton;
