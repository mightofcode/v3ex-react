import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  padding: 8px 16px;
  width: 100%;
  height: 46px;
`;

const Img = styled.img`
  width: 28px;
`;

const Link = styled.a`
  cursor: pointer;
  :hover {
    text-decoration: underline;
    color: #4d5256;
  }
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #696d73;
`;

export default function Col3({}) {
  const router = useRouter();

  return (
    <Wrapper>
      <Link href={"/notifications"}>0 条未读消息</Link>
    </Wrapper>
  );
}
