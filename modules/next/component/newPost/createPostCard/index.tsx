import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import Breadcrumb from "@/component/breadcrumb";
import DividerLine from "@/component/utils/DividerLine";
import CreatePostForm from "@/component/newPost/createPostCard/createPostForm";
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
  /* white */

  background: #ffffff;
  /* shadow-100 */

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  width: 100%;
  margin-top: 16px;
`;

const Item = styled.div``;
const BreadcrumbWrapper = styled.div`
  padding: 12px 16px;
`;

export default function CreatePostCard({ tabs }) {
  const router = useRouter();

  const breadcrumbs = [
    { text: "首页", href: "/" },
    { text: "创建新主题", href: null },
  ];
  return (
    <Wrapper>
      <BreadcrumbWrapper>
        <Breadcrumb items={breadcrumbs} />
      </BreadcrumbWrapper>
      <DividerLine />
      <CreatePostForm tabs={tabs} />
    </Wrapper>
  );
}
