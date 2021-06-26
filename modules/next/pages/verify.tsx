import { useState, useEffect, default as React } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import PageHead from "@/component/PageHead";
import Layout from "@/component/layout";
import Container from "@/component/container";
import NotFound from "@/component/notFound";
import Signup from "@/component/signup";
import Verify from "@/component/verify";
import { withLoginUser, withLoginUserRedux } from "@/lib/user";
import { postApi } from "@/services/nextApi";
import { userSelector } from "@/store/userReducer";
import { useSelector, useDispatch } from "react-redux";

export default withLoginUserRedux(() => {
  const router = useRouter();
  const user = useSelector(userSelector);

  useEffect(() => {}, [user]);
  return (
    <>
      <PageHead />
      <Layout>
        <Container>
          <Verify />
        </Container>
      </Layout>
    </>
  );
});

export const getServerSideProps = withLoginUser(async (context) => {
  //const res = await postApi("/api/user/profile", {}, context.req.headers.cookie);
  //const { page } = context.query;
  //
  // if (res.result) {
  // } else {
  // }
  return {};
});
