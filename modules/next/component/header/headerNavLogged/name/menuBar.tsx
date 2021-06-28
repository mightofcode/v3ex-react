import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import useOutsideClick from "@/lib/utils/click";
import Link from "next/link";
import { postApi } from "@/services/nextApi";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }

  padding: 0.5rem 0;
  background: #ffffff;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  .exit {
    border-top: 1px solid #f3f3f3;
  }

  width: 128px;

  position: absolute;
  top: 40px;
  z-index: 2;
`;

const Item = styled.a`
  line-height: 32px;
  font-size: 14px;
  color: #34373c;
  cursor: pointer;
  width: 100%;
  :hover {
    background-color: #f8f8f8;
  }
  padding-left: 14px;
`;

export default function MenuBar({ setShowDropdown }) {
  const router = useRouter();

  const dropDown = useRef();
  useOutsideClick(dropDown, () => {
    setShowDropdown(false);
  });

  const onLogout = async () => {
    if (confirm("确认登出？")) {
      const res = await postApi("/api/auth/logout", {});
      //await router.push("/");
      window.location.href = "/";
    }
  };

  return (
    <Wrapper ref={dropDown}>
      <Item href={"/home"}>个人主页</Item>
      <Item href={"/settings"}>设置</Item>
      <Item onClick={onLogout}>登出</Item>
    </Wrapper>
  );
}
