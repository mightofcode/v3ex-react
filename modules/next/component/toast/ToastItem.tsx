import Link from "next/link";

import styled from "styled-components";
import {
  addToast,
  toastsSelector,
  removeToast,
} from "../../store/toastReducer";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import IconSpan from "@/component/utils/IconSpan";
interface Props {
  type?: string;
}

const Wrapper = styled.div<Props>`
  margin: 0;
  padding: 8px 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
    margin-left: 13px;
  }
  background: ${(props) => {
    if (props.type == "success") {
      return "#E5FFEE";
    } else if (props.type == "warning") {
      return "#E2F2FF";
    } else if (props.type == "error") {
      return "#FFF1F1";
    }
  }};
  border: 1px solid
    ${(props) => {
      if (props.type == "success") {
        return "#BDEDCA";
      } else if (props.type == "warning") {
        return "#C1E2FE";
      } else if (props.type == "error") {
        return "#FFD5CF";
      }
    }};
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;

const ItemImg = styled.div``;
const ItemText = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #34373c;
  flex: 1;
`;
const ItemButton = styled.div`
  cursor: pointer;
`;

export default function ToastItem({ type, text, id }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const closeImgs = {
    success: <IconSpan className={"fi fi-rr-cross-small"} size={"16px"} />,
    warning: <IconSpan className={"fi fi-rr-cross-small"} size={"16px"} />,
    error: <IconSpan className={"fi fi-rr-cross-small"} size={"16px"} />,
  };
  const hintImg = {
    success: <IconSpan className={"fi fi-rr-check"} size={"16px"} />,
    warning: <IconSpan className={"fi fi-rr-exclamation"} size={"16px"} />,
    error: <IconSpan className={"fi   fi-rr-cross-small"} size={"16px"} />,
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(removeToast(id));
    }, 5000);
  }, []);

  return (
    <Wrapper type={type}>
      <ItemImg>{hintImg[type]}</ItemImg>
      <ItemText>{text}</ItemText>
      <ItemButton
        onClick={() => {
          dispatch(removeToast(id));
        }}
      >
        {closeImgs[type]}
      </ItemButton>
    </Wrapper>
  );
}
