import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import CommentsMeta from "@/component/topicpage/commentsCard/commentsMeta";
import Divider from "@/component/utils/divider";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
`;

const Item = styled.div`
  font-size: 14px;
  line-height: 22px;
  text-align: justify;
  color: #34373c;
`;

export default function Col2({ comment }) {
  const router = useRouter();

  return (
    <Wrapper>
      <CommentsMeta comment={comment} />
      <Divider height={"8px"} />
      <Item>{comment?.content}</Item>
    </Wrapper>
  );
}
