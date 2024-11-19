import React from "react";
import { LogoutBoxDiv } from "./style";
import LogoutBtn from "./LogoutBtn";

function LogoutDiv() {
  return (
    <LogoutBoxDiv className="logoutDiv">
      <LogoutBtn />
    </LogoutBoxDiv>
  );
}

export default LogoutDiv;
