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
import HomePage from "@/component/home";
import { useSelector } from "react-redux";
import { userSelector } from "@/store/userReducer";

const Wrapper = styled.div``;

const FlexWrapper = styled.div``;

export default withLoginUserRedux(({}) => {
  const router = useRouter();
  const user = useSelector(userSelector);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(user?.username);
  }, [user]);

  return (
    <>
      <PageHead />
      <Layout>
        <Container>
          <HomePage username={username} />
        </Container>
      </Layout>
    </>
  );
});

export const getServerSideProps = withLoginUser(async (context) => {
  return {
    props: {},
  };
});
