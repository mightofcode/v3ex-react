import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import Divider from "@/component/utils/divider";
import PageNav from "@/component/pageNav";
import Col1 from "@/component/newPost/Col1";
import Col2 from "@/component/newPost/Col2";

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

export default function NewPost({ tabs }) {
  const router = useRouter();

  return (
    <Wrapper>
      <Col1 tabs={tabs} />
      <Divider width={"16px"} />
      <Col2 />
    </Wrapper>
  );
}
