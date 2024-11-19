import React from "react";
import { Div } from "../style/Container";
import { Footer, Header, MobileHeader } from "../components";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const { pathname } = useLocation();

  return (
    <Div>
      <Header />
      <MobileHeader />
      <Outlet />
      {pathname !== "/cart" && <Footer />}
    </Div>
  );
}

export default Layout;
