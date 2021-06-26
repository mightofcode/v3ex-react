import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import Col1 from "@/component/indexPage/Col1";
import Col2 from "@/component/indexPage/Col2";
import Divider from "@/component/utils/divider";
import PageNav from "@/component/pageNav";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
`;

const Item = styled.div`
  flex: 1 1 100px;
`;

export default function IndexPage({ posts, tabs, tab, hotPosts }) {
  const router = useRouter();

  useEffect(() => {
    console.log(posts, tabs, tab, hotPosts);
  }, []);

  return (
    <Wrapper>
      <Col1 posts={posts} tabs={tabs} tab={tab} />
      <Divider width={"16px"} />
      <Col2 hotPosts={hotPosts} />
    </Wrapper>
  );
}
