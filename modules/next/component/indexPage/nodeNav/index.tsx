import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import DividerLine from "@/component/utils/DividerLine";
import NodeNavItem from "@/component/indexPage/nodeNav/NodeNavItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }

  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 3px;

  width: 100%;
`;

const Head = styled.div`
  padding: 12px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #34373c;
`;
const ItemWrapper = styled.div`
  width: 100%;
`;

export default function NodeNav({ tabs }) {
  const router = useRouter();
  useEffect(() => {});

  return (
    <Wrapper>
      <Head>节点导航</Head>
      {(tabs || []).map((item) => (
        <ItemWrapper key={item?.uid}>
          <DividerLine />
          <NodeNavItem tab={item} />
        </ItemWrapper>
      ))}
    </Wrapper>
  );
}
