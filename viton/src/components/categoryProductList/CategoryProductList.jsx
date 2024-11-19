import React from "react";
import { CategoryProduct } from "./style";

import SingleProduct from "../singleProduct/SingleProduct";
import CategoryPageSkeleton from "../skeleton/CategoryPageSkeleton";

function CategoryProductList({ data = [], isLoading }) {
  return (
    <>
      {!isLoading ? (
        <CategoryProduct>
          {data.map((item) => {
            return (
              <SingleProduct
                item={item}
                key={item.id}
              />
            );
          })}
        </CategoryProduct>
      ) : (
        <CategoryPageSkeleton />
      )}
    </>
  );
}

export default CategoryProductList;
