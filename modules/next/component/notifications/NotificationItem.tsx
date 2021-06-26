import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import NotiComment from "@/component/notifications/NotiComment";
import Divider from "@/component/utils/divider";
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
  padding: 12px 16px;
`;

const Item = styled.div``;
const AvatarWrapper = styled.img``;

export default function NotificationItem({}) {
  const router = useRouter();

  return (
    <Wrapper>
      <Identicon string={""} size={"24"} />
      <Divider width={"8px"} />
      <NotiComment />
    </Wrapper>
  );
}
