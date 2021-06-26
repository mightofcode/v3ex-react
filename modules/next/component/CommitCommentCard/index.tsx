import { useState, useEffect, default as React } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { BoldText } from "@/component/utils/Text";
import MarkdownEditor from "@/component/MarkdownEditor";
import Divider from "@/component/utils/divider";
import SimpleButton from "@/component/button/simpleButton";
import { postApi } from "@/services/nextApi";
import InputTextArea from "@/component/input/InputTextArea";
import Input from "@/component/input";
import BlackFormButton from "@/component/button/BlackFormButton";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
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
  border-radius: 8px;

  padding: 12px 16px;
  width: 100%;
`;
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;
const ButtonWrapper = styled.div`
  align-self: flex-end;
`;

const MarkdownEditorWrapper = styled.div`
  width: 100%;
`;

export default function CommitCommentCard({ post }) {
  const router = useRouter();

  const [formData, setFromData] = useState({
    comment: "",
    postId: post.uid,
  });

  const [errors, setErrors] = useState<any>();

  const setContent = (e) => {
    setFromData({ ...formData, comment: e });
    setErrors(null);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await postApi("/api/comment/create", formData);
    if (res.result) {
      setErrors(null);
      await router.reload();
    } else {
      setErrors(res.error);
    }
  };
  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });

    setErrors(null);
  };

  return (
    <Wrapper>
      <BoldText>回复主题</BoldText>
      <Divider height={"8px"} />
      <FormWrapper onSubmit={onSubmit}>
        <MarkdownEditorWrapper>
          <InputTextArea
            placeholder={""}
            type={"text"}
            name={"comment"}
            onChange={handleChange}
            value={formData?.comment}
            error={errors?.data?.comment}
            rows={3}
          />
        </MarkdownEditorWrapper>
        <Divider height={"8px"} />
        <ButtonWrapper>
          <BlackFormButton text={"发布回复"} />
        </ButtonWrapper>
      </FormWrapper>
    </Wrapper>
  );
}
