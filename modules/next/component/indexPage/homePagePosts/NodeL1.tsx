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
    margin-left: 14px;
  }
  padding: 12px 16px;
  width: 100%;
`;

const ItemChoosen = styled.a`
  background: #4b5057;
  border-radius: 4px;

  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
  padding: 5px 8px;

  cursor: pointer;

  :hover {
    text-decoration: underline;
    color: #ffffff;
  }
`;
const ItemUnChoosen = styled.a`
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #34373c;
  cursor: pointer;
  padding: 5px 8px;
  :hover {
    text-decoration: underline;
  }
`;

export default function NodeL1({ tabs, tab }) {
  const router = useRouter();
  useEffect(() => {}, []);
  return (
    <Wrapper>
      {(tabs || []).map((item) =>
        item.uid === tab ? (
          <ItemChoosen key={item?.name}>{item.name}</ItemChoosen>
        ) : (
          <ItemUnChoosen key={item?.name} href={`/?tab=${item.uid}`}>
            {item.name}
          </ItemUnChoosen>
        )
      )}
    </Wrapper>
  );
}
