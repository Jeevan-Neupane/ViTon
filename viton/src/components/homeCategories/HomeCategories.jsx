import React from "react";
import { useFetchAllCategoriesQuery } from "../../store/store";
import { CategoryText, Container, LoadingContainer, LoadingDiv } from "./style";
import Skeleton from "../skeleton/Skeleton";

function HomeCategories() {
  let { data, isFetching } = useFetchAllCategoriesQuery();

  // Filter the data to show only "mens-shirts" and "womens-dresses"
  const filteredCategories = data?.filter(
    (item) => item === "mens-shirts" || item === "womens-dresses"
  );

  return !isFetching ? (
    <Container>
      {filteredCategories?.map((item) => {
        // Conditional display text
        const displayText = item === "mens-shirts" ? "Men Dress" : "Women Dress";
        
        return (
          <CategoryText key={item} to={`category/${item}`}>
            {displayText}
          </CategoryText>
        );
      })}
    </Container>
  ) : (
    <LoadingContainer>
      {Array.from({ length: 2 }, (_, index) => {
        return (
          <LoadingDiv key={index}>
            <Skeleton height={4} width={20} />
          </LoadingDiv>
        );
      })}
    </LoadingContainer>
  );
}

export default HomeCategories;
