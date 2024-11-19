import React from "react";
import Product from "../components/product/Product"; // Import the Product component
import female_data from "../data/female_dress"; // Import the female_data array

function FemaleSelfProducts() {
  return (
    <div>
      {female_data.map((item) => (
        <Product
          key={item.id}
          item={item}
          isLoading={false}
        />
      ))}
    </div>
  );
}

export default FemaleSelfProducts;
