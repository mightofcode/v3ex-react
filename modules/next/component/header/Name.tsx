import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import * as React from "react";
import IconSpan from "@/component/utils/IconSpan";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
    margin-left: 8px;
  }
  cursor: pointer;
`;

const Title = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #34373c;
`;

export default function Name({}) {
  const router = useRouter();

  return (
    <Wrapper
      onClick={() => {
        window.location.reload();
      }}
    >
      <IconSpan className={" fi fi-rr-world "} size={"28px"} />
      <Title>
        <a href={"/"}>{process.env.NEXT_PUBLIC_SITE_NAME}</a>
      </Title>
    </Wrapper>
  );
}
