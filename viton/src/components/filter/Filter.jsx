import React from "react";
import {
  CategoryDiv,
  CategoryTitle,
  CompanyDiv,
  CompanyTitle,
  Outer,
  PriceDiv,
  PriceTitle,
  RatingDiv,
  RatingTitle,
  ResetButton,
  ResetButtonDiv,
  ResetDiv,
  ResetTitle,
} from "./style";
import Category from "./Category";
import Rating from "./Rating";
import Price from "./Price";
import Company from "./Company";
import { useDispatch, useSelector } from "react-redux";
import {
  hideShowFilterDiv,
  resetFilters,
  resetPageNumber,
  sortProducts,
} from "../../store/store";
import { MdOutlineClose } from "react-icons/md";
function Filter({ isCategoryLoading }) {
  const dispatch = useDispatch();

  const { showFilterDiv } = useSelector((state) => state.filterProducts);
  return (
    <Outer className={showFilterDiv ? "show" : "no"}>
      <CategoryDiv>
        <CategoryTitle>
          <span>Category</span>
          <span
            className='closeIcon'
            onClick={() => {
              dispatch(hideShowFilterDiv());
            }}
          >
            <MdOutlineClose />
          </span>
        </CategoryTitle>
        <Category isCategoryLoading={isCategoryLoading} />
      </CategoryDiv>
      <RatingDiv>
        <RatingTitle>Rating</RatingTitle>
        <Rating />
      </RatingDiv>

      <PriceDiv>
        <PriceTitle>Price</PriceTitle>
        <Price />
      </PriceDiv>
      <CompanyDiv>
        <CompanyTitle>Brands</CompanyTitle>
        <Company />
      </CompanyDiv>
      <ResetDiv>
        <ResetTitle>Reset</ResetTitle>
        <ResetButtonDiv>
          <ResetButton
            onClick={() => {
              dispatch(resetFilters());
              dispatch(sortProducts());
              dispatch(resetPageNumber());
            }}
          >
            Reset
          </ResetButton>
        </ResetButtonDiv>
      </ResetDiv>
    </Outer>
  );
}

export default Filter;
