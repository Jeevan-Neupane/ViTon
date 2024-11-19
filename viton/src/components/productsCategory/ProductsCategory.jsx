import React from "react";
import {
  AllProducts,
  Container,
  Header,
  ProductCategoryDiv,
  Title,
} from "./style";
import HomeCategories from "../homeCategories/HomeCategories";

function ProductCategory() {
  return (
    <Container>
      <Header>
        <Title>Categories</Title>
        <AllProducts
          to='/real_camera_try'
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Own Clothes
        </AllProducts>
      </Header>
      <ProductCategoryDiv>
        <HomeCategories />
      </ProductCategoryDiv>
    </Container>
  );
}

export default ProductCategory;
