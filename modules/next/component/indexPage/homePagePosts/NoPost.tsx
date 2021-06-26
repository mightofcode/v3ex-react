import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import NodeL1 from "@/component/indexPage/homePagePosts/NodeL1";
import Nodel2 from "@/component/indexPage/homePagePosts/NodeL2";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  height: 118px;
  width: 100%;
`;

const Item = styled.div``;

export default function NoPost({}) {
  const router = useRouter();

  return <Wrapper>暂无主题</Wrapper>;
}
