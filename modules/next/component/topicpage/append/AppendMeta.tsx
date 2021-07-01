import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import TimeReadable from "@/component/timeReadable";
import Divider from "@/component/utils/divider";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
`;

const Item = styled.div``;

const LightText = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: #c8cbd0;
`;

export default function AppendMeta({ append, index }) {
  const router = useRouter();
  useEffect(() => {}, []);
  return (
    <Wrapper>
      <LightText>第{index}条附言</LightText>
      <Divider width={"8px"} />
      <TimeReadable time={append?.createdAt} />
    </Wrapper>
  );
}
