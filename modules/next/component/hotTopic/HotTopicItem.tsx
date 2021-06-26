import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Identicon from "react-identicons";
import * as React from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
    margin-left: 7px;
  }
  width: 100%;
  padding: 4px 16px;
`;

const Number = styled.div`
  font-size: 13px;
  line-height: 16px;
  /* identical to box height, or 123% */

  /* text-minor */

  color: #696d73;
`;
const Text = styled.div`
  font-size: 13px;
  line-height: 16px;
  /* identical to box height, or 123% */

  text-align: right;

  /* text-accessory */

  color: #c8cbd0;
`;

const ItemLink = styled.a`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  font-size: 14px;
  line-height: 22px;
  color: #34373c;
`;
const LinkIcon = styled.a`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
export default function HotTopicItem({ post }) {
  const router = useRouter();

  useEffect(() => {
    console.log("post", post, post.title);
  }, []);

  return (
    <Wrapper>
      <LinkIcon href={`/member/${post?.author?.username}`}>
        <Identicon string={post?.author?.username} size={"24"} />
      </LinkIcon>
      <ItemLink href={`/t/${post?.uid}`}>{post.title}</ItemLink>
    </Wrapper>
  );
}
