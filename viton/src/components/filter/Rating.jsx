import React, { useEffect, useState } from "react";
import { RatingOuter, Ratings } from "./style";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts, resetPageNumber, setRating, sortProducts } from "../../store/store";
function Rating() {
  const { filterProducts: filterState } = useSelector((state) => state);

  const dispatch = useDispatch();
  const [starsNumber, setStarsNumber] = useState(4);
  const stars = [
    { fill: 5, unfill: 0 },
    { fill: 4, unfill: 1 },
    { fill: 3, unfill: 2 },
    { fill: 2, unfill: 3 },
    { fill: 1, unfill: 4 },
  ];

  useEffect(() => {
    setStarsNumber(filterState.filters.rating);
  }, [filterState.filters.rating]);

  const StarMap = stars.map((star, i) => {
    let StarObject = { starArray: [], key: "" };
    let keyNumber = 0;

    for (let i = 0; i < star.fill; i++) {
      StarObject.starArray.push(<AiFillStar />);
      keyNumber += i;
    }
    for (let i = 0; i < star.unfill; i++) {
      StarObject.starArray.push(<AiOutlineStar />);
      keyNumber += i;
    }

    keyNumber = keyNumber * i;
    StarObject.key = `${keyNumber}`;

    return StarObject;
  });

  return (
    <RatingOuter>
      {StarMap.map((item, index) => {
        return (
          <Ratings
            key={item.key * index}
            onClick={() => {
              setStarsNumber((5 - index - 1) * 0.2 + 4);
              dispatch(setRating((5 - index - 1) * 0.2 + 4));
              dispatch(filterProducts());
              dispatch(sortProducts());
              dispatch(resetPageNumber());
            }}
            highlights={
              (5 - index - 1) * 0.2 + 4 === starsNumber ? "highlight" : false
            }
          >
            {item.starArray}
            {(5 - index - 1) * 0.2 + 4} & up
          </Ratings>
        );
      })}
    </RatingOuter>
  );
}

export default Rating;
