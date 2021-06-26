import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const Wrapper = styled.a<{ color }>`
  font-size: 14px;
  line-height: 22px;
  color: #e6007a;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    ${(props) => props.color && `color: ${props.color};`}
  }
  ${(props) => props.color && `color: ${props.color};`}
`;

export default function Link({ color = "", text, href, newTab = true }) {
  const router = useRouter();

  return (
    <Wrapper color={color} href={href} target={newTab ? "_blank" : "_self"}>
      {text}
    </Wrapper>
  );
}
