import React from "react";
import { LogoImg } from "./style";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link to='/'>
      <LogoImg src={logo} />
    </Link>
  );
}

export default Logo;
