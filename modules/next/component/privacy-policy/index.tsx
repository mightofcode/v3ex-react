import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Card12x16 from "@/component/Card12x16";
import PolicyContainer from "@/component/privacy-policy/policyContainer";

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

export default function PrivacyPolicy({}) {
  const router = useRouter();

  return (
    <Wrapper>
      <Card12x16>
        <PolicyContainer />
      </Card12x16>
    </Wrapper>
  );
}
