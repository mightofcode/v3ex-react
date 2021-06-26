import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
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
    margin-left: 0px;
  }
`;

const Item = styled.a`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  font-size: 14px;
  line-height: 22px;
  color: #34373c;
`;
const DisabledItem = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #696d73;
`;
export default function Crumb({ isLast, text, href }) {
  const router = useRouter();

  return (
    <Wrapper>
      {href ? (
        <Item href={href}>{text}</Item>
      ) : (
        <DisabledItem>{text}</DisabledItem>
      )}
      {isLast ? null : <IconSpan className={"fi fi-rr-angle-small-right"} />}
    </Wrapper>
  );
}
