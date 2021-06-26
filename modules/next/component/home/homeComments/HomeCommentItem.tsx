import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import HomeCommentItemTitle from "@/component/home/homeComments/HomeCommentItemTitle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
    margin-top: 8px;
  }
  padding: 12px 16px;
  width: 100%;
`;

const Item = styled.div`
background: #F8F8F8;
border-radius: 4px;
padding:8px 12px;

font-weight: bold;
font-size: 14px;
line-height: 22px;
text-align: justify;s
color: #696D73;
width:100%;
`;

export default function HomeCommentItem({ comment }) {
  const router = useRouter();
  return (
    <Wrapper>
      <HomeCommentItemTitle comment={comment} />
      <Item>{comment.content}</Item>
    </Wrapper>
  );
}
