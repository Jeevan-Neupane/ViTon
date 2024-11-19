import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useFetchSingleProductQuery } from "../../store/store";
import { SingleProductMain } from "../../style/Container";
import {
  ForYou,
  MoreProducts,
  Product,
  RelatedProducts,
  ToTop,
} from "../../components";

function SingleProductPage() {
  const { id, name } = useParams();
  const { data, isFetching, isLoading, error } = useFetchSingleProductQuery(id);

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 2);
  return (
    <SingleProductMain>
      <Product
        item={data}
        isLoading={isLoading || isFetching}
      />
      {name ? (
        <RelatedProducts
          category={name}
          id={id}
        />
      ) : null}

      <MoreProducts />
      <ToTop />
    </SingleProductMain>
  );
}
export default SingleProductPage;
