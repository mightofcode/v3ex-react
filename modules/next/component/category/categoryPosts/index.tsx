import { useState, useEffect, default as React } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import NodeL1 from "@/component/indexPage/homePagePosts/NodeL1";
import Nodel2 from "@/component/indexPage/homePagePosts/NodeL2";
import NoPost from "@/component/indexPage/homePagePosts/NoPost";
import PageNav from "@/component/pageNav";
import PostList from "@/component/indexPage/homePagePosts/postList";
import Divider from "@/component/utils/divider";
import DividerLine from "@/component/utils/DividerLine";
import { pageHref } from "@/lib/utils/pagePath";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }

  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  width: 100%;
  margin-top: 16px;
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const PostItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0 16px;
`;

const PageNavWrapper = styled.div`
  padding: 12px 16px;
  width: 100%;
`;
export default function CategoryPosts({ posts, category }) {
  const router = useRouter();

  return (
    <Wrapper>
      <DividerLine />
      {!(posts?.items?.length !== 0) && <NoPost />}
      {posts?.items?.length !== 0 && (
        <PostWrapper>
          {(posts?.items || []).map((item) => (
            <PostItemWrapper key={item?.uid}>
              <PostList post={item} />
              <DividerLine />
            </PostItemWrapper>
          ))}
        </PostWrapper>
      )}
      <PageNavWrapper>
        <PageNav
          pageSize={posts.pageSize}
          total={posts.total}
          page={posts.page}
          onclick={(v) => {
            router.push(pageHref(router, v));
          }}
        />
      </PageNavWrapper>
    </Wrapper>
  );
}
