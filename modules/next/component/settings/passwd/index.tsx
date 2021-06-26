import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import Divider from "@/component/utils/divider";
import Col2 from "@/component/settings/profile/Col2";
import Col1 from "@/component/settings/passwd/Col1";

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

export default function SettingsPasswd({}) {
  const router = useRouter();

  return (
    <Wrapper>
      <Col1 />
      <Divider width={"16px"} />
      <Col2 tab={"passwd"} />
    </Wrapper>
  );
}
