import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Divider from "@/component/utils/divider";
import Input from "@/component/input";

import SignUpTip from "@/component/signup/SignUpTip";
import Link from "@/component/utils/Link";
import { postApi } from "@/services/nextApi";
import cookieCutter from "cookie-cutter";
import BlackFormButton from "@/component/button/BlackFormButton";
import SignInTip from "@/component/signIn/SignInTip";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 32px;
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
const LeftWrapper = styled.div`
  align-self: flex-start;
`;
export default function SignInForm({}) {
  const router = useRouter();
  const [errors, setErrors] = useState<any>();

  const [formData, setFromData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
    setErrors(null);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await postApi("/api/auth/login", formData);
    if (res.result) {
      setErrors(null);
      cookieCutter.set("auth-token", res.result.accessToken);
      window.location.href = "/";
    } else {
      setErrors(res.error);
    }
  };
  return (
    <Wrapper onSubmit={onSubmit}>
      <Head1>欢迎回来</Head1>
      <Divider height={"4px"} />
      <Head2>{process.env.NEXT_PUBLIC_SITE_NAME} 问答社区</Head2>
      <Divider height={"24px"} />
      <Input
        placeholder={"用户名"}
        name={"username"}
        onChange={handleChange}
        error={errors?.data?.username}
        value={formData?.username}
      />
      <Divider height={"12px"} />
      <Input
        placeholder={"密码"}
        type={"password"}
        name={"password"}
        onChange={handleChange}
        error={errors?.data?.password}
        value={formData?.password}
      />
      <Divider height={"8px"} />
      <LeftWrapper>
        <Link href={"/forget"} text={"忘记密码？"} color={"#696D73"} />
      </LeftWrapper>
      <Divider height={"24px"} />
      <BlackFormButton text={"登录"} />
      <Divider height={"12px"} />
      <SignInTip />
    </Wrapper>
  );
}
