import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import * as React from "react";
import Container from "@/component/header/Container";

const Wrapper = styled.div`
  height: 60px;
  background-color: #ffffff;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 865px) {
  }
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
`;

const Item = styled.div`
  flex: 1 1 100px;
`;

export default function Header({}) {
  const router = useRouter();
  useEffect(() => {
    return () => {};
  });
  return (
    <Wrapper>
      <Container />
    </Wrapper>
  );
}
