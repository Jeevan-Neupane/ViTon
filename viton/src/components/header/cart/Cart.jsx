import React from "react";
import { CartDiv, NumberDiv } from "./style";
import { BsFillCartFill } from "react-icons/bs";

function Cart({ number }) {
  
  return (
    <CartDiv>
      <BsFillCartFill />
      <NumberDiv>{number}</NumberDiv>
    </CartDiv>
  );
}

export default Cart;
