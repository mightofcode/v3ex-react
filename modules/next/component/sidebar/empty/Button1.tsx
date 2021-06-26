import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  border: 1px solid #dddddd;
  border-radius: 4px;
  cursor: pointer;
  padding: 4px 16px;
`;

const Item = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #696d73;
`;

export default function Button1({ text, href }) {
  const router = useRouter();

  return (
    <Wrapper
      onClick={() => {
        router.push(href);
      }}
    >
      <Item>{text}</Item>
    </Wrapper>
  );
}
