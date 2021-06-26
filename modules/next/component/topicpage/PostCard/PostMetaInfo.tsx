import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import Divider from "@/component/utils/divider";
import TimeReadable from "@/component/timeReadable";
import Identicon from "react-identicons";
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
  white-space: nowrap;
`;

const Item = styled.div``;
const CategoryName = styled.div`
  background: #f8f8f8;
  border-radius: 4px;
  font-size: 12px;
  line-height: 14px;
  color: #696d73;
`;
const AuthorName = styled.div`
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  color: #696d73;
`;
const Light = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: #c8cbd0;
`;
const Img = styled.img``;

export default function PostMetaInfo({ post }) {
  const router = useRouter();

  return (
    <Wrapper>
      <Identicon string={post?.author?.username} size={"24"} />
      <Divider width={"8px"} />
      <AuthorName>{post?.author?.username || "--"}</AuthorName>
      <Divider width={"8px"} />
      <TimeReadable time={post?.createdAt} />
      <Divider width={"8px"} />
      <DividerSoft width={"100%"} />
      <ViewAndComment postId={post?.uid} commentCount={post?.commentCount} />
      <Divider width={"8px"} />
    </Wrapper>
  );
}
