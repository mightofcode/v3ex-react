import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const Wrapper = styled.button`
  display: flex;
  white-space: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  height: 38px;
  width: 100%;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  padding: 5px 10px;
`;

const Item = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #696d73;
`;

export default function SimpleButton({ text, href, onClick = null }) {
  const router = useRouter();

  return (
    <Wrapper
      onClick={() => {
        if (href) {
          router.push(href);
        } else if (onClick) {
          onClick();
        }
      }}
    >
      <Item>{text}</Item>
    </Wrapper>
  );
}
