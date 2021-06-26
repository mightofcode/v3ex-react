import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import CategoryPosts from "@/component/category/categoryPosts";
import CategoryBanner from "@/component/category/categoryBanner";

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
  margin-top: 16px;
  width: 100%;
`;

const Item = styled.div`
  flex: 1 1 100px;
`;

export default function Col1({ posts, category, tabs }) {
  const router = useRouter();

  return (
    <Wrapper>
      <CategoryBanner tabs={tabs} category={category} />
      <CategoryPosts posts={posts} category={category} />
    </Wrapper>
  );
}
