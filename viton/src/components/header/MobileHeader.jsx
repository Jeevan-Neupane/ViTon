import React, { useEffect, useState } from "react";
import {
  CartAndProducts,
  CartIcon,
  CartMobIcon,
  LoginButton,
  LogoDiv,
  MainDiv,
  MobileMenuCloseIcons,
  MobileMenuIcons,
  MobileNav,
  Nav,
  OuterMobNavDiv,
  ProductLink,
  ProductMobIcon,
  RightDiv,
  SearchBarDiv,
  SignUpButton,
  TitleDiv,
} from "./style";
import Logo from "./logo/Logo";
import SearchBar from "./searchbar/SearchBar";
import { BiLogoProductHunt, BiSolidUser } from "react-icons/bi";
import UserBox from "../userbox/UserBox";
import { useSelector } from "react-redux";
import Cart from "./cart/Cart";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useLocation } from "react-router-dom";
function MobileHeader() {
  const [showLogin, setShowLogin] = useState(false);
  const user = useSelector((state) => {
    return state.user.user;
  });
  const { pathname } = useLocation();

  const { cartItem } = useSelector((state) => {
    return state.cart;
  });

  const linkActive = ({ isActive }) => {
    return {
      backgroundColor: isActive ? " teal" : "",
    };
  };

  useEffect(() => {
    setShowLogin(false);
  }, [pathname]);

  return (
    <OuterMobNavDiv>
      <MobileNav>
        <TitleDiv>JN-e-Store</TitleDiv>
        <MainDiv>
          <LogoDiv>
            <Logo />
          </LogoDiv>
          <SearchBarDiv>
            <SearchBar />
          </SearchBarDiv>
          <RightDiv className={showLogin ? "showlogin" : "hidelogin"}>
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

            <MobileMenuCloseIcons>
              <IoIosCloseCircleOutline
                onClick={() => {
                  setShowLogin(false);
                }}
              />
            </MobileMenuCloseIcons>
          </RightDiv>
          <MobileMenuIcons
            onClick={() => {
              setShowLogin(true);
            }}
          >
            <AiOutlineMenu />
          </MobileMenuIcons>
        </MainDiv>
      </MobileNav>

      <CartAndProducts>
        <ProductMobIcon
          style={linkActive}
          to='/products'
        >
          <BiLogoProductHunt />
          Products
        </ProductMobIcon>

        <CartMobIcon
          to='/cart'
          style={linkActive}
        >
          <Cart number={cartItem?.length} />
        </CartMobIcon>
      </CartAndProducts>
    </OuterMobNavDiv>
  );
}

export default MobileHeader;
