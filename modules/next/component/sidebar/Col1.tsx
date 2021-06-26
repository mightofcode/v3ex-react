import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import { userSelector } from "@/store/userReducer";
import Identicon from "react-identicons";
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  width: 100%;
  padding: 16px;
`;

const Item = styled.a`
  cursor: pointer;
  :hover {
    text-decoration: underline;
    color: #4d5256;
  }
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #696d73;
  margin-left: 12px;
`;
const AvatarWrapper = styled.img``;
export default function Col1({ user }) {
  const router = useRouter();

  return (
    <Wrapper>
      <Identicon string={user?.username} size={"48"} />
      <Item>{user?.username}</Item>
    </Wrapper>
  );
}
