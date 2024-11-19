import Rating from "../rating/Rating";
import {
  GridCCDiv,
  GridCategoryTag,
  GridCompanyTag,
  GridDiscountPercentage,
  GridDiscountedPrice,
  GridImageDiv,
  GridImg,
  GridInfoDiv,
  GridName,
  GridPrice,
  GridRatingTag,
  GridSingleProductDiv,
} from "./style";

function GridViewSingleProudct({ item }) {
  const discountPercentage = Math.floor(item.discountPercentage);
  const OriginalPrice = item.price;
  const discountedPrice = Math.floor(
    OriginalPrice - (discountPercentage / 100) * OriginalPrice
  );
  return (
    <GridSingleProductDiv to={`/products/${item.category}/${item.id}`}>
      <GridImageDiv>
        <GridImg src={item.thumbnail} />
      </GridImageDiv>

      <GridInfoDiv>
        <GridName>{item.title}</GridName>
        <GridDiscountedPrice>
          <span>Discounted Price:</span>${discountedPrice}
        </GridDiscountedPrice>
        <GridPrice>
          <span>Actual Price:</span> <del>${item.price}</del>
          <GridDiscountPercentage>
            Discount:<span>-{discountPercentage}%</span>
          </GridDiscountPercentage>
        </GridPrice>

        <GridRatingTag>
          <Rating rating={item.rating} />
          <span>{item.rating}</span>
        </GridRatingTag>
        <GridCCDiv>
          <GridCategoryTag>{item.category}</GridCategoryTag>
          <GridCompanyTag>{item.brand}</GridCompanyTag>
        </GridCCDiv>
      </GridInfoDiv>
    </GridSingleProductDiv>
  );
}

export default GridViewSingleProudct;
