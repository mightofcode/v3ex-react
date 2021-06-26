import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchUserProfile } from "@/store/userReducer";

const Wrapper = styled.div``;

export default function Auth({}) {
  const router = useRouter();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, []);
  return <Wrapper></Wrapper>;
}
