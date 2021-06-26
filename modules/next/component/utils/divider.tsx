import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Wrapper = styled.div<{ height; width }>`
  ${(props) =>
    props.height &&
    `
      height: ${props.height};
    `}
  ${(props) =>
    props.width &&
    `
      width: ${props.width};
    `}
    flex-shrink:0;
`;

export default function Divider({ height = null, width = null }) {
  const router = useRouter();

  return <Wrapper height={height} width={width} />;
}
