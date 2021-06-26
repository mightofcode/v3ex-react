import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import SidebarEmpty from "@/component/sidebar/empty";
import HotTopic from "@/component/hotTopic";
import { userSelector } from "@/store/userReducer";
import SidebarUser from "@/component/sidebar/SidebarUser";
import * as React from "react";

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
  min-width: 272px;
  margin-top: 16px;
`;

const Item = styled.div``;

export default function Col2({}) {
  const router = useRouter();
  const user = useSelector(userSelector);

  return (
    <Wrapper>
      {user && <SidebarUser user={user} />}
      {!user && <SidebarEmpty />}
    </Wrapper>
  );
}
