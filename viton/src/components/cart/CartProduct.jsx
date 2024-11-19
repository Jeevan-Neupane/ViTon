import React from "react";
import { CartHeading, CartProductDiv, Container } from "./style";
import { useSelector } from "react-redux";
import SingleProduct from "./SingleProduct";
import CartEmpty from "./CartEmpty";
import NotLoggedInfo from "./NotLoggedInfo";
import MobileCart from "./MobileCart";

function CartProduct() {
  const { cart, user } = useSelector((state) => state);
  const { cartItem } = cart;

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 2);

  return (
    <>
      <Container>
        <CartHeading>
          {!!user?.user ? user?.user?.name.toUpperCase() + "'S" : null} {"  "}
          Cart
        </CartHeading>
        {cartItem.length > 0 ? (
          <CartProductDiv>
            {cartItem.map((item) => {
              return (
                <SingleProduct
                  item={item}
                  key={item.id}
                />
              );
            })}
          </CartProductDiv>
        ) : !!user?.user ? (
          <CartEmpty />
        ) : (
          <NotLoggedInfo />
        )}
      </Container>
      <MobileCart />
    </>
  );
}

export default CartProduct;
