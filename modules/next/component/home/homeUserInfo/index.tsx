import { useState, useEffect, default as React } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { postApi } from "@/services/nextApi";
import Identicon from "react-identicons";
import Divider from "@/component/utils/divider";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
  padding: 12px 16px;
  width: 100%;

  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
`;

const Item = styled.div`
  flex: 1 1 100px;
  font-weight: bold;
  font-size: 24px;
  line-height: 150%;
`;

export default function HomeUserInfo({ username }) {
  const router = useRouter();

  const [member, setMember] = useState<any>();

  useEffect(() => {
    const callFunc = async () => {
      const res = await postApi("/api/member/profile", {
        username,
      });
      if (res?.result) {
        setMember(res.result);
      }
    };
    callFunc();
  }, [username]);

  return (
    <Wrapper>
      {member && <Identicon string={member?.username} size={"72"} />}
      <Divider width={"10px"} />
      <Item>{member?.username}</Item>
    </Wrapper>
  );
}
