import React from "react";
import { CategoryProduct } from "./productsDetailStyle";
import ProductSkeleton from "./ProductSkeleton";

function CategoryPageSkeleton() {
  return (
    <CategoryProduct>
      {Array.from({ length: 5 }, (_, index) => {
        return <ProductSkeleton key={index} />;
      })}
    </CategoryProduct>
  );
}

export default CategoryPageSkeleton;
