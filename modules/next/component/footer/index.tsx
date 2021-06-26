import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import * as React from "react";
import FooterContainer from "@/component/footer/FooterContainer";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  height: 60px;
  width: 100%;
`;

const Item = styled.div`
  flex: 1 1 100px;
`;

export default function Footer({}) {
  const router = useRouter();

  return (
    <Wrapper>
      <FooterContainer />
    </Wrapper>
  );
}
