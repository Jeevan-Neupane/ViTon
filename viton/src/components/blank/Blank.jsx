import React from "react";
import { BlankPage, BlankText, IconDiv } from "./style";

import { FaBatteryEmpty } from "react-icons/fa";

function Blank() {
  return (
    <BlankPage>
      <BlankText>No Item Found For Selected Filters</BlankText>

      <IconDiv>
        <FaBatteryEmpty />
      </IconDiv>
    </BlankPage>
  );
}

export default Blank;
