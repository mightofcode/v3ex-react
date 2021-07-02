import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import Markdown from "@/component/Markdown";
import { LightText } from "@/component/utils/Text";
import AppendMeta from "@/component/topicpage/append/AppendMeta";
import DividerLine from "@/component/utils/DividerLine";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  padding: 5px 0px;
  background-color: #fffff9;
  width: 100%;
`;

const ItemWrapper = styled.div`
  padding: 0 16px;
`;

export default function Append({ append, index }) {
  const router = useRouter();
  useEffect(() => {}, []);
  return (
    <Wrapper>
      <ItemWrapper>
        {" "}
        <AppendMeta append={append} index={index} />
      </ItemWrapper>
      <ItemWrapper>
        {" "}
        <Markdown md={append.content} />
      </ItemWrapper>
    </Wrapper>
  );
}
