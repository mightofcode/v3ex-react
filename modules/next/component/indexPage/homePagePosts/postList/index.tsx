import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";

import Col2 from "@/component/indexPage/homePagePosts/postList/Col2";
import Divider from "@/component/utils/divider";
import DividerLine from "@/component/utils/DividerLine";
import Identicon from "react-identicons";
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }

  width: 100%;

  padding: 12px 0;
`;

const Item = styled.div``;
const AvatarWrapper = styled.div``;

export default function PostList({ post }) {
  const router = useRouter();
  useEffect(() => {});
  return (
    <Wrapper>
      <AvatarWrapper>
        <Identicon string={post?.author?.username} size={"48"} />
      </AvatarWrapper>
      <Divider width={"12px"} />
      <Col2 post={post} />
    </Wrapper>
  );
}
