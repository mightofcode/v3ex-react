import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import HomePostMeta from "@/component/home/homePosts/HomePostMeta";
import DividerLine from "@/component/utils/DividerLine";

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
  padding: 12px 16px;
  width: 100%;
`;

const Item = styled.div``;
const Title = styled.a`
  font-weight: bold;
  font-size: 15px;
  line-height: 24px;
  color: #696d73;

  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export default function HomePostItem({ post }) {
  const router = useRouter();

  return (
    <Wrapper>
      <Title href={`/t/${post.uid}`}>{post.title}</Title>
      <HomePostMeta post={post} />
    </Wrapper>
  );
}
