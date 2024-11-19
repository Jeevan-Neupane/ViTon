import React from "react";
import {
  ProductDiv,
  ProductImageDiv,
  ProductImg,
  ProductName,
  SingleProductDiv,
} from "./style";

function Product({ data = [], id }) {
  const dataToDisplay = data.filter((item) => {
    return item.id !== parseInt(id);
  });
  return (
    <ProductDiv>
      {dataToDisplay?.map((item) => {
        return (
          <SingleProductDiv
            to={`/products/${item.category}/${item.id}`}
            key={item.id}
          >
            <ProductImageDiv>
              <ProductImg src={item.thumbnail} />
            </ProductImageDiv>
            <ProductName>{item.title}</ProductName>
          </SingleProductDiv>
        );
      })}
    </ProductDiv>
  );
}

export default Product;
