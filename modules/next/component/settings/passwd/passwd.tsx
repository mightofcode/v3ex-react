import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import DividerLine from "@/component/utils/DividerLine";
import PasswdForm from "@/component/settings/passwd/PasswdForm";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  width: 100%;
`;

const BoldText = styled.div`
  padding: 12px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #34373c;
`;
const Item = styled.div``;
const FormWrapper = styled.div`
  align-self: center;
  margin-top: 16px;
`;

export default function Passwd({}) {
  const router = useRouter();

  return (
    <Wrapper>
      <BoldText>修改密码</BoldText>
      <DividerLine />
      <FormWrapper>
        <PasswdForm />
      </FormWrapper>
    </Wrapper>
  );
}
