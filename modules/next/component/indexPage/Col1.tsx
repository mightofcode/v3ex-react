import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
    margin-top: 16px;
  }

  width: 100%;
`;

const Item = styled.div`
  flex: 1 1 100px;
`;

export default function Col1({ posts, tabs, tab }) {
  //
  const router = useRouter();
  //
  return (
    <Wrapper>
      <HomePagePosts posts={posts} tabs={tabs} tab={tab} />
      <NodeNav tabs={tabs} />
    </Wrapper>
  );
}
