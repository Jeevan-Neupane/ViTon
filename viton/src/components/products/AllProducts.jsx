import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  LeftArrow,
  MainContainer,
  Number,
  NumberBar,
  Numbers,
  OuterWrapper,
  RightArrow,
} from "./style";
import SingleProduct from "../singleProduct/SingleProduct";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import Blank from "../blank/Blank";
import ArrangeProducts from "../arrangebar/ArrangeProducts";
import GridViewSingleProudct from "../singleProduct/GridView";
import AllProductsLoading from "../skeleton/AllProductsLoading";
import { setPageNumber } from "../../store/store";

function AllProducts({ productsPerPage, isLoading }) {
  const { gridView, filter_products } = useSelector(
    (state) => state.filterProducts
  );
  
  const { pageNumber } = useSelector((state) => state.products);
  let numberArray = [];

  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, [filter_products]);

  

  if (filter_products) {
    for (let i = 0; i < filter_products?.length / productsPerPage; i++) {
      numberArray.push(i + 1);
    }
  }

  const dispatch = useDispatch();

  const intialIndex = pageNumber * productsPerPage;
  const lastIndex = pageNumber * productsPerPage + productsPerPage;

  const products_to_display = filter_products?.slice(intialIndex, lastIndex);

  return (
    <MainContainer>
      <ArrangeProducts />
      {!isLoading ? (
        <OuterWrapper>
          {filter_products?.length === 0 ? (
            <Blank />
          ) : (
            <Container
              grid={gridView ? "grid" : "no"}
              className={gridView ? "grid" : "normal"}
            >
              {products_to_display?.map((product) => {
                return !gridView ? (
                  <GridViewSingleProudct
                    item={product}
                    key={product.id}
                  />
                ) : (
                  <SingleProduct
                    item={product}
                    key={product.id}
                  />
                );
              })}
            </Container>
          )}
          <NumberBar>
            <LeftArrow
              onClick={() => {
                window.scrollTo(0, 0);
                if (pageNumber > 0) {
                  dispatch(setPageNumber(pageNumber - 1));
                } else {
                  dispatch(setPageNumber(0));
                }
              }}
              invalid={pageNumber === 0 ? true : false}
            >
              <AiFillCaretLeft />
            </LeftArrow>
            <Numbers>
              {numberArray.map((data) => {
                return (
                  <Number
                    key={data}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      dispatch(setPageNumber(data - 1));
                    }}
                    highlight={data === pageNumber + 1 ? true : false}
                  >
                    {data}
                  </Number>
                );
              })}
            </Numbers>
            <RightArrow
              onClick={() => {
                window.scrollTo(0, 0);
                if (pageNumber < numberArray.length - 1) {
                  dispatch(setPageNumber(pageNumber + 1));
                } else {
                  dispatch(setPageNumber(numberArray.length - 1));
                }
              }}
              invalid={pageNumber === numberArray.length - 1 ? true : false}
            >
              <AiFillCaretRight />
            </RightArrow>
          </NumberBar>
        </OuterWrapper>
      ) : (
        <AllProductsLoading />
      )}
    </MainContainer>
  );
}

export default AllProducts;
