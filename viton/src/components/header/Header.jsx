import React from "react";
import {
  CartIcon,
  LoginButton,
  LogoDiv,
  MainDiv,
  Nav,
  ProductLink,
  RightDiv,
  SearchBarDiv,
  SignUpButton,
  TitleDiv,
} from "./style";
import Logo from "./logo/Logo.jsx";
import SearchBar from "./searchbar/SearchBar";
import { BiLogoProductHunt, BiSolidUser } from "react-icons/bi";
import Cart from "./cart/Cart";
import { useSelector } from "react-redux";
import UserBox from "../userbox/UserBox";
import { FaCamera } from "react-icons/fa";

function Header() {
  const user = useSelector((state) => {
    return state.user.user;
  });

  const { cartItem } = useSelector((state) => {
    return state.cart;
  });

  const linkActive = ({ isActive }) => {
    return {
      color: isActive ? " teal" : "",
    };
  };

  return (
    <Nav>
      <TitleDiv>Virtual Try On</TitleDiv>
      <MainDiv>
        <LogoDiv>
          <Logo />
        </LogoDiv>
        <SearchBarDiv>
          <SearchBar />
        </SearchBarDiv>
        <RightDiv>
          <ProductLink
            style={linkActive}
            to='/real_camera_try'
          >
            <FaCamera />
            Own Clothes
          </ProductLink>
          {!user ? (
            <>
              <LoginButton
                to='/login'
                style={linkActive}
              >
                <BiSolidUser />
                <span>Login</span>
              </LoginButton>
              <SignUpButton
                style={linkActive}
                to='/signup'
              >
                Sign Up
              </SignUpButton>
            </>
          ) : (
            <>
              <UserBox user={user} />
            </>
          )}
          <CartIcon
            to='/cart'
            style={linkActive}
          >
            <Cart number={cartItem?.length} />
          </CartIcon>
        </RightDiv>
      </MainDiv>
    </Nav>
  );
}

export default Header;
