import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import { Dropdown } from "semantic-ui-react";

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
  }
  width: 100%;
`;

const StyledDropdown = styled(Dropdown)`
  height: 38px;
  min-width: 0 !important;
  width: 100% !important;
  color: #3c4046 !important;
  font-size: 0.875rem !important;
  line-height: 1.5rem !important;
  padding: 0.375rem 2rem 0.375rem 1rem !important;
  border-color: #dddddd;
  box-shadow: none !important;
  :hover {
    border-color: #bfbfbf !important;
  }
  :focus {
    border-color: #bfbfbf !important;
  }
  &.active {
    border-color: #bfbfbf !important;
  }
  &.ui.selection.dropdown > div.menu.transition {
    &::-webkit-scrollbar {
      display: none;
    }
    border-color: #bfbfbf !important;
    > div.item {
      border-top: 0 !important;
      color: #34373c !important;
      font-size: 0.875rem !important;
      line-height: 1.5rem !important;
      padding: 0.4375rem 1rem !important;
      .selected,
      :hover {
        background: #f8f8f8 !important;
      }
    }
  }
  > i {
    height: 100% !important;
    display: flex;
    align-items: center;
  }
  img.avatar {
    width: 1.5rem !important;
    height: 1.5rem !important;
    margin-top: 0 !important;
    margin-right: 10px !important;
  }

  ${(props) =>
    props.error &&
    `
      border-color: #ec4730;
  `}
`;

const ErrorMsg = styled.div`
  margin-top: 4px;
  font-size: 13px;
  line-height: 16px;
  color: #ec4730;
`;

export default function MyDropdown({
  placeholder,
  options,
  value,
  onChange = (e, data) => {},
  error,
}) {
  const [errorValue, setErrorValue] = useState(error);

  useEffect(() => {
    setErrorValue(error);
  }, [error]);
  const handleChange = (e, data) => {
    onChange(e, data);
    setErrorValue(null);
  };

  return (
    <Wrapper>
      <StyledDropdown
        placeholder={placeholder}
        options={options}
        selection
        search
        noResultsMessage={"null"}
        onChange={handleChange}
      />
      {errorValue && <ErrorMsg>{errorValue}</ErrorMsg>}
    </Wrapper>
  );
}
