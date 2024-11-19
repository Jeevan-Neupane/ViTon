import React, { useEffect, useState } from "react";

import {
  CheckBox,
  CheckProductDiv,
  DetailsDiv,
  ImageContainerDiv,
  NumberDiv,
  NumberSelectionDiv,
  PriceItemDiv,
  ProductImg,
  ProductTitleDiv,
  RemoveProduct,
  SingleProductContainer,
} from "./style";
import NumberOfProduct from "../product/NumberOfProduct";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  setChecked,
  setSelctedItemNumber,
} from "../../store/store";
import { AiFillDelete } from "react-icons/ai";
import DisountedPriceFn from "../../utils/discountedPrice";

function SingleProduct({ item }) {
  const [selectedNumber, setSelectedNumber] = useState(item.totalNumber);
  const dispatch = useDispatch();

  useEffect(() => {
    const dispatchValue = {
      selectedNumber,
      id: item.id,
    };
    dispatch(setSelctedItemNumber(dispatchValue));
  }, [selectedNumber]);
  const discountPrice = DisountedPriceFn(item.price, item.discountPercentage);
  return (
    <SingleProductContainer>
      <CheckProductDiv>
        <CheckBox
          title='Check To Buy'
          type='checkbox'
          checked={item.checked}
          onChange={() => {
            dispatch(setChecked(item.id));
          }}
        />
      </CheckProductDiv>

      <ImageContainerDiv to={`/products/${item.category}/${item.id}`}>
        <ProductImg src={item.thumbnail} />
      </ImageContainerDiv>
      <DetailsDiv>
        <ProductTitleDiv>
          <p>{item.title}</p>
          <p>{item.color ? item.color : "none"}</p>
        </ProductTitleDiv>
        <NumberDiv>
          <PriceItemDiv>${discountPrice}</PriceItemDiv>

          <NumberSelectionDiv>
            <NumberOfProduct
              item={item}
              count={selectedNumber}
              setCount={setSelectedNumber}
            />
            <RemoveProduct
              onClick={() => {
                dispatch(removeFromCart(item.id));
              }}
            >
              <AiFillDelete />
            </RemoveProduct>
          </NumberSelectionDiv>
        </NumberDiv>
      </DetailsDiv>
    </SingleProductContainer>
  );
}

export default SingleProduct;
