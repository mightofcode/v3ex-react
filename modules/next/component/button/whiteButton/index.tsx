import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  width: 100%;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  padding: 5px 10px;

  :hover {
    border: 1px solid #aaaaaa;
  }
`;

const Item = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #696d73;
`;

export default function WhiteButton({ text, href }) {
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
