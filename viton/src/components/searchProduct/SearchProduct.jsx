import React from "react";
import { AvialabelItemDiv, Container, ProductsDiv, SearchedFor } from "./style";
import SingleProduct from "../singleProduct/SingleProduct";
import SearchItemSkeleton from "../skeleton/SearchItemSkeleton";
import NoProduct from "./NoProduct";

function SearchProduct({ data = [], query, isLoading }) {
  return (
    <Container>
      <SearchedFor>
        Searched For <span> {query}</span>
      </SearchedFor>

      <AvialabelItemDiv>
        Total <span>{data.length}</span>
      </AvialabelItemDiv>

      {!isLoading ? (
        data.length > 0 ? (
          <ProductsDiv>
            {data.map((item) => {
              return (
                <SingleProduct
                  item={item}
                  key={item.id}
                />
              );
            })}
          </ProductsDiv>
        ) : (
          <NoProduct />
        )
      ) : (
        <SearchItemSkeleton />
      )}
    </Container>
  );
}

export default SearchProduct;
