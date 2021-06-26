import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import Divider from "@/component/utils/divider";
import Col1 from "@/component/utils/Col1";
import Col2 from "@/component/utils/Col2";
import SidebarUser from "@/component/sidebar/SidebarUser";
import SidebarEmpty from "@/component/sidebar/empty";
import { userSelector } from "@/store/userReducer";
import NotificationList from "@/component/notifications/NotificationList";

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

const Item = styled.div``;

export default function Notifications({}) {
  const router = useRouter();

  const user = useSelector(userSelector);
  return (
    <Wrapper>
      <Col1>
        <NotificationList />
      </Col1>
      <Divider width={"16px"} />
      <Col2>
        {user && <SidebarUser user={user} />}
        {!user && <SidebarEmpty />}
      </Col2>
    </Wrapper>
  );
}
