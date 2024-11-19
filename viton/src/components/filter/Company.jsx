import { useDispatch, useSelector } from "react-redux";
import { BrandDiv, BrandOptions, BrandSelect } from "./style";
import { filterProducts, resetPageNumber, setBrandName, sortProducts } from "../../store/store";

function Company() {
  const state = useSelector((state) => {
    return state.products.all_products;
  });

  const { brand: brandName } = useSelector((state) => {
    return state.filterProducts.filters;
  });
  const dispatch = useDispatch();
  const CompanyArray = state?.map((items) => {
    return items.brand;
  });

  const uniqueCompanyArray = ["all", ...new Set(CompanyArray)];
  return (
    <BrandDiv>
      <BrandSelect
        onChange={(e) => {
          dispatch(setBrandName(e.target.value));
          dispatch(filterProducts());
          dispatch(sortProducts());
          dispatch(resetPageNumber());
        }}
      >
        {uniqueCompanyArray.map((brand) => {
          return (
            <BrandOptions
              key={brand}
              value={brand}
              selected={brandName === brand ? true : false}
            >
              {brand}
            </BrandOptions>
          );
        })}
      </BrandSelect>
    </BrandDiv>
  );
}

export default Company;
