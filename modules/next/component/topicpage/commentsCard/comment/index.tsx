import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import Divider from "@/component/utils/divider";
import Col2 from "@/component/topicpage/commentsCard/Col2";
import Identicon from "react-identicons";
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
`;

const AvatarWrapper = styled.img``;

const Wrapper1 = styled.div`
  width: 100%;
`;

export default function CommentInfo({ comment }) {
  const router = useRouter();

  return (
    <Wrapper>
      <div>
        <Identicon string={comment?.author?.username} size={"48"} />
      </div>
      <Divider width={"16px"} />
      <Wrapper1>
        <Col2 comment={comment} />
      </Wrapper1>
    </Wrapper>
  );
}
