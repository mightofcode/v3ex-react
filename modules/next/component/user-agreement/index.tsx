import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Card12x16 from "@/component/Card12x16";
import PolicyContainer from "@/component/privacy-policy/policyContainer";
import * as React from "react";
import Container from "@/component/user-agreement/container";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  > * {
    margin-top: 16px;
  }
  width: 100%;
`;

const Item = styled.div`
  flex: 1 1 100px;
`;

export default function UserAgreement({}) {
  const router = useRouter();

  return (
    <Wrapper>
      <Card12x16>
        <Container />
      </Card12x16>
    </Wrapper>
  );
}
