import React, { useEffect } from "react";
import { SingleProductMain } from "../../style/Container";
import { Product } from "../../components";
import { useFetchSingleProductQuery } from "../../store/store";
import { useParams } from "react-router-dom";

function ForYouPage() {
  const { id, name } = useParams();
  const { data, isFetching, isLoading, error } = useFetchSingleProductQuery(id);
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 2);
  return (
    <SingleProductMain>
      <Product
        item={data}
        isLoading={isLoading || isFetching}
      />
    </SingleProductMain>
  );
}

export default ForYouPage;
