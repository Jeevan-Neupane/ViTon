import React, { useEffect, useState } from "react";
import ImageShowDiv from "./ImageShowDiv";
import { GiClothes } from "react-icons/gi";
import {
  AddButtons,
  AddDiv,
  AddToCartButton,
  AddToCartDiv,
  BrandDiv,
  CategoryDiv,
  ColorDiv,
  Container,
  CounterText,
  Discount,
  DiscountedPrice,
  ExtraInfoDiv,
  FeatureIconDiv,
  Icon,
  IconDiv,
  IconTitle,
  InfoDiv,
  NumericValueDiv,
  OriginalPrice,
  ProductDescription,
  ProductIncrementDecrementDiv,
  ProductInfoDiv,
  ProductTitle,
  RatingDiv,
  RemoveFromCartButton,
  StockDiv,
} from "./style";

import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";
import DisountedPriceFn from "../../utils/discountedPrice";
import { CiDeliveryTruck } from "react-icons/ci";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { BsCartPlus, BsFillShieldFill } from "react-icons/bs";
import NumberOfProduct from "./NumberOfProduct";
import Rating from "../rating/Rating";
import ChooseColor from "./ChooseColor";

import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToCartError,
  removeFromCart,
  setItemToLocalStorage,
  setSelctedItemColor,
  setSelctedItemNumber,
} from "../../store/store";
import ProductDetailsSkeleton from "../skeleton/ProductDetailsSkeleton";
import { useNavigate } from "react-router-dom";
import TryonButton from "../try_on/TryonButton";

function Product({ item = [], isLoading }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [count, setCount] = useState(0);
  const discountPercentage = Math.ceil(item.discountPercentage);
  const dispatch = useDispatch();

  const discountedPrice = DisountedPriceFn(item.price, item.discountPercentage);

  const { cart, user } = useSelector((state) => state);
  const { cartItem } = cart;
  const navigate = useNavigate();

  const present = cartItem.find((cartProduct) => {
    return item.id === cartProduct.id;
  });

  useEffect(() => {
    const statusInCart = cartItem.find((cartProduct) => {
      return item.id === cartProduct.id;
    });
    setCount(statusInCart?.totalNumber || 0);
    setSelectedColor(statusInCart?.color || "white");
  }, [item]);

  useEffect(() => {
    dispatch(setSelctedItemColor({ id: item.id, color: selectedColor }));
  }, [selectedColor]);
  useEffect(() => {
    dispatch(setSelctedItemNumber({ id: item.id, selectedNumber: count }));
  }, [count]);

  console.log(item);

  return (
    <>
      {!isLoading ? (
        <Container>
          <ImageShowDiv item={item} />
          <InfoDiv>
            <ExtraInfoDiv>
              <CategoryDiv>
                <p>Category</p>
                <span>{item.category}</span>
              </CategoryDiv>
              <BrandDiv>
                <p>Brand</p>
                <span>{item.brand}</span>
              </BrandDiv>

              <StockDiv>
                <p>In Stock</p>
                <span>
                  <AiFillCheckCircle />
                </span>
              </StockDiv>
            </ExtraInfoDiv>
            <ProductInfoDiv>
              <ProductTitle>{item.title}</ProductTitle>
              <RatingDiv>
                <Rating rating={item.rating} />
              </RatingDiv>
              <ProductDescription>{item.description}</ProductDescription>
            </ProductInfoDiv>
            <NumericValueDiv>
              <DiscountedPrice>
                <span>${discountedPrice}</span>
                <OriginalPrice>
                  <del>${item.price}</del>
                  <Discount>-{discountPercentage}%</Discount>
                </OriginalPrice>
              </DiscountedPrice>
            </NumericValueDiv>
            <FeatureIconDiv>
              <IconDiv>
                <Icon>
                  <CiDeliveryTruck />
                </Icon>
                <IconTitle>Free Delivery</IconTitle>
              </IconDiv>
              <IconDiv>
                <Icon>
                  <LiaExchangeAltSolid />
                </Icon>
                <IconTitle>30 days return</IconTitle>
              </IconDiv>
              <IconDiv>
                <Icon>
                  <BsFillShieldFill />
                </Icon>
                <IconTitle>1 Year Warranty</IconTitle>
              </IconDiv>
            </FeatureIconDiv>

            <ColorDiv>
              <ChooseColor
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
              />
            </ColorDiv>

            <AddDiv>
              <AddToCartDiv>
                <ProductIncrementDecrementDiv>
                  <CounterText>Quantity</CounterText>
                  <NumberOfProduct
                    item={item}
                    count={count}
                    setCount={setCount}
                  />
                </ProductIncrementDecrementDiv>
                <AddButtons>
                  {present ? (
                    <RemoveFromCartButton
                      onClick={() => {
                        dispatch(removeFromCart(item.id));
                        dispatch(setItemToLocalStorage());
                      }}
                    >
                      Remove From Cart
                      <AiFillDelete />
                    </RemoveFromCartButton>
                  ) : (
                    <AddToCartButton
                      onClick={() => {
                        if (user.user) {
                          dispatch(addToCart({ item, count, selectedColor }));
                          dispatch(setItemToLocalStorage());
                        } else {
                          dispatch(addToCartError("You need To Login "));
                          navigate("/login");
                        }
                      }}
                    >
                      Add To Cart
                      <BsCartPlus />
                    </AddToCartButton>
                  )}
                </AddButtons>
                <AddButtons>
                  <TryonButton />
                </AddButtons>
              </AddToCartDiv>
            </AddDiv>
          </InfoDiv>
        </Container>
      ) : (
        <ProductDetailsSkeleton />
      )}
    </>
  );
}

export default Product;
