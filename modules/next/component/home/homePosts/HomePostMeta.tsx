import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import GrayText from "@/component/utils/GrayText";
import TimeReadable from "@/component/timeReadable";
import dayjs from "dayjs";
import ViewAndComment from "@/component/viewAndComment";
import Divider from "@/component/utils/divider";
import DividerSoft from "@/component/utils/DividerSoft";
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
    margin-left: 8px;
  }
  width: 100%;
  > * {
    white-space: nowrap;
  }
`;

const Item = styled.div``;

const Category = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: #696d73;
  padding: 2px 8px;
  background: #f8f8f8;
  border-radius: 4px;
`;
const Author = styled.a`
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  color: #696d73;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export default function HomePostMeta({ post }) {
  const router = useRouter();
  return (
    <Wrapper>
      <Category>{post?.category?.name}</Category>
      <Author href={`/member/${post?.author?.username}`}>
        {post?.author?.username}
      </Author>
      <TimeReadable time={post.createdAt} />
      <DividerSoft width={"100%"} />
      <ViewAndComment postId={post?.uid} commentCount={post?.commentCount} />
    </Wrapper>
  );
}
