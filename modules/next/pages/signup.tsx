import { useState, useEffect, default as React } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import PageHead from "@/component/PageHead";
import Layout from "@/component/layout";
import Container from "@/component/container";
import NotFound from "@/component/notFound";
import Signup from "@/component/signup";
import { withLoginUser, withLoginUserRedux } from "@/lib/user";
import SignIn from "@/component/signIn";

export default withLoginUserRedux(() => {
  const router = useRouter();

  return (
    <>
      <PageHead title={process.env.NEXT_PUBLIC_SITE_NAME} />
      <Layout>
        <Container>
          <Signup />
        </Container>
      </Layout>
    </>
  );
});

export const getServerSideProps = withLoginUser(async (context) => {
  return {};
});
