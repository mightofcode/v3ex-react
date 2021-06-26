import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Credit from "@/component/footer/Credit";
import Links from "@/component/footer/Links";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  max-width: 1120px;
  width: 100%;
`;

const Space = styled.div`
  flex: 1 1;
`;

export default function FooterContainer({}) {
  const router = useRouter();

  return (
    <Wrapper>
      <Credit />
      <Links />
    </Wrapper>
  );
}
