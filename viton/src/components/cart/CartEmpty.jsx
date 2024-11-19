import React from "react";
import { CartEmptyDiv, CartEmptyText } from "./style";

function CartEmpty() {
  return (
    <CartEmptyDiv>
      <CartEmptyText>Cart Is Empty</CartEmptyText>
    </CartEmptyDiv>
  );
}

export default CartEmpty;
