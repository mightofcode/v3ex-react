import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Divider from "@/component/utils/divider";

import DividerSoft from "@/component/utils/DividerSoft";
import IconSpan from "@/component/utils/IconSpan";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
    margin-left: 8px;
  }
  width: 100%;
`;

const Light = styled.div`
  font-size: 13px;
  line-height: 14px;
  color: #c8cbd0;
`;

const PageBtn = styled.div`
  background: #f8f8f8;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;

  padding: 4px 9px;

  font-weight: normal;
  font-size: 13px;
  line-height: 16px;

  background: #ffffff;
  cursor: pointer;
  :hover {
    background: #f8f8f8;
  }
`;

const PageBtnActive = styled.div`
  background: #f8f8f8;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;

  padding: 4px 9px;

  font-weight: bold;
  font-size: 13px;
  line-height: 16px;

  background: #f8f8f8;
  cursor: pointer;
  :hover {
  }
`;
const PageArrowWrapper = styled.div`
  background: #f8f8f8;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;

  padding: 4px 4px;
  line-height: 0;

  background: #ffffff;
  cursor: pointer;
  :hover {
    background: #f8f8f8;
  }
`;
const PageArrowWrapperDisable = styled.div`
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;

  padding: 4px 4px;
  line-height: 0;

  background: #f8f8f8;
  :hover {
  }
`;

export default function PageNav({ page, total, pageSize, onclick }) {
  const router = useRouter();
  const pageCount = Math.ceil(total / pageSize);
  let start = page - 4;
  let end = page + 5;
  let leftGap = start > 1;
  let rightGap = end < pageCount;

  start = Math.max(1, start);
  end = Math.min(pageCount, end);

  const leftPage = page - 1;
  const rightPage = page + 1;

  let pageArr = [];
  for (var i = start; i <= end; i++) {
    pageArr.push(i);
  }

  return (
    <Wrapper>
      {leftGap && (
        <PageBtn
          onClick={() => {
            onclick(1);
          }}
        >
          1
        </PageBtn>
      )}
      {leftGap && <Light>...</Light>}
      {(pageArr || []).map((item) =>
        item == page ? (
          <PageBtnActive key={item}>{item}</PageBtnActive>
        ) : (
          <PageBtn
            key={item}
            onClick={() => {
              onclick(item);
            }}
          >
            {item}
          </PageBtn>
        )
      )}
      {rightGap && <Light>...</Light>}
      {rightGap && (
        <PageBtn
          onClick={() => {
            onclick(pageCount);
          }}
        >
          {pageCount}
        </PageBtn>
      )}

      <DividerSoft width={"100%"} />
      {leftPage < 1 ? (
        <PageArrowWrapperDisable>
          <IconSpan className={"fi fi-rr-angle-small-left"} />
        </PageArrowWrapperDisable>
      ) : (
        <PageArrowWrapper
          onClick={() => {
            onclick(leftPage);
          }}
        >
          <IconSpan className={"fi fi-rr-angle-small-left"} />
        </PageArrowWrapper>
      )}
      {rightPage > pageCount ? (
        <PageArrowWrapperDisable>
          <IconSpan className={"fi fi-rr-angle-small-right"} />
        </PageArrowWrapperDisable>
      ) : (
        <PageArrowWrapper
          onClick={() => {
            onclick(rightPage);
          }}
        >
          <IconSpan className={"fi fi-rr-angle-small-right"} />
        </PageArrowWrapper>
      )}
    </Wrapper>
  );
}
