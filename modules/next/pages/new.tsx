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
import IndexPage from "@/component/indexPage";
import { postApi } from "@/services/nextApi";
import NewPost from "@/component/newPost";

const Wrapper = styled.div``;

const FlexWrapper = styled.div``;

export default withLoginUserRedux(({ tabs }) => {
  const router = useRouter();

  return (
    <>
      <PageHead title={process.env.NEXT_PUBLIC_SITE_NAME} />
      <Layout>
        <Container>
          <NewPost tabs={tabs} />
        </Container>
      </Layout>
    </>
  );
});

export const getServerSideProps = withLoginUser(async (context) => {
  //
  const tabResult = await postApi(
    "api/tab/getAll",
    {},
    context.req.headers.cookie
  );
  //
  const hotPosts = await postApi(
    "api/post/hot",
    {},
    context.req.headers.cookie
  );
  return {
    props: {
      tabs: tabResult?.result?.tabs || [],
    },
  };
});
