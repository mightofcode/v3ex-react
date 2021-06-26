import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Input from "@/component/input";
import Divider from "@/component/utils/divider";

import SignUpTip from "@/component/signup/SignUpTip";
import { postApi } from "@/services/nextApi";
import cookieCutter from "cookie-cutter";
import BlackFormButton from "@/component/button/BlackFormButton";
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
  border-radius: 8px;
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

export default function SignUpForm({ onSignupSuccess }) {
  const router = useRouter();
  const [errors, setErrors] = useState<any>();

  const [formData, setFromData] = useState({
    username: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });

    setErrors(null);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await postApi("/api/auth/signup", formData);
    if (res.result) {
      setErrors(null);
      const res = await postApi("/api/auth/login", formData);

      cookieCutter.set("auth-token", res.result.accessToken);
      onSignupSuccess();
    } else {
      setErrors(res.error);
    }
  };

  return (
    <Wrapper onSubmit={onSubmit}>
      <Head1>欢迎加入</Head1>
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
        placeholder={"注册邮箱"}
        name={"email"}
        onChange={handleChange}
        error={errors?.data?.email}
        value={formData?.email}
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
      <Divider height={"12px"} />
      <Input
        placeholder={"重复密码"}
        type={"password"}
        name={"passwordRepeat"}
        onChange={handleChange}
        error={errors?.data?.passwordRepeat}
        value={formData?.passwordRepeat}
      />
      <Divider height={"24px"} />
      <BlackFormButton text={"下一步"} />
      <Divider height={"12px"} />
      <SignUpTip />
    </Wrapper>
  );
}
