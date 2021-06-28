import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import HotTopicItem from "@/component/hotTopic/HotTopicItem";
import DividerLine from "@/component/utils/DividerLine";

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
  width: 272px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #34373c;
  padding: 12px 16px;
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export default function HotTopic({ hotPosts }) {
  const router = useRouter();

  return (
    <Wrapper>
      <Title>今日热议主题</Title>
      <DividerLine />
      {(hotPosts || []).map((item) => (
        <PostWrapper key={item?.uid}>
          <HotTopicItem post={item} />
          <DividerLine />
        </PostWrapper>
      ))}
    </Wrapper>
  );
}
