import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import Breadcrumb from "@/component/breadcrumb";
import DividerLine from "@/component/utils/DividerLine";
import NotificationItem from "@/component/notifications/NotificationItem";
import PageNav from "@/component/pageNav";

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
`;

const Item = styled.div``;
const BreadcrumbWrapper = styled.div`
  padding: 12px 16px;
`;
const DividerWrapper = styled.div`
  padding: 0 16px;
  width: 100%;
`;
const PageNavWrapper = styled.div`
  padding: 12px 16px;
  width: 100%;
`;

export default function NotificationList({}) {
  const router = useRouter();

  const breadcrumbs = [
    { text: "首页", href: "/" },
    { text: "提醒系统", href: null },
  ];
  return (
    <Wrapper>
      <BreadcrumbWrapper>
        <Breadcrumb items={breadcrumbs} />
      </BreadcrumbWrapper>
      <DividerLine />
      <NotificationItem />
      <DividerWrapper>
        <DividerLine />
      </DividerWrapper>
      <NotificationItem />
      <DividerWrapper>
        <DividerLine />
      </DividerWrapper>
      <PageNavWrapper>
        <PageNav pageSize={5} total={100} page={2} onclick={(v) => {}} />
      </PageNavWrapper>
    </Wrapper>
  );
}
