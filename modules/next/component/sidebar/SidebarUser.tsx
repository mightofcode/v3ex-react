import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import { userSelector } from "@/store/userReducer";
import Col1 from "@/component/sidebar/Col1";
import DividerLine from "@/component/utils/DividerLine";
import Col2 from "@/component/sidebar/Col2";
import Col3 from "@/component/sidebar/Col3";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }

  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  width: 272px;
`;

const Item = styled.div``;

export default function SidebarUser({ user }) {
  const router = useRouter();

  return (
    <Wrapper>
      <Col1 user={user} />
      <DividerLine />
      <Col2 />
      <DividerLine />
      <Col3 />
      <DividerLine />
    </Wrapper>
  );
}
