import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import PostCard from "@/component/topicpage/PostCard";
import CommentsCard from "@/component/topicpage/commentsCard";
import Divider from "@/component/utils/divider";
import { userSelector } from "@/store/userReducer";
import CommitCommentCard from "@/component/CommitCommentCard";
import NoCommentsCard from "@/component/topicpage/NoCommentsCard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  width: 100%;
  flex-shrink: 1;
  margin-top: 16px;
`;

export default function Col1({ post, page, tabAndCat, appends }) {
  const router = useRouter();
  const user = useSelector(userSelector);

  useEffect(() => {
    console.log(post);
  }, []);

  return (
    <Wrapper>
      <PostCard post={post} tabAndCat={tabAndCat} appends={appends} />
      <Divider height={"16px"} />
      {(post?.commentCount || 0) > 0 ? (
        <CommentsCard postId={post?.uid} page={page} />
      ) : (
        <NoCommentsCard />
      )}

      <Divider height={"16px"} />
      {user && <CommitCommentCard post={post} />}
    </Wrapper>
  );
}
