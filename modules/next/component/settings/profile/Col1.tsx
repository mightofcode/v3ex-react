import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import HomePosts from "@/component/home/homePosts";
import Divider from "@/component/utils/divider";
import HomeComments from "@/component/home/homeComments";
import Profile from "@/component/settings/profile/Profile";
import ProfileForm from "@/component/settings/profile/ProfileForm";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
    margin-top: 16px;
  }

  width: 100%;
  margin-top: 16px;
`;

const Item = styled.div`
  flex: 1 1 100px;
`;

export default function Col1({}) {
  const router = useRouter();

  return (
    <Wrapper>
      <Profile />
    </Wrapper>
  );
}
