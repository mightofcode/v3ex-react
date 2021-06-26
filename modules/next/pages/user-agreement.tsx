import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import PageHead from "@/component/PageHead";
import Layout from "@/component/layout";
import Container from "@/component/container";
import * as React from "react";
import PrivacyPolicy from "@/component/privacy-policy";
import { withLoginUser, withLoginUserRedux } from "@/lib/user";
import UserAgreement from "@/component/user-agreement";

const Wrapper = styled.div``;

const FlexWrapper = styled.div``;

export default withLoginUserRedux(() => {
  const router = useRouter();

  return (
    <>
      <PageHead />
      <Layout>
        <Container>
          <UserAgreement />
        </Container>
      </Layout>
    </>
  );
});

export const getServerSideProps = withLoginUser(async (context) => {
  return {};
});
