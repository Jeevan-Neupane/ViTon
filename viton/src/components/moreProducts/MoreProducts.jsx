import React, { useEffect, useState } from "react";

import {
  AllProductsContainer,
  ForYouContainer,
  ForYouTo,
  Header,
  LoadMoreButton,
  LoadMoreDiv,
  Title,
} from "./style";

import { useFetchLimitAndSkipProductsQuery } from "../../store/apis/productsApi";
import ProductSkeleton from "../skeleton/ProductSkeleton";

import SingleProduct from "../singleProduct/SingleProduct";
import { updateMoreProductNumber } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { AllProducts } from "../productsCategory/style";

function MoreProducts() {
  const number = useSelector((state) => state.numbers.moreProductNumber);
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
      <Header>
        <Title>More Products</Title>
        <AllProducts
          to='/products'
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          All Products
        </AllProducts>
      </Header>
      <AllProductsContainer>
        {dataShown?.map((product) => {
          return (
            <SingleProduct
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
                dispatch(updateMoreProductNumber(number));
                return;
              }
              dispatch(updateMoreProductNumber(number + 1));
            }}
          >
            {dataShown?.length === 100 ? "Disabled" : "Load More"}
          </LoadMoreButton>
        </LoadMoreDiv>
      )}
    </ForYouContainer>
  );
}

export default MoreProducts;
