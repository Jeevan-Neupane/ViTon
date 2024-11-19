import React, { useState } from "react";
import { CounterDiv, CounterIcon, CounterNumber, CounterText } from "./style";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function NumberOfProduct({ item, count, setCount }) {
  let maxItemSelection = item.stock;
  return (
    <CounterDiv>
      <CounterIcon
        onClick={() => {
          if (count === 0) {
            setCount(0);
          } else {
            setCount(count - 1);
          }
        }}
        highlight={0 === count ? "do" : false}
      >
        <AiOutlineMinus />
      </CounterIcon>

      <CounterNumber>{count}</CounterNumber>
      <CounterIcon
        onClick={() => {
          if (count === maxItemSelection) {
            setCount(maxItemSelection);
          } else {
            setCount(count + 1);
          }
        }}
        highlight={maxItemSelection === count ? "do" : false}
      >
        <AiOutlinePlus />
      </CounterIcon>
    </CounterDiv>
  );
}

export default NumberOfProduct;
