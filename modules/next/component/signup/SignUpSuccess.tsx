import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import WhiteButton from "@/component/button/whiteButton";
const Wrapper = styled.form`
  margin: 0;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }

  background: #ffffff;
  /* grey-100 */

  border: 1px solid #fcfcfc;
  box-sizing: border-box;
  /* shadow-100 */

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  width: 100%;
  max-width: 352px;
`;

const Item = styled.div``;
const Head1 = styled.div`
  align-self: flex-start;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #34373c;
`;
const Head2 = styled.div`
  align-self: flex-start;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #696d73;
`;
const Text = styled.div`
  align-self: flex-start;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  padding: 12px 16px;
  background: #fafafa;
  border-radius: 4px;
  color: #696d73;
`;

export default function SignUpSuccess({}) {
  const router = useRouter();

  return (
    <Wrapper>
      <Head1>欢迎加入</Head1>
      <Head2>{process.env.NEXT_PUBLIC_SITE_NAME} 社区</Head2>
      <Text>您已收到一封邮件。请点击邮件中的链接验证注册邮箱，完成注册。</Text>
      <WhiteButton text={"我知道了"} href={"/"} />
    </Wrapper>
  );
}
