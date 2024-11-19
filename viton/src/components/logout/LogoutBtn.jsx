import React, { useState } from "react";
import { BiSolidLogOut } from "react-icons/bi";
import { LogoutBoxDiv, LogoutDiv, LogoutText } from "./style";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import {
  clearCart,
  clearItemFromLocalStorage,
  logout,
} from "../../store/store";
import { useNavigate } from "react-router-dom";
import ButtonLoader from "../buttonLoader/ButtonLoading";
function LogoutBtn() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogoutBtn = async () => {
    try {
      setLoading(true);
      await authService.logout();
      dispatch(logout());
      dispatch(clearCart());
      dispatch(clearItemFromLocalStorage());
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <LogoutDiv
      onClick={handleLogoutBtn}
      disabled={loading}
      cursor={loading ? "change" : "no"}
    >
      <LogoutText>
        {loading ? (
          <ButtonLoader />
        ) : (
          <>
            <BiSolidLogOut />
            <span>Logout</span>
          </>
        )}
      </LogoutText>
    </LogoutDiv>
  );
}

export default LogoutBtn;
