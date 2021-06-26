import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import PostTitle from "@/component/indexPage/homePagePosts/postList/PostTitle";
import PostMeta from "@/component/indexPage/homePagePosts/postList/PostMeta";
import PostMetaInfo from "@/component/topicpage/PostCard/PostMetaInfo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  width: 100%;
`;

const Item = styled.div``;

export default function Col2({ post }) {
  const router = useRouter();

  return (
    <Wrapper>
      <PostTitle post={post} />
      <PostMeta post={post} />
    </Wrapper>
  );
}
