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
import { postApi } from "@/services/nextApi";
import TopicPage from "@/component/topicpage";
import AppendPage from "@/component/appendPage";

const Wrapper = styled.div``;

const FlexWrapper = styled.div``;

export default withLoginUserRedux(({ post, tabAndCat }) => {
  const router = useRouter();

  return (
    <>
      <PageHead title={process.env.NEXT_PUBLIC_SITE_NAME} />
      <Layout>
        <Container>
          <AppendPage post={post} tabAndCat={tabAndCat} />
        </Container>
      </Layout>
    </>
  );
});

export const getServerSideProps = withLoginUser(async (context) => {
  let { id } = context.query;
  const post = await postApi(
    "api/post/get",
    { postId: id },
    context.req.headers.cookie
  );
  //
  const tabAndCat = await postApi(
    "api/category/get",
    { category: post?.result?.post?.category?.uid },
    context.req.headers.cookie
  );
  if (!post.result?.post) {
    return {
      //404
      notFound: true,
    };
  }
  //
  return {
    props: {
      post: post.result?.post || null,
      tabAndCat: tabAndCat?.result || null,
    },
  };
});
