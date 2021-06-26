import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import { LightText, LightText2, NormalText } from "@/component/utils/Text";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
    margin-left: 5px;
  }
  flex-wrap: wrap;
`;

const Name = styled.a`
  font-weight: bold;
  color: #778087;
  font-size: 14px;
  line-height: 150%;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export default function NotiCommentLine1({}) {
  const router = useRouter();

  return (
    <Wrapper>
      <Name>1</Name>
      <LightText>在</LightText>
      <NormalText>
        标题标题标题标标题标题标题标标题标题标题标标题标题标题标标题标题标题标标题标题标题标题标题
      </NormalText>
      <LightText>里回复了你</LightText>
      <LightText2>2天前</LightText2>
    </Wrapper>
  );
}
