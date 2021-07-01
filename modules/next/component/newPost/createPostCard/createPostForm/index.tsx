import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import Input from "@/component/input";
import Divider from "@/component/utils/divider";
import MarkdownEditor from "@/component/MarkdownEditor";
import MyDropdown from "@/component/utils/MyDropdown";
import PublishButton from "@/component/newPost/createPostCard/createPostForm/PublishButton";
import { postApi } from "@/services/nextApi";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  padding: 12px 16px;
  width: 100%;
`;

const Item = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #34373c;
`;

const MarkdownEditorWrapper = styled.div`
  width: 100%;
`;
const DropdownWrapper = styled.div`
  width: 256px;
`;
const ButtonWrapper = styled.div`
  width: 100px;
  align-self: flex-end;
`;

export default function CreatePostForm({ tabs }) {
  const router = useRouter();

  const [formData, setFromData] = useState({
    title: "",
    content: "",
    category: "",
  });
  const [errors, setErrors] = useState<any>();
  const [tabAndCat, setTabAndCat] = useState("");
  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });

    setErrors(null);
  };
  const setContent = (e) => {
    setFromData({ ...formData, content: e });
  };
  const setDropdown = (e) => {
    setTabAndCat(e);
    const category = e.split(" ")[1];

    setFromData({ ...formData, category: category });
  };

  const options = [
    {
      key: "key",
      text: "text",
      value: "value",
    },
  ];
  let items = [];
  tabs.forEach((t) => {
    t.categoryDocuments.forEach((c) => {
      items.push({
        key: t.uid + " " + c.uid,
        text: t.name + " / " + c.name,
        value: t.uid + " " + c.uid,
      });
    });
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await postApi("/api/post/create", formData);
    if (res.result) {
      setErrors(null);
      await router.push(`/t/${res?.result?.postId}`);
    } else {
      console.log("error", res.error);
      setErrors(res.error);
    }
  };
  return (
    <Wrapper onSubmit={onSubmit}>
      <Item>标题</Item>
      <Divider height={"8px"} />
      <Input
        placeholder={"标题"}
        type={"text"}
        name={"title"}
        onChange={handleChange}
        value={formData?.title}
        error={errors?.data?.title}
      />
      <Divider height={"16px"} />
      <Item>正文</Item>
      <Divider height={"8px"} />
      <MarkdownEditorWrapper>
        <MarkdownEditor
          visible={true}
          content={formData.content}
          setContent={setContent}
          height={200}
        />
      </MarkdownEditorWrapper>
      <Divider height={"16px"} />
      <Item>发布节点</Item>
      <Divider height={"8px"} />
      <DropdownWrapper>
        <MyDropdown
          placeholder={"选择节点"}
          options={items}
          value={tabAndCat}
          onChange={(_, data) => {
            console.log("data", data);
            setDropdown(data.value);
          }}
          error={errors?.data?.category}
        />
      </DropdownWrapper>
      <Divider height={"16px"} />
      <ButtonWrapper>
        <PublishButton text={"发布主题"} onClick={null} />
      </ButtonWrapper>
    </Wrapper>
  );
}
