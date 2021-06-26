import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import { postApi } from "@/services/nextApi";
import Divider from "@/component/utils/divider";
import Input from "@/component/input";
import Link from "@/component/utils/Link";
import SignUpTip from "@/component/signup/SignUpTip";
import BlackFormButton from "@/component/button/BlackFormButton";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  width: 368px;
`;

const Item = styled.div``;
const BoldText = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #34373c;
`;
const ButtonWrapper = styled.div`
  align-self: flex-end;
`;

export default function PasswdForm({}) {
  const router = useRouter();
  const [errors, setErrors] = useState<any>();

  const [formData, setFromData] = useState({
    password: "",
    passwordNew: "",
    passwordNewRepeated: "",
  });

  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });

    setErrors(null);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await postApi("/api/user/passwd/update", formData);
    if (res.result) {
      setErrors(null);
      window.location.reload();
    } else {
      setErrors(res.error);
    }
  };
  return (
    <Wrapper onSubmit={onSubmit}>
      <BoldText>旧密码</BoldText>
      <Divider height={"8px"} />
      <Input
        placeholder={""}
        name={"password"}
        onChange={handleChange}
        error={errors?.data?.password}
        type={"password"}
        value={formData?.password}
      />
      <Divider height={"16px"} />
      <BoldText>新密码</BoldText>
      <Divider height={"8px"} />
      <Input
        placeholder={""}
        name={"passwordNew"}
        onChange={handleChange}
        error={errors?.data?.passwordNew}
        type={"password"}
        value={formData?.passwordNew}
      />
      <Divider height={"16px"} />
      <BoldText>确认密码</BoldText>
      <Divider height={"8px"} />
      <Input
        placeholder={""}
        name={"passwordNewRepeated"}
        onChange={handleChange}
        error={errors?.data?.passwordNewRepeated}
        type={"password"}
        value={formData?.passwordNewRepeated}
      />
      <Divider height={"16px"} />
      <ButtonWrapper>
        <BlackFormButton text={"修改密码"} />
      </ButtonWrapper>
      <Divider height={"16px"} />
    </Wrapper>
  );
}
