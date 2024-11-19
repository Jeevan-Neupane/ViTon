import React from "react";
import { useParams } from "react-router-dom";
import { useFetchSearchedProductsQuery } from "../../store/store";
import { SearchPageMain } from "../../style/Container";
import { MoreProducts, SearchProduct, ToTop } from "../../components";

function SearchPage() {
  const { product } = useParams();
  const { data, isLoading, isError, isFetching } =
    useFetchSearchedProductsQuery(product);
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 2);
  return (
    <SearchPageMain>
      <SearchProduct
        data={data?.products}
        query={product}
        isLoading={isLoading || isFetching}
      />
      <MoreProducts />
      <ToTop />
    </SearchPageMain>
  );
}

export default SearchPage;
