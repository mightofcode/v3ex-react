import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Link from "next/link";
import Divider from "@/component/utils/divider";
import { userSelector } from "@/store/userReducer";
import * as React from "react";

import Name from "./name";
import MenuBar from "@/component/header/headerNavLogged/name/menuBar";
import { on } from "cluster";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  position: relative;
`;

const Item = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #34373c;
`;

const NotificationWrapper = styled.div`
  :hover * {
    path {
      fill: #e6007a;
    }
  }
  cursor: pointer;

  line-height: 0px;
`;

export default function HeaderNavLogged({}) {
  const router = useRouter();
  const user = useSelector(userSelector);

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    //setShowMenu(false);
  });
  const onClick = async () => {
    setShowMenu(!showMenu);
  };

  return (
    <Wrapper>
      <Item>
        <Link href={"/"}>首页</Link>
      </Item>
      <Divider width={"24px"} />
      <Name onClick={onClick} />
      {showMenu && <MenuBar setShowDropdown={setShowMenu} />}
    </Wrapper>
  );
}
