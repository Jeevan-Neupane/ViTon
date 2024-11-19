import React, { useEffect } from "react";
import { HomeMain } from "../../style/Container";
import {
  ButtonLoader,
  ForYou,
  HeroBanner,
  ProductCategory,
  ToTop,
} from "../../components";
import { sliderItems } from "../../data/sliderData";
import WebAppGuide from "../../viton_comp/Use_Tree";

function Homepage() {
  
  return (
    <HomeMain>
      <HeroBanner data={sliderItems} />
      <ProductCategory />
      <WebAppGuide />
      <ToTop />
    </HomeMain>
  );
}

export default Homepage;
