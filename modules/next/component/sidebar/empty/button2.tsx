import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { COLOR_WHITE } from "@/lib/utils/color";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  cursor: pointer;
  padding: 4px 16px;
  background: #4b5057;
  border-radius: 4px;
`;

const Item = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: ${COLOR_WHITE};
`;

export default function Button2({ text, href }) {
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
