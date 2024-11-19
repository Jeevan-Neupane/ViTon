import React from "react";
import { MobileCartProductDiv, MobileContainer } from "./mobileStyle";
import { CartHeading } from "./style";
import MobileView from "./MobileView";
import CartEmpty from "./CartEmpty";
import NotLoggedInfo from "./NotLoggedInfo";
import { useSelector } from "react-redux";

function MobileCart() {
    const { cart, user } = useSelector((state) => state);
    const { cartItem } = cart;
  return (
    <MobileContainer>
      <CartHeading>
        {!!user?.user ? user?.user?.name.toUpperCase() + "'S" : null} {"  "}
        Cart
      </CartHeading>
      {cartItem.length > 0 ? (
        <MobileCartProductDiv>
          {cartItem.map((item) => {
            return (
              <MobileView
                item={item}
                key={item.id}
              />
            );
          })}
        </MobileCartProductDiv>
      ) : !!user?.user ? (
        <CartEmpty />
      ) : (
        <NotLoggedInfo />
      )}
    </MobileContainer>
  );
}

export default MobileCart;
