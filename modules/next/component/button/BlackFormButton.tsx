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
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  background: #4b5057;
  border-radius: 4px;
  padding: 5px 10px;
  white-space: nowrap;
  :hover {
    background: #3a3e43;
  }
`;

const Item = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
`;

export default function BlackFormButton({ text }) {
  const router = useRouter();
  return (
    <Wrapper>
      <Item>{text}</Item>
    </Wrapper>
  );
}
