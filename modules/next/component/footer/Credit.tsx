import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

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
  }
`;

const Item = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #696d73;
`;

export default function Credit({}) {
  const router = useRouter();

  return (
    <Wrapper>
      <Item>
        {process.env.NEXT_PUBLIC_SITE_NAME} © 2021 - Powered By{" "}
        {process.env.NEXT_PUBLIC_SITE_NAME}
      </Item>
    </Wrapper>
  );
}
