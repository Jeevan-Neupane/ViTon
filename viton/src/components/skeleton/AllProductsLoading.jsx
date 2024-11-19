import React from "react";
import ProductSkeleton from "./ProductSkeleton";
import { Container, OuterWrapper } from "./style";

function AllProductsLoading() {
  return (
    <OuterWrapper>
      <Container>
        {Array.from({ length: 9 }, (_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </Container>
    </OuterWrapper>
  );
}

export default AllProductsLoading;
