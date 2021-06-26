import { useState, useEffect, default as React } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { userSelector } from "@/store/userReducer";
import Divider from "@/component/utils/divider";
import IconSpan from "@/component/utils/IconSpan";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  cursor: pointer;

  :hover * {
    color: #e6007a;
  }

  :hover * {
    path {
      fill: #e6007a;
    }
  }
`;

const Item = styled.div`
  flex: 1 1 100px;
`;
const Name = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #34373c;
`;
const ArrowWrapper = styled.div`
  height: auto;
  width: auto;
  line-height: 0px;
`;

export default function Foo({ onClick }) {
  const router = useRouter();
  const user = useSelector(userSelector);

  return (
    <Wrapper onClick={onClick}>
      <Name>{user.username}</Name>
      <Divider width={"7px"} />
      <ArrowWrapper>
        <IconSpan className={"fi fi-rr-angle-small-down"} />
      </ArrowWrapper>
    </Wrapper>
  );
}
