import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import Divider from "@/component/utils/divider";
import TimeReadable from "@/component/timeReadable";
import DividerSoft from "@/component/utils/DividerSoft";
import ViewAndComment from "@/component/viewAndComment";

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

  > * {
    white-space: nowrap;
  }
`;

const Item = styled.div``;
const CategoryName = styled.div`
  background: #f8f8f8;
  border-radius: 4px;
  font-size: 12px;
  line-height: 14px;
  color: #696d73;

  padding: 1px 2px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const AuthorName = styled.a`
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  color: #696d73;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const Light = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: #c8cbd0;
`;
const Img = styled.img``;

export default function PostMeta({ post }) {
  const router = useRouter();

  return (
    <Wrapper>
      <CategoryName>{post?.category?.name}</CategoryName>
      <Divider width={"8px"} />
      <AuthorName href={`/member/${post?.author?.username}`}>
        {post?.author?.nick || "--"}
      </AuthorName>
      <Divider width={"8px"} />
      <TimeReadable time={post?.createdAt} />
      <Divider width={"8px"} />
      <DividerSoft width={"100%"} />
      <ViewAndComment commentCount={post?.commentCount} postId={post?.uid} />
    </Wrapper>
  );
}
