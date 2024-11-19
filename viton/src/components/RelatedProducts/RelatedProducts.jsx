import React from "react";
import { useFetchCatagoriesProductsQuery } from "../../store/store";
import { Heading, RelatedProductsDiv } from "./style";
import Product from "./Product";

function RelatedProducts({ category, id }) {
  const { data, isFetching, isError } =
    useFetchCatagoriesProductsQuery(category);


  return (
    <RelatedProductsDiv>
      <Heading>Related Products</Heading>
      <Product data={data?.products} id={id}/>
    </RelatedProductsDiv>
  );
}

export default RelatedProducts;
