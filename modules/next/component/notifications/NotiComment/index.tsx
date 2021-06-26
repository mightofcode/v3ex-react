import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import NotiCommentLine1 from "@/component/notifications/NotiComment/NotiCommentLine1";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
    margin-top: 8px;
  }
`;

const Item = styled.div`
  background-color: #f5f5f5;
  padding: 5px 10px;
  font-size: 14px;
  line-height: 120%;
  border-radius: 3px;
  word-break: break-word;
  color: #000;
`;

export default function NotiComment({}) {
  const router = useRouter();

  return (
    <Wrapper>
      <NotiCommentLine1 />
      <Item>内容内容内容内容内容内容内容内容</Item>
    </Wrapper>
  );
}
