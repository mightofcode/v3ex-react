import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import DividerLine from "@/component/utils/DividerLine";
import PageNav from "@/component/pageNav";
import HomeCommentItem from "@/component/home/homeComments/HomeCommentItem";
import { postApi } from "@/services/nextApi";
import { userSelector } from "@/store/userReducer";
import HomePostItem from "@/component/home/homePosts/HomePostItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  width: 100%;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #34373c;
  padding: 12px 16px;
`;
const ItemWrapper = styled.div`
  width: 100%;
`;
const DividerLineWrapper = styled.div`
  margin: 0 16px;
  width: 100%;
`;
const PageNavWrapper = styled.div`
  padding: 12px 16px;
  width: 100%;
`;
export default function HomeComments({ username }) {
  const router = useRouter();
  const [commentPage, setCommentPage] = useState(1);
  const [comments, setComments] = useState<any>();

  useEffect(() => {
    const callFunc = async () => {
      //
      const res = await postApi("/api/comment/getByUser", {
        page: commentPage,
        pageSize: 20,
        username,
      });
      //
      if (res?.result) {
        setComments(res.result);
      }
      //
    };
    callFunc();
  }, [commentPage, username]);

  return (
    <Wrapper>
      <Title>最近的回复</Title>
      <DividerLine />

      {(comments?.items || []).map((item) => (
        <ItemWrapper key={item?.uid}>
          <HomeCommentItem comment={item} />
          <DividerLineWrapper>
            <DividerLine />
          </DividerLineWrapper>
        </ItemWrapper>
      ))}

      <PageNavWrapper>
        <PageNav
          pageSize={comments?.pageSize}
          total={comments?.total}
          page={comments?.page}
          onclick={(v) => {
            const func = async () => {
              await setCommentPage(v);
            };
            func();
          }}
        />
      </PageNavWrapper>
    </Wrapper>
  );
}
