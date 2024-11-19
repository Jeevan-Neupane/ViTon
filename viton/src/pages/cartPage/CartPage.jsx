import React from "react";
import { CartPageMain } from "../../style/Container";
import { CartProduct, Summary, ToTop } from "../../components";

function CartPage() {
  return (
    <CartPageMain>
      <CartProduct />
      <Summary />

      <ToTop />
    </CartPageMain>
  );
}

export default CartPage;
