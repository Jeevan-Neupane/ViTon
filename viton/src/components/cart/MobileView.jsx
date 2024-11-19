import React, { useEffect, useState } from "react";
import {
  ColorDiv,
  DeleteDiv,
  ImageAndInfoDiv,
  ImageDiv,
  Img,
  InfoDiv,
  MainContainer,
  MobileCheckbox,
  NameDiv,
  NumberDiv,
  PriceDiv,
  RemoveAndNumberDiv,
} from "./mobileStyle";
import NumberOfProduct from "../product/NumberOfProduct";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  setChecked,
  setSelctedItemNumber,
} from "../../store/store";
import { AiFillDelete } from "react-icons/ai";
import DisountedPriceFn from "../../utils/discountedPrice";
import { CheckBox } from "./style";

function MobileView({ item }) {
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
    <MainContainer>
      <MobileCheckbox>
        <CheckBox
          title='Check To Buy'
          type='checkbox'
          checked={item.checked}
          onChange={() => {
            dispatch(setChecked(item.id));
          }}
        />
      </MobileCheckbox>
      <ImageAndInfoDiv>
        <ImageDiv>
          <Img src={item.thumbnail} />
        </ImageDiv>

        <InfoDiv>
          <NameDiv>
            <p>{item.title}</p>
          </NameDiv>
          <ColorDiv>
            <p>{item.color ? item.color : "none"}</p>
          </ColorDiv>
          <PriceDiv>${discountPrice}</PriceDiv>
        </InfoDiv>
      </ImageAndInfoDiv>
      <RemoveAndNumberDiv>
        <NumberDiv>
          <NumberOfProduct
            item={item}
            count={selectedNumber}
            setCount={setSelectedNumber}
          />
        </NumberDiv>
        <DeleteDiv
          onClick={() => {
            dispatch(removeFromCart(item.id));
          }}
        >
          <AiFillDelete />
        </DeleteDiv>
      </RemoveAndNumberDiv>
    </MainContainer>
  );
}

export default MobileView;
