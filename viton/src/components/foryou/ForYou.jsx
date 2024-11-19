import React, { useEffect, useState } from "react";

import {
  AllProductsContainer,
  ForYouContainer,
  ForYouTo,
  LoadMoreButton,
  LoadMoreDiv,
} from "./style";

import { useFetchLimitAndSkipProductsQuery } from "../../store/apis/productsApi";
import ProductSkeleton from "../skeleton/ProductSkeleton";
import ForYouProduct from "./ForYouProduct";
import { useDispatch, useSelector } from "react-redux";
import { updateForYouNumber } from "../../store/store";

function ForYou() {
  const number = useSelector((state) => state.numbers.forYouNumber);
  const dispatch = useDispatch();
  const [dataShown, setDataShown] = useState([]);
  const { data, isError, isFetching } = useFetchLimitAndSkipProductsQuery({
    limit: 100,
    skip: 0,
  });
  useEffect(() => {
    if (data?.products) {
      const dataToShow = data.products.slice(0, number * 4);
      setDataShown([...dataToShow]);
    }
  }, [number, data]);

  return (
    <ForYouContainer>
      <ForYouTo>For You</ForYouTo>
      <AllProductsContainer>
        {dataShown?.map((product) => {
          return (
            <ForYouProduct
              item={product}
              key={product.id}
            />
          );
        })}
      </AllProductsContainer>
      {isFetching ? (
        <AllProductsContainer
          style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
        >
          {Array.from({ length: 4 }, (_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </AllProductsContainer>
      ) : (
        <LoadMoreDiv>
          <LoadMoreButton
            disable={dataShown?.length === 100 ? "disable" : false}
            onClick={() => {
              if (dataShown?.length === 100) {
                dispatch(updateForYouNumber(number));
                return;
              }
              dispatch(updateForYouNumber(number + 1));
            }}
          >
            {dataShown?.length === 100 ? "Disabled" : "Load More"}
          </LoadMoreButton>
        </LoadMoreDiv>
      )}
    </ForYouContainer>
  );
}

export default ForYou;
