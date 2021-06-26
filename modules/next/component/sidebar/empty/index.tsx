import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import SidebarEmptyButtons from "@/component/sidebar/empty/buttons";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
    margin-top: 16px;
  }
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  width: 100%;
  padding: 24px;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #34373c;
`;

export default function SidebarEmpty({}) {
  const router = useRouter();

  return (
    <Wrapper>
      <Text>{process.env.NEXT_PUBLIC_SITE_NAME}，程序员的家园</Text>
      <SidebarEmptyButtons />
    </Wrapper>
  );
}
