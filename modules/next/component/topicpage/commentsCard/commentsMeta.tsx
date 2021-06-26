import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import Col2 from "@/component/topicpage/commentsCard/Col2";
import Divider from "@/component/utils/divider";
import TimeReadable from "@/component/timeReadable";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
`;

const Author = styled.a`
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  color: #34373c;

  cursor: pointer;
  :hover {
    text-decoration: underline;
    color: #4d5256;
  }
`;

export default function CommentsMeta({ comment }) {
  const router = useRouter();

  return (
    <Wrapper>
      <Author href={`/member/${comment?.author?.username}`}>
        {comment?.author?.username}
      </Author>
      <Divider width={"8px"} />
      <TimeReadable time={comment?.createdAt} />
    </Wrapper>
  );
}
