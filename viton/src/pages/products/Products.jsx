import React, { useEffect } from "react";
import { ProductsMain } from "../../style/Container";
import {
  addCategory,
  addProducts,
  filterProducts,
  loadFilterProducts,
  resetFilters,
  useFetchAllCategoriesQuery,
  useFetchProductsQuery,
} from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { AllProducts, Filter, ToTop } from "../../components";

function Products() {
  const { gridView, allProducts } = useSelector(
    (state) => state.filterProducts
  );
  const { data, isLoading, error } = useFetchProductsQuery();

  const {
    data: categories,
    isLoading: categoryLoading,
    error: categoryError,
  } = useFetchAllCategoriesQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addProducts(data?.products));
    dispatch(addCategory(categories));
    dispatch(loadFilterProducts(data?.products));
  }, [data, categories]);

  useEffect(() => {
    if (allProducts?.length) {
      dispatch(filterProducts());
    }

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 2);
  }, []);

  return (
    <ProductsMain>
      <Filter isCategoryLoading={categoryLoading} />
      <AllProducts
        productsPerPage={gridView ? 15 : 9}
        isLoading={isLoading}
      />

      <ToTop />
    </ProductsMain>
  );
}

export default Products;
