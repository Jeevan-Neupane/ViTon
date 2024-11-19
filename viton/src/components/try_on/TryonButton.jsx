import React from "react";
import { TryOnButtonDiv } from "./style";
import { BsFillPersonCheckFill } from "react-icons/bs";
function TryonButton() {
  return (
    <TryOnButtonDiv to='try_on'>
      Try It now
      <BsFillPersonCheckFill />
    </TryOnButtonDiv>
  );
}

export default TryonButton;
