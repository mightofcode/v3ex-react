import styled from "styled-components";
import * as React from "react";
import Header from "./header";
import Footer from "./footer/index";
import Toast from "./toast/index";
import Divider from "@/component/utils/divider";

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #e2e2e2;
`;

const FlexGrow = styled.div`
  position: relative;
  flex-grow: 1;
`;
const ToastWrapper = styled.div`
  position: absolute;
  top: 76px;
  right: 160px;
  min-width: 272px;
`;

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      <FlexGrow>{children}</FlexGrow>
      <ToastWrapper>
        <Toast />
      </ToastWrapper>

      <Footer />
    </Wrapper>
  );
}
