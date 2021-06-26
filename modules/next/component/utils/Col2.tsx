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
`;

export default function Col2({ children }) {
  const router = useRouter();
  const user = useSelector(userSelector);

  return <Wrapper>{children}</Wrapper>;
}
