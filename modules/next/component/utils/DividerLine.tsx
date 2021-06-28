import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  background: #e2e2e2;
  width: 100%;
  height: 1px;
`;

export default function DividerLine({}) {
  const router = useRouter();

  return <Wrapper></Wrapper>;
}
