import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import Breadcrumb from "@/component/breadcrumb";
import DividerLine from "@/component/utils/DividerLine";
import Markdown from "@/component/Markdown";
import AppendForm from "@/component/appendPage/appendCard/AppendForm";
import Divider from "@/component/utils/divider";
import { LightText } from "@/component/utils/Text";

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

const TextWrapper = styled.div`
  padding: 0px 16px 12px 16px;
  ::marker {
    color: red;
    font-size: 1.5em;
  }
`;

const AppendBody = styled.div``;
const NormalText = styled.li`
  font-size: 14px;
  line-height: 22px;
  color: #696d73;
`;
export default function AppendCard({}) {
  const router = useRouter();

  const breadcrumbs = [
    { text: "首页", href: `/` },
    { text: "首页", href: `/` },
    { text: "首页", href: `/` },
  ];

  useEffect(() => {}, []);
  return (
    <Wrapper>
      <ItemWrapper>
        <Breadcrumb items={breadcrumbs} />
      </ItemWrapper>
      <DividerLine />
      <AppendForm />
      <DividerLine />

      <Divider height={"12px"} />
      <TextWrapper>
        <LightText>关于为主题创建附言</LightText>
        <NormalText>
          请在确有必要的情况下再使用此功能为原主题补充信息
        </NormalText>
        <NormalText>每个主题至多可以附加 3 条附言</NormalText>
      </TextWrapper>
    </Wrapper>
  );
}
