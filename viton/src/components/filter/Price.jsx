import { useEffect, useState } from "react";
import { Input, InputWrapper, PriceSlider, SubmitButton } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts, resetPageNumber, setPriceRange, sortProducts } from "../../store/store";

function Price() {
  const dispatch = useDispatch();
  const { maxPrice, minPrice } = useSelector(
    (state) => state.filterProducts.filters
  );

  const [priceRange, setPriceRanges] = useState({
    min: minPrice,
    max: maxPrice,
  });

  useEffect(() => {
    setPriceRanges({ ...priceRange, min: minPrice, max: maxPrice });
  }, [maxPrice, minPrice]);

  const onValueChange = (e) => {
    let amount = parseInt(e.target.value);

    if (e.target.name === "min") {
      setPriceRanges({ ...priceRange, min: amount });
    }
    if (e.target.name === "max") {
      setPriceRanges({ ...priceRange, max: amount });
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(setPriceRange(priceRange));
    dispatch(filterProducts());
    dispatch(sortProducts());
    dispatch(resetPageNumber());
  };

  return (
    <PriceSlider onSubmit={onFormSubmit}>
      <InputWrapper>
        <Input
          type='number'
          placeholder='min'
          min={1}
          value={priceRange.min}
          onChange={onValueChange}
          name='min'
          required
        />
      </InputWrapper>

      <InputWrapper>
        <Input
          type='number'
          min={1}
          placeholder='max'
          value={priceRange.max}
          onChange={onValueChange}
          name='max'
          required
        />
      </InputWrapper>

      <InputWrapper>
        <SubmitButton>Apply</SubmitButton>
      </InputWrapper>
    </PriceSlider>
  );
}

export default Price;
