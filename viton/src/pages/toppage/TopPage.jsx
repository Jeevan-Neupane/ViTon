import React from "react";
import female_data from "../../data/female_dress";
import { useParams } from "react-router-dom";
import { Product } from "../../components";
import { SingleProductMain } from "../../style/Container";

function TopsPage() {
  const { id } = useParams(); // Extract the id from the route parameters
  const productId = parseInt(id, 10); // Convert id to a number (useful since params are strings by default)
  const product = female_data.find((item) => item.id === productId); // Find the product with the given id

  if (!product) {
    return <div>Product not found</div>; // Handle case where no product matches the id
  }

  return (
    <SingleProductMain>
      <Product
        item={product}
        isLoading={false}
      />
    </SingleProductMain>
  );
}

export default TopsPage;
