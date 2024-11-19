import React from "react";
import { ErrorDiv, ErrorText } from "./style";

function Error({ error }) {
  return (
    <ErrorDiv>
      <ErrorText>{error}</ErrorText>
    </ErrorDiv>
  );
}

export default Error;
