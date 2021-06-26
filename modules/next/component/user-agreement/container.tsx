import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import * as React from "react";
import Breadcrumb from "@/component/breadcrumb";
import MdArticle from "@/component/mdArticle";

import md from "./user-aggrement.md";

const Wrapper = styled.div`
  margin: 0;
  padding: 0 0 48px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
`;
const PaddingWrapper = styled.div`
  padding: 12px 16px 0 16px;
`;
const ArticleWrapper = styled.div`
  padding: 24px 16px 0 16px;
`;

const Divider = styled.div`
  width: 100%;
  padding: 0 16px 0 16px;
  margin: 12px -16px 0 -16px;
  border-bottom: 1px solid #f3f3f3;
`;

export default function Container({}) {
  const router = useRouter();

  const breadcrumbs = [
    { text: "首页", href: "/" },
    { text: "用户协议", href: null },
  ];
  return (
    <Wrapper>
      <PaddingWrapper>
        <Breadcrumb items={breadcrumbs}></Breadcrumb>
      </PaddingWrapper>
      <Divider></Divider>
      <ArticleWrapper>
        <MdArticle md={md} />
      </ArticleWrapper>
    </Wrapper>
  );
}
