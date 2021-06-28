import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0;
  padding: 32px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
`;

export default function Card32({ children }) {
  const router = useRouter();

  return <Wrapper>{children}</Wrapper>;
}
