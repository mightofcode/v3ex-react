import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import * as React from "react";
import Crumb from "@/component/breadcrumb/crumb";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  width: 100%;
`;

export default function Breadcrumb({
  items,
}: {
  items: { text: string; href: string }[];
}) {
  const router = useRouter();

  return (
    <Wrapper>
      {items.map((item, index) => {
        return (
          <Crumb
            key={item.text}
            text={item.text}
            href={item.href}
            isLast={index === items.length - 1}
          />
        );
      })}
    </Wrapper>
  );
}
