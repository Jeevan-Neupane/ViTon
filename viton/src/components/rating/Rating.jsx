import React from "react";
import { BsStarHalf, BsStar, BsStarFill } from "react-icons/bs";

function Rating({ rating }) {
  const ratingStar = Array.from({ length: 5 }, (value, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <BsStarFill />
        ) : rating >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return <div>{ratingStar}</div>;
}

export default Rating;
