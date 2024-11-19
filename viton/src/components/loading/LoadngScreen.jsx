import React from "react";
import { LoadingDiv } from "./style";

function LoadngScreen() {
  return (
    <LoadingDiv>
      <div className='lds-circle'>
        <div></div>
      </div>
    </LoadingDiv>
  );
}

export default LoadngScreen;
