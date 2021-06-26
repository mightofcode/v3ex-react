import { useState, useEffect, default as React } from "react";
import { useRouter } from "next/router";
import PageHead from "@/component/PageHead";
import Layout from "@/component/layout";
import Container from "@/component/container";
import SignIn from "@/component/signIn";
import { withLoginUser, withLoginUserRedux } from "@/lib/user";
import NotFound from "@/component/notFound";

export default withLoginUserRedux(() => {
  const router = useRouter();

  return (
    <>
      <PageHead />
      <Layout>
        <Container>
          <SignIn />
        </Container>
      </Layout>
    </>
  );
});

export const getServerSideProps = withLoginUser(async (context) => {
  return {};
});
