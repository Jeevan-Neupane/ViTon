import InsideAnimatedDiv from "./AnimatedDiv";
import {
  Container,
  AllImageContainer,
  AllImgDiv,
  ImageContainer,
  SingleImageContainer,
  InfoDiv,
  ImageLoader,
  ExtraInfoDiv,
  CategoryDiv,
  BrandDiv,
  StockDiv,
  ProductInfoDiv,
  ProductTitle,
  RatingDiv,
  ProductDescription,
  NumericValueDiv,
  DiscountedPrice,
  OriginalPrice,
  FeatureIconDiv,
  IconDiv,
  ColorDiv,
  IndividualColorDiv,
  AddDiv,
  CounterDiv,
  AddToCartDiv,
  AddToCartButton
} from "./productsDetailStyle";
import { AnimatedDiv } from "./style";
function ProductDetailsSkeleton() {
  return (
    <Container>
      <ImageContainer>
        <AllImageContainer>
          {Array.from({ length: 4 }, (_, index) => (
            <AllImgDiv key={index}>
              <InsideAnimatedDiv />
            </AllImgDiv>
          ))}
        </AllImageContainer>
        <SingleImageContainer>
          <ImageLoader>
            <InsideAnimatedDiv />
          </ImageLoader>
        </SingleImageContainer>
      </ImageContainer>
      <InfoDiv>
        <ExtraInfoDiv>
          <CategoryDiv>
            <AnimatedDiv />
          </CategoryDiv>
          <BrandDiv>
            <AnimatedDiv />
          </BrandDiv>

          <StockDiv>
            <AnimatedDiv />
          </StockDiv>
        </ExtraInfoDiv>

        <ProductInfoDiv>
          <ProductTitle>
            <AnimatedDiv />
          </ProductTitle>
          <RatingDiv>
            <AnimatedDiv />
          </RatingDiv>
          <ProductDescription>
            <AnimatedDiv />
          </ProductDescription>
        </ProductInfoDiv>
        <NumericValueDiv>
          <DiscountedPrice>
            <AnimatedDiv />
          </DiscountedPrice>

          <OriginalPrice>
            <AnimatedDiv />
          </OriginalPrice>
        </NumericValueDiv>

        <FeatureIconDiv>
          <IconDiv>
            <AnimatedDiv />
          </IconDiv>
          <IconDiv>
            <AnimatedDiv />
          </IconDiv>
          <IconDiv>
            <AnimatedDiv />
          </IconDiv>
        </FeatureIconDiv>

        <ColorDiv>
          <IndividualColorDiv>
            <AnimatedDiv />
          </IndividualColorDiv>
          <IndividualColorDiv>
            <AnimatedDiv />
          </IndividualColorDiv>
          <IndividualColorDiv>
            <AnimatedDiv />
          </IndividualColorDiv>
          <IndividualColorDiv>
            <AnimatedDiv />
          </IndividualColorDiv>
        </ColorDiv>
        <AddDiv>
          <CounterDiv>
            <AnimatedDiv />
          </CounterDiv>

          <AddToCartDiv>
            <AddToCartButton>
              <AnimatedDiv />
            </AddToCartButton>
            
          </AddToCartDiv>
        </AddDiv>
      </InfoDiv>
    </Container>
  );
}

export default ProductDetailsSkeleton;
