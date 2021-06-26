import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import SignUpForm from "@/component/signup/SignUpForm";
import SignUpPolicy from "@/component/signup/SIgnUpPolicy";
import SignInForm from "@/component/signIn/SignInForm";
import Divider from "@/component/utils/divider";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
`;

const Item = styled.div`
  flex: 1 1 100px;
`;

export default function SignIn({}) {
  const router = useRouter();

  return (
    <Wrapper>
      <Divider height={"24px"} />
      <SignInForm />
      <SignUpPolicy />
    </Wrapper>
  );
}
