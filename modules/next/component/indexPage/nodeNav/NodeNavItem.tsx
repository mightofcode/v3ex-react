import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  width: 100%;
  height: 46px;
  padding: 12px 16px;
`;

const Head = styled.div`
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */
  /* text-accessory */
  color: #c8cbd0;
  margin-right: 16px;
`;
const Item = styled.a`
  font-size: 14px;
  line-height: 22px;
  color: #696d73;
  margin-left: 16px;

  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export default function NodeNavItem({ tab }) {
  const router = useRouter();

  return (
    <Wrapper>
      <Head>{tab.name}</Head>
      {(tab?.categoryDocuments || []).map((item) => (
        <Item href={`/go/${item.uid}`} key={item.uid}>
          {item.name}
        </Item>
      ))}
    </Wrapper>
  );
}
