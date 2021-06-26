import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Divider from "@/component/utils/divider";
import Link from "@/component/utils/Link";

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
  }
`;

const Item = styled.div`
  font-size: 14px;
  line-height: 22px;
  text-align: right;
  color: #696d73;
`;

export default function SignInTip({}) {
  const router = useRouter();

  return (
    <Wrapper>
      <Item>还没有账户？</Item>
      <Divider width={"8px"} />
      <Link text={"注册"} href={"/signup"} />
    </Wrapper>
  );
}
