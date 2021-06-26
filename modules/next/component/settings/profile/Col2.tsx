import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import SidebarEmpty from "@/component/sidebar/empty";
import HotTopic from "@/component/hotTopic";
import { userSelector } from "@/store/userReducer";
import SidebarUser from "@/component/sidebar/SidebarUser";
import * as React from "react";
import DividerLine from "@/component/utils/DividerLine";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  min-width: 272px;
  margin-top: 16px;

  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
`;
const ItemSelected = styled.a`
  padding: 12px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #34373c;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  background: #fcfcfc;
  width: 100%;
`;

const Item = styled.a`
  padding: 12px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #34373c;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  width: 100%;
`;

export default function Col2({ tab = "profile" }) {
  const router = useRouter();
  const user = useSelector(userSelector);

  return (
    <Wrapper>
      {tab == "profile" ? (
        <ItemSelected href={"/settings/profile"}>个人信息</ItemSelected>
      ) : (
        <Item href={"/settings/profile"}>个人信息</Item>
      )}

      <DividerLine />
      {tab == "passwd" ? (
        <ItemSelected href={"/settings/passwd"}>修改密码</ItemSelected>
      ) : (
        <Item href={"/settings/passwd"}>修改密码</Item>
      )}
    </Wrapper>
  );
}
