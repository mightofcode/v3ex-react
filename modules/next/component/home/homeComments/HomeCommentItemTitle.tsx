import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import { ContentText, NormalText, SimpleLink } from "@/component/utils/Text";

const Wrapper = styled.div`
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
    margin-left: 5px;
  }
  flex-wrap: wrap;
`;

const Item = styled.div``;

const BoldText = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #34373c;
`;

const CatLink = styled.a`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export default function HomeCommentItemTitle({ comment }) {
  const router = useRouter();
  return (
    <Wrapper>
      <NormalText>回复</NormalText>
      <SimpleLink>
        <BoldText>{comment?.post?.author?.username}</BoldText>
      </SimpleLink>
      <NormalText>创建的主题</NormalText>
      <CatLink href={`/go/${comment?.post?.category?.uid}`}>
        <ContentText>{comment?.post?.category?.name}</ContentText>
      </CatLink>
      <SimpleLink href={`/t/${comment?.post?.uid}`}>
        <BoldText>{comment?.post?.title}</BoldText>
      </SimpleLink>
    </Wrapper>
  );
}
