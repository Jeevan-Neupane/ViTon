import {
    CategoryTag,
    ImageDiv,
    Img,
    InfoDiv,
    Name,
    Price,
    RatingTag,
    ForYouProductDiv,
    DiscountedPrice,
    DiscountPercentage,
    CompanyTag,
    CCDiv,
  } from "./product.style.js";
  import Rating from "../rating/Rating";
  
  import DisountedPriceFn from "../../utils/discountedPrice";
  
  function ForYouProduct({ item }) {
    const discountPercentage = Math.floor(item.discountPercentage);
  
    const discountedPrice = DisountedPriceFn(item.price, item.discountPercentage);
  
    return (
      <ForYouProductDiv
        to={`/foryou/${item.category}/${item.id}`}
     
      >
        <ImageDiv>
          <Img src={item.thumbnail} />
        </ImageDiv>
  
        <InfoDiv>
          <Name>{item.title}</Name>
          <DiscountedPrice>${discountedPrice}</DiscountedPrice>
          <Price>
            <del>${item.price}</del>
            <DiscountPercentage> -{discountPercentage}%</DiscountPercentage>
          </Price>
        </InfoDiv>
        <RatingTag>
          <Rating rating={item.rating} />
          <span>{item.rating}</span>
        </RatingTag>
        <CCDiv>
          <CategoryTag>{item.category}</CategoryTag>
          <CompanyTag>{item.brand}</CompanyTag>
        </CCDiv>
      </ForYouProductDiv>
    );
  }
  
  export default ForYouProduct;
  