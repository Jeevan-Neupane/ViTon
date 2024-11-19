import React, { useEffect, useState } from "react";
import { ChooseColorDiv, IndividualColorDiv } from "./style";
import Color from "../../data/colorData";

function ChooseColor({selectedColor,setSelectedColor}) {


 
  return (
    <ChooseColorDiv>
      {Color.map((item) => {
        return (
          <IndividualColorDiv
            key={item}
            background={item}
            onClick={() => {
              setSelectedColor(item);
            }}
            highlight={item===selectedColor?"do":false}
          ></IndividualColorDiv>
        );
      })}
    </ChooseColorDiv>
  );
}

export default ChooseColor;
