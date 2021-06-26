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

const Markdown = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  width: 272px;
  padding: 12px 16px;
`;

const Link = styled.a`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #696d73;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export default function Col2({}) {
  const router = useRouter();
  const user = useSelector(userSelector);

  return (
    <Wrapper>
      {user && <SidebarUser user={user} />}
      {!user && <SidebarEmpty />}
      <Markdown>
        <Link>如何使用 Markdown</Link>
      </Markdown>
    </Wrapper>
  );
}
