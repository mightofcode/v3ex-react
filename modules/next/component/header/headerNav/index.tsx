import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

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
    margin-left: 24px;
  }
`;

const Item = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #34373c;
`;

export default function HeaderNav({}) {
  const router = useRouter();

  return (
    <Wrapper>
      <Item>
        <Link href={"/"}>首页</Link>
      </Item>
      <Item>
        <Link href={"/signup"}>注册</Link>
      </Item>
      <Item>
        <Link href={"/signin"}>登录</Link>
      </Item>
    </Wrapper>
  );
}
