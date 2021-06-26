import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-left;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  max-width: 288px;
`;

const Icon = styled.div``;
const Head = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #34373c;
`;
const Text = styled.div`
  font-size: 14px;
  line-height: 22px;
  text-align: justify;
  color: #696d73;
`;

const Text404 = styled.div`
  font-weight: bold;
  font-size: 100px;
  line-height: 150%;
  text-align: justify;
  color: #34373c;
`;

export default function NotFoundContainer({}) {
  const router = useRouter();

  return (
    <Wrapper>
      <Text404>404</Text404>
      <Head>页面消失在黑洞中</Head>
      <Text>访问的页面不存在，您可能点击了失效的链接，或输入了错误的地址</Text>
    </Wrapper>
  );
}
