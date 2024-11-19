import { CategoryProduct } from "../components/skeleton/productsDetailStyle";
import female_data from "../data/female_dress";
import SingleProduct from "./SingleCard";

function WomenDressTop() {
  return (
    <>
      <h1> Tops</h1>
      <CategoryProduct>
        {female_data.map((item) => {
          return (
            <SingleProduct
              key={item.id}
              item={item}
              isLoading={false}
            />
          );
        })}
      </CategoryProduct>
    </>
  );
}

export default WomenDressTop;
