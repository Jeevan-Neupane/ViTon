import React from "react";
import { Img, ImgDiv, LeftDiv, RightDiv, UserDiv, UserName } from "./style";

import { AiFillCaretDown } from "react-icons/ai";
import userImg from "../../assets/user.jpg";
import LogoutDiv from "../logout/LogoutDiv";

function UserBox({ user }) {
  return (
    <UserDiv>
      <LeftDiv>
        <AiFillCaretDown />
        <ImgDiv>
          <Img src={userImg} />
        </ImgDiv>
      </LeftDiv>
      <RightDiv>
        <UserName>{user?.providerUid || user.name}</UserName>
      </RightDiv>
      <LogoutDiv/>
      
    </UserDiv>
  );
}

export default UserBox;
