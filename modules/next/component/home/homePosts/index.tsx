import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import DividerLine from "@/component/utils/DividerLine";
import HomePostItem from "@/component/home/homePosts/HomePostItem";
import PageNav from "@/component/pageNav";
import { userSelector } from "@/store/userReducer";
import { postApi } from "@/services/nextApi";
import { createUnzip } from "zlib";
import { pageHref } from "@/lib/utils/pagePath";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  width: 100%;
`;
const Item = styled.div``;
const Title = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #34373c;
  padding: 12px 16px;
`;

const PageNavWrapper = styled.div`
  width: 100%;
  padding: 12px 16px;
`;
const DividerLineWrapper = styled.div`
  margin: 0 16px;
  width: 100%;
`;

const PostItemWrapper = styled.div`
  width: 100%;
`;

export default function HomePosts({ username }) {
  const router = useRouter();
  const [postPage, setPostPage] = useState(1);

  const [posts, setPosts] = useState<any>();

  useEffect(() => {
    const callFunc = async () => {
      const res = await postApi("/api/post/member", {
        page: postPage,
        pageSize: 20,
        username,
      });
      if (res?.result) {
        setPosts(res.result);
      }
    };
    callFunc();
  }, [postPage, username]);
  //
  const user = useSelector(userSelector);
  //
  return (
    <Wrapper>
      <Title>创建的主题</Title>
      <DividerLine />

      {(posts?.items || []).map((item) => (
        <PostItemWrapper key={item?.uid}>
          <HomePostItem post={item} />
          <DividerLineWrapper>
            <DividerLine />
          </DividerLineWrapper>
        </PostItemWrapper>
      ))}

      <PageNavWrapper>
        <PageNav
          pageSize={posts?.pageSize}
          total={posts?.total}
          page={posts?.page}
          onclick={(v) => {
            //router.push(pageHref(router, v));
            const func = async () => {
              await setPostPage(v);
            };
            func();
          }}
        />
      </PageNavWrapper>
    </Wrapper>
  );
}
