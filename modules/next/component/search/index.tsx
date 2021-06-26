import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
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

  position: relative;
`;

const ItemWrapper = styled.div`
  line-height: 0;
  position: absolute;
  left: 21px;

  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const InputText = styled.input`
  font-size: 12px;
  line-height: 20px;
  width: 100%;
  background-color: transparent;
  border: none;

  background: #f8f8f8;
  border: 1px solid #f8f8f8;
  border-radius: 2rem;
  outline: none;

  padding: 5px 10px;
  padding-left: 40px;
  &:focus {
    border: 1px solid #aaaaaa;
    background: #ffffff;
    color: #34373c;
    & + img {
      filter: invert(42%) sepia(9%) saturate(304%) hue-rotate(177deg)
        brightness(97%) contrast(87%);
    }
  }
`;

export default function Search({}) {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    keyword &&
      window.open(
        `https://www.google.com/search?q=site:${process.env.NEXT_PUBLIC_SITE}/post%20${keyword}`,
        "_blank"
      );
  };

  return (
    <Wrapper>
      <Divider width={"5px"} />
      <ItemWrapper onClick={handleSearch}>
        <IconSpan className={"fi fi-rr-search"} />
      </ItemWrapper>
      <Divider width={"5px"} />
      <InputText
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onKeyDown={(e) => {
          if (e.code !== "Enter") {
            return;
          }
          handleSearch();
        }}
      />
    </Wrapper>
  );
}
