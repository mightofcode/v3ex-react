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

const Head = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #c8cbd0;
`;
const Item = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #696d73;
`;

export default function Links({}) {
  const router = useRouter();

  return (
    <Wrapper>
      <Head>友情链接</Head>
      <Item>
        <a href={"https://www.baidu.com/"} target="_blank">
          百度
        </a>
      </Item>
      <Item>
        <a href={"https://www.google.com/"} target="_blank">
          谷歌
        </a>
      </Item>
    </Wrapper>
  );
}
