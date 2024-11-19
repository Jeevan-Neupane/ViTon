import React from "react";
import {
  Container,
  FilterIconDiv,
  IconDiv,
  TotalItemDiv,
  TotalItemText,
  TotalNumber,
  ViewWayDiv,
  WayOfArrangementDiv,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { BsFillGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import Arrangement from "./Arrangement";
import { hideShowFilterDiv, setShowFilterDiv, setView } from "../../store/store";
import { CiFilter } from "react-icons/ci";

function ArrangeProducts() {
  const dispatch = useDispatch();
  const { filter_products, gridView, showFilterDiv } = useSelector(
    (state) => state.filterProducts
  );

  return (
    <Container>
      <ViewWayDiv>
        <FilterIconDiv
          onClick={() => {
           
              dispatch(setShowFilterDiv());
            
          }}
        >
          <CiFilter />
        </FilterIconDiv>
        <IconDiv
          highlight={gridView}
          onClick={() => {
            dispatch(setView(true));
          }}
        >
          <BsFillGridFill />
        </IconDiv>
        <IconDiv
          highlight={!gridView}
          onClick={() => {
            dispatch(setView(false));
          }}
        >
          <FaThList />
        </IconDiv>
      </ViewWayDiv>
      <TotalItemDiv>
        <TotalItemText>Total:</TotalItemText>
        <TotalNumber> {filter_products?.length}</TotalNumber>
      </TotalItemDiv>

      <WayOfArrangementDiv>
        <Arrangement />
      </WayOfArrangementDiv>
    </Container>
  );
}

export default ArrangeProducts;
