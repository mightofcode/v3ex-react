import { useState, useEffect, default as React } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Divider from "@/component/utils/divider";
import IconSpan from "@/component/utils/IconSpan";
const Wrapper = styled.a`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  min-width: 30px;

  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const Item = styled.div`
  flex: 1 1 100px;
`;
const Light = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: #c8cbd0;
`;

const Img = styled.img``;
export default function ViewAndComment({ commentCount, postId }) {
  const router = useRouter();
  useEffect(() => {
    console.log("loaded");
  }, []);
  return (
    <Wrapper href={`/t/${postId}`}>
      <IconSpan className={"fi fi-rr-comment"} size={"14px"} />
      <Divider width={"4px"} />
      <Light>{commentCount || 0}</Light>
    </Wrapper>
  );
}
