import React from "react";
import {
  OrderSummaryDiv,
  ProceedToCheckoutButton,
  ShippingCost,
  SummarySubTotal,
  SummaryTitle,
  TotalCost,
} from "./style";
import { useSelector } from "react-redux";
import DisountedPriceFn from "../../utils/discountedPrice";
import allTotal from "../../utils/allTotal";
function Summary() {
  const { cartItem, shippingCharge } = useSelector((state) => {
    return state.cart;
  });

  const checkedItem = cartItem.filter((item) => {
    return item.checked;
  });

  const totalProducts = checkedItem.reduce((total, cv) => {
    return total + cv.totalNumber;
  }, 0);

  const arrayOfPerProductPrice = checkedItem.map((item) => {
    return (
      item.totalNumber * DisountedPriceFn(item.price, item.discountPercentage)
    );
  });

  const totalOfAllProducts = allTotal(arrayOfPerProductPrice);

  let totalWithShippingCharge = totalOfAllProducts;

  if (checkedItem.length > 0) {
    totalWithShippingCharge += shippingCharge;
  }

  return (
    <OrderSummaryDiv>
      <SummaryTitle>Order Summary</SummaryTitle>
      <SummarySubTotal>
        <p>Subtotal({totalProducts} items)</p>
        <p>${totalOfAllProducts}</p>
      </SummarySubTotal>
      {checkedItem.length > 0 ? (
        <ShippingCost>
          <p>Shipping Cost</p>
          <p>${shippingCharge}</p>
        </ShippingCost>
      ) : null}
      <TotalCost>
        <p>Total</p>
        <p>${totalWithShippingCharge}</p>
      </TotalCost>

      <ProceedToCheckoutButton to='/contact'>
        Proceed To Checkout ({checkedItem.length})
      </ProceedToCheckoutButton>
    </OrderSummaryDiv>
  );
}

export default Summary;
