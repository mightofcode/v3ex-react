import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const Wrapper = styled.button`
  display: flex;
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
  cursor: pointer;

  background: #4b5057;
  border-radius: 4px;
`;

const Item = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
`;

export default function PublishButton({ text, onClick }) {
  const router = useRouter();
  useEffect(() => {}, []);
  return (
    <Wrapper
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <Item>{text}</Item>
    </Wrapper>
  );
}
