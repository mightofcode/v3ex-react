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

const Wrapper = styled.div``;

const FlexWrapper = styled.div``;

export default withLoginUserRedux(({ posts, tabs, tab, hotPosts }) => {
  const router = useRouter();
  return (
    <>
      <PageHead />
      <Layout>
        <Container>
          <IndexPage posts={posts} tabs={tabs} tab={tab} hotPosts={hotPosts} />
        </Container>
      </Layout>
    </>
  );
});

export const getServerSideProps = withLoginUser(async (context) => {
  let { tab, page } = context.query;
  page = page || 1;
  const postResult = await postApi(
    "api/post/list",
    { tab, page, pageSize: 40 },
    context.req.headers.cookie
  );
  //
  const tabResult = await postApi(
    "api/tab/getAll",
    {},
    context.req.headers.cookie
  );
  tab = tab || "technology";
  //
  const hotPosts = await postApi(
    "api/stat/hotPosts",
    {},
    context.req.headers.cookie
  );
  tab = tab || "technology";
  return {
    props: {
      posts: postResult?.result,
      tabs: tabResult?.result?.tabs,
      tab: tab,
      hotPosts: hotPosts?.result?.items,
    },
  };
});
