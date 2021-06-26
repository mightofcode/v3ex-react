import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  position: absolute;
  bottom: 24px;
`;

const Item = styled.div`
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #696d73;
`;

const ItemLink = styled.a`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  color: #0074cd;
`;
export default function SignUpPolicy({}) {
  const router = useRouter();

  return (
    <Wrapper>
      <Item>注册登录即表示您同意</Item>
      <Item>
        <ItemLink href={"/user-agreement"}>用户协议</ItemLink> 和{" "}
        <ItemLink href={"/privacy-policy"}>隐私条款</ItemLink>
      </Item>
    </Wrapper>
  );
}
