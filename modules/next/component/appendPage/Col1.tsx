import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import AppendCard from "@/component/appendPage/appendCard";

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
  flex-shrink: 1;
  margin-top: 16px;
`;

const Item = styled.div``;

export default function Col1({}) {
  const router = useRouter();
  useEffect(() => {}, []);
  return (
    <Wrapper>
      <AppendCard />
    </Wrapper>
  );
}
