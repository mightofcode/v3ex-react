import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import Divider from "@/component/utils/divider";

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

const Item = styled.a`
  font-size: 15px;
  line-height: 24px;
  color: #696d73;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
const ImgWrapper = styled.img``;

export default function PostTitle({ post }) {
  const router = useRouter();

  return (
    <Wrapper>
      <Item href={`/t/${post.uid}`}>{post?.title}</Item>
    </Wrapper>
  );
}
