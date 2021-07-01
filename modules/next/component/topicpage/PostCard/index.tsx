import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import Breadcrumb from "@/component/breadcrumb";
import DividerLine from "@/component/utils/DividerLine";
import PostContent from "@/component/topicpage/PostCard/PostContent";
import Append from "@/component/topicpage/append";
import Divider from "@/component/utils/divider";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }

  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  width: 100%;
  > * {
  }
`;

const ItemWrapper = styled.div`
  padding: 12px 16px;
  width: 100%;
`;

const FlexWrapper = styled.div`
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

export default function PostCard({ post, tabAndCat, appends }) {
  const router = useRouter();

  const breadcrumbs = [
    { text: tabAndCat?.tab?.name, href: `/?tab=${tabAndCat?.tab?.uid}` },
    {
      text: tabAndCat?.category?.name,
      href: `/go/${tabAndCat?.category?.uid}`,
    },
  ];

  return (
    <Wrapper>
      <ItemWrapper>
        <Breadcrumb items={breadcrumbs} />
      </ItemWrapper>
      <DividerLine />
      <ItemWrapper>
        <PostContent post={post} appends={appends} />
      </ItemWrapper>
      <DividerLine />
      {(appends || []).map((item, index) => (
        <FlexWrapper>
          <Append append={item} index={index} key={index} />
          <DividerLine />
        </FlexWrapper>
      ))}
    </Wrapper>
  );
}
