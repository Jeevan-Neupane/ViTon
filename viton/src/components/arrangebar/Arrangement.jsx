import React, { useEffect } from "react";
import { Options, SelectDiv } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { setSortingWay, sortProducts } from "../../store/store";

function Arrangement() {
  const dispatch = useDispatch();

  const arragementWay = [
    { id: 0, title: "Sorting", value: "Sorting" },
    { id: 1, title: "Ascending(a-z)", value: "Ascending(a-z)" },

    {
      id: 2,
      title: "Descending(z-a)",
      value: "Descending(z-a)",
    },
    {
      id: 3,
      title: "Price(low-high)",
      value: "Price(low-high)",
    },
    {
      id: 4,
      title: "Price(high-low)",
      value: "Price(high-low)",
    },
    {
      id: 5,
      title: "Rating(low-high)",
      value: "Rating(low-high)",
    },
    {
      id: 6,
      title: "Rating(high-low)",
      value: "Rating(high-low)",
    },
    {
      id: 7,
      title: "Discount%(high-low)",
      value: "Discount%(high-low)",
    },
    {
      id: 8,
      title: "Discount%(low-high)",
      value: "Discount%(low-high)",
    },
  ];
  return (
    <SelectDiv
      name='Sorting'
      onChange={(e) => {
        dispatch(setSortingWay(e.target.value));
        dispatch(sortProducts());
      }}
    >
      {arragementWay.map((item) => {
        return (
          <Options
            key={item.id}
            value={item.value}
          >
            {item.value}
          </Options>
        );
      })}
    </SelectDiv>
  );
}

export default Arrangement;
