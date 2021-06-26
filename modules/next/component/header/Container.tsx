import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import * as React from "react";
import Name from "@/component/header/Name";
import HeaderNav from "@/component/header/headerNav";
import { useSelector } from "react-redux";
import { userSelector } from "@/store/userReducer";
import HeaderNavLogged from "@/component/header/headerNavLogged";
import Search from "@/component/search";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  width: 100%;
  max-width: 1120px;
  > :last-child {
    margin-left: 32px;
  }
`;
const Fill = styled.div`
  flex-grow: 1;
`;

export default function Container({}) {
  const user = useSelector(userSelector);

  return (
    <Wrapper>
      <Name />
      <Fill></Fill>
      <Search />
      {!user && <HeaderNav />}
      {user && <HeaderNavLogged />}
    </Wrapper>
  );
}
