import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import Breadcrumb from "@/component/breadcrumb";

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
  background-color: #333344;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
`;

const Banner = styled.div`
  border: 0px solid transparent;
  width: 100%;
  height: 85px;
`;
const BreadcrumbWrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 12px 16px;
`;
export default function CategoryBanner({ tabs, category }) {
  const router = useRouter();

  const tabModel = tabs.find((v) => {
    return v.categories.some((a) => category == a);
  });

  const categoryModel = (tabModel?.categoryDocuments || []).find((a) => {
    return a?.uid == category;
  });

  const breadcrumbs = [
    { text: "首页", href: `/` },
    { text: categoryModel?.name, href: null },
  ];
  return (
    <Wrapper>
      <Banner></Banner>
      <BreadcrumbWrapper>
        <Breadcrumb items={breadcrumbs} />
      </BreadcrumbWrapper>
    </Wrapper>
  );
}
