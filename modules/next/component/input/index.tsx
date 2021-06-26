import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import * as React from "react";
import value from "*.md";

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

const Item = styled.div`
  flex: 1 1 100px;
`;

const StyledInput = styled.input<{ error }>`
  outline: none;
  background: #ffffff;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;
  min-height: 38px;
  padding: 9px 12px;
  :hover {
    border-color: #aaaaaa;
  }
  :focus {
    border-color: #aaaaaa;
  }
  :read-only,
  :disabled {
    border-color: #dddddd;
    background: #f8f8f8;
  }
  :read-only {
    ::placeholder {
      color: #34373c;
    }
  }
  ::placeholder {
    color: #dddddd;
  }
  :disabled {
    cursor: not-allowed;
    color: #dddddd;
  }
  font-size: 14px;
  line-height: 22px;
  ${(props) =>
    props.error &&
    `
      border-color: #ec4730;
  `}
  width:100%;
`;

const ErrorMsg = styled.div`
  margin-top: 4px;
  font-size: 13px;
  line-height: 16px;
  color: #ec4730;
`;

export default function Input({
  type = "text",
  disabled = false,
  error = null,
  placeholder = "placeholder",
  name,
  onChange = (e) => {},
  value = "",
}) {
  const [errorValue, setErrorValue] = useState(error);
  const router = useRouter();
  useEffect(() => {
    setErrorValue(error);
  }, [error]);
  const handleChange = (e) => {
    onChange(e);
    setErrorValue(null);
  };
  return (
    <Wrapper>
      <StyledInput
        name={name}
        onChange={handleChange}
        type={type}
        disabled={disabled}
        error={errorValue}
        placeholder={placeholder}
        value={value || ""}
      />
      {errorValue && <ErrorMsg>{errorValue}</ErrorMsg>}
    </Wrapper>
  );
}
