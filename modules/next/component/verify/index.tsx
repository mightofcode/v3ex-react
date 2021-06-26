import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import VerifyCard from "@/component/verify/verifyCard";
import Divider from "@/component/utils/divider";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  width: 100%;
`;

const Item = styled.div`
  flex: 1 1 100px;
`;

export default function Verify({}) {
  const router = useRouter();

  return (
    <Wrapper>
      <Divider height={"24px"} />
      <VerifyCard />
    </Wrapper>
  );
}
