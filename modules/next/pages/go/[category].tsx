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
import Category from "@/component/category";

const Wrapper = styled.div``;

const FlexWrapper = styled.div``;

export default withLoginUserRedux(({ posts, category, tabs }) => {
  const router = useRouter();

  return (
    <>
      <PageHead />
      <Layout>
        <Container>
          <Category posts={posts} category={category} tabs={tabs} />
        </Container>
      </Layout>
    </>
  );
});

export const getServerSideProps = withLoginUser(async (context) => {
  let { category, page } = context.query;
  page = page || 1;
  const postResult = await postApi(
    "api/post/list",
    { category, page, pageSize: 40 },
    context.req.headers.cookie
  );

  const tabResult = await postApi(
    "api/tab/getAll",
    {},
    context.req.headers.cookie
  );
  return {
    props: {
      posts: postResult?.result,
      category: category,
      tabs: tabResult?.result.tabs,
    },
  };
});
