import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import PostMetaInfo from "@/component/topicpage/PostCard/PostMetaInfo";
import Divider from "@/component/utils/divider";
import Markdown from "@/component/Markdown";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
`;

const PostTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  color: #34373c;
`;
const PostBody = styled.div``;

export default function PostContent({ post }) {
  const router = useRouter();

  return (
    <Wrapper>
      <PostTitle>{post.title}</PostTitle>
      <Divider height={"8px"} />
      <PostMetaInfo post={post} />
      <Divider height={"12px"} />
      <PostBody>
        <Markdown md={post.content} />
      </PostBody>
    </Wrapper>
  );
}
