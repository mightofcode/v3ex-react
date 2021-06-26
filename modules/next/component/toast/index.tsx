import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import styled from "styled-components";
import ToastItem from "@/component/toast/ToastItem";
import * as React from "react";
import { addToast, toastsSelector } from "@/store/toastReducer";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
    margin-top: 8px;
  }
`;

const Item = styled.div`
  flex: 1 1 100px;
`;

export default function Toast({}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const toasts = useSelector(toastsSelector);
  useEffect(() => {
    //toast test code
    // console.log("toast");
    // dispatch( addToast({
    //   type:"success",
    //   text:"success",
    // }));
    // dispatch( addToast({
    //   type:"warning",
    //   text:"success",
    // }));
    // dispatch( addToast({
    //   type:"error",
    //   text:"success",
    // }));
  }, []);
  return (
    <Wrapper>
      {(toasts || []).map(({ type, text, id }) => {
        return <ToastItem type={type} text={text} id={id} key={id} />;
      })}
    </Wrapper>
  );
}
