import React from "react";
import { AnimatedDiv, CategoryList, CategoryOuter } from "./style";

function CategoryLoading() {
  return (
    <CategoryOuter>
      {Array.from({ length: 21 }, (_, index) => (
        <CategoryList key={index}>
          <AnimatedDiv />
        </CategoryList>
      ))}
    </CategoryOuter>
  );
}

export default CategoryLoading;
