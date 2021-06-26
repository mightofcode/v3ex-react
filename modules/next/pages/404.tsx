import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import PageHead from "@/component/PageHead";
import Layout from "@/component/layout";
import Container from "@/component/container";
import * as React from "react";
import Card32 from "@/component/Card32";
import NotFound from "@/component/notFound";
import { withLoginUser, withLoginUserRedux } from "@/lib/user";
import PrivacyPolicy from "@/component/privacy-policy";

const Wrapper = styled.div``;

const FlexWrapper = styled.div``;

export default withLoginUserRedux(() => {
  const router = useRouter();

  return (
    <>
      <PageHead title="V3EX" />
      <Layout>
        <Container>
          <NotFound />
        </Container>
      </Layout>
    </>
  );
});
