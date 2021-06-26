import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import WhiteButton from "@/component/button/whiteButton";
import Button1 from "@/component/sidebar/empty/Button1";
import Button2 from "@/component/sidebar/empty/button2";
import BlackButton from "@/component/button/BlackButton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
    margin-left: 16px;
  }
`;

const Item = styled.div``;

export default function SidebarEmptyButtons({}) {
  const router = useRouter();

  return (
    <Wrapper>
      <BlackButton text={"现在注册"} href={"/signup"} />
    </Wrapper>
  );
}
