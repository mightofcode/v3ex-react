import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
    margin-left: 16px;
  }
  height: 46px;
  width: 100%;
  padding: 12px 16px;
`;

const Item = styled.a`
  cursor: pointer;
  font-size: 14px;
  line-height: 22px;
  color: #696d73;
  :hover {
    text-decoration: underline;
  }
`;

export default function Nodel2({ categories }) {
  const router = useRouter();

  return (
    <Wrapper>
      {(categories || []).map((item) => (
        <Item key={item.uid} href={`/go/${item.uid}`}>
          {item.name}
        </Item>
      ))}
    </Wrapper>
  );
}
