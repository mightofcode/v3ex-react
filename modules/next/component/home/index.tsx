import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import Divider from "@/component/utils/divider";
import PageNav from "@/component/pageNav";
import Col1 from "@/component/home/Col1";
import Col2 from "@/component/home/Col2";
import { userSelector } from "@/store/userReducer";

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

const Item = styled.div`
  flex: 1 1 100px;
`;

export default function HomePage({ username }) {
  const router = useRouter();

  return (
    <Wrapper>
      <Col1 username={username} />
      <Divider width={"16px"} />
      <Col2 />
    </Wrapper>
  );
}
