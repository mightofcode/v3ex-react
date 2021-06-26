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
  justify-content: center;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  width: 100%;

  padding: 10px;
  font-size: var(--box-font-size);
  line-height: var(--box-line-height);
  background-color: transparent;
  border-radius: var(--box-border-radius);
  box-shadow: none;
  border: 2px dashed rgba(0, 0, 0, 0.15);
  text-shadow: 0 1px 0 rgb(255 255 255 / 50%);
  color: rgba(0, 0, 0, 0.15);
`;

const Item = styled.div``;

export default function NoCommentsCard({}) {
  const router = useRouter();
  useEffect(() => {}, []);
  return (
    <Wrapper>
      <Item>目前尚无回复</Item>
    </Wrapper>
  );
}
