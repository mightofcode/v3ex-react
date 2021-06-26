import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import SignUpForm from "@/component/signup/SignUpForm";
import SignUpPolicy from "@/component/signup/SIgnUpPolicy";
import SignUpSuccess from "@/component/signup/SignUpSuccess";

const Wrapper = styled.div`
  margin: 0;
  margin-top: 24px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
`;

export default function Signup({}) {
  const router = useRouter();

  const [signuped, setSignuped] = useState(false);

  const onSignupSuccess = () => {
    setSignuped(true);
  };

  return (
    <Wrapper>
      {signuped ? (
        <SignUpSuccess />
      ) : (
        <SignUpForm onSignupSuccess={onSignupSuccess} />
      )}
      <SignUpPolicy />
    </Wrapper>
  );
}
