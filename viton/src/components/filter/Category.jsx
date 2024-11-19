import { useDispatch, useSelector } from "react-redux";
import { CategoryDiv, CategoryList, CategoryOuter } from "./style";
import { useEffect, useState } from "react";
import {
  filterProducts,
  resetPageNumber,
  setCategory,
  sortProducts,
} from "../../store/store";
import CategoryLoading from "../skeleton/CategoryLoading";
function Category({ isCategoryLoading }) {
  const { products, filterProducts: filterState } = useSelector(
    (state) => state
  );

  const { categories } = products;

  console.log("Categories", categories);

  const [categorySelected, setCategorySelected] = useState("all");

  useEffect(() => {
    setCategorySelected(filterState.filters.category);
  }, [filterState.filters.category]);
  const dispatch = useDispatch();

  const onCategoryClick = (category) => {
    setCategorySelected(category);
    dispatch(setCategory(category));
    dispatch(filterProducts());
    dispatch(sortProducts());
    dispatch(resetPageNumber());
  };
  return (
    <>
      {!isCategoryLoading ? (
        <CategoryOuter>
          {categories?.map((category) => {
            return (
              <CategoryList
                key={category}
                highlight={categorySelected === category ? "highlight" : false}
                onClick={() => {
                  onCategoryClick(category);
                }}
              >
                {category}
              </CategoryList>
            );
          })}
        </CategoryOuter>
      ) : (
        <CategoryLoading />
      )}
    </>
  );
}

export default Category;
