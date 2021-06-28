import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import Col2 from "@/component/topicpage/commentsCard/Col2";
import Divider from "@/component/utils/divider";
import CommentInfo from "@/component/topicpage/commentsCard/comment";
import DividerLine from "@/component/utils/DividerLine";
import { pageHref } from "@/lib/utils/pagePath";
import PageNav from "@/component/pageNav";
import HomePostItem from "@/component/home/homePosts/HomePostItem";
import { postApi } from "@/services/nextApi";

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
  padding: 12px 16px;
`;

const ItemWrapper = styled.div`
  width: 100%;
`;

const AvatarWrapper = styled.img``;

const PageNavWrapper = styled.div`
  padding: 12px 0 0 0;
  width: 100%;
`;
export default function CommentsCard({ postId, page }) {
  const router = useRouter();
  const [comments, setComments] = useState<any>();
  useEffect(() => {
    const callFunc = async () => {
      const res = await postApi("/api/comment/getByPost", {
        page,
        pageSize: 40,
        postId: postId,
      });
      if (res?.result) {
        setComments(res.result);
      }
    };
    callFunc();
  }, [postId, page]);
  //
  //
  return (
    <Wrapper>
      {(comments?.items || []).map((item) => (
        <ItemWrapper key={item?.uid}>
          <CommentInfo comment={item} />
          <Divider height={"5px"} />
          <DividerLine />
          <Divider height={"5px"} />
        </ItemWrapper>
      ))}
      <PageNavWrapper>
        <PageNav
          pageSize={comments?.pageSize}
          total={comments?.total}
          page={comments?.page}
          onclick={(v) => {
            router.push(`/t/${postId}?page=${v}`);
          }}
        />
      </PageNavWrapper>
    </Wrapper>
  );
}
