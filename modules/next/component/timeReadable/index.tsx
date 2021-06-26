import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as React from "react";
import HomePagePosts from "@/component/indexPage/homePagePosts";
import NodeNav from "@/component/indexPage/nodeNav";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 865px) {
  }
  > :not(:first-child) {
  }
`;

const Item = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: #c8cbd0;
`;

export function normalizeTimeDuration(time, maxSection = 2) {
  const duration = dayjs.duration(time);
  const result = [];
  const sections = [
    duration.years() && [duration.years(), "年"],
    duration.months() && [duration.months(), "月"],
    duration.days() && [duration.days(), "天"],
    duration.hours() && [duration.hours(), "小时"],
    duration.minutes() && [duration.minutes(), "分钟"],
    duration.seconds() && [duration.seconds(), "秒"],
  ];
  for (let i = 0, j = 0; i < sections.length && j < maxSection; i++) {
    const sec = sections[i];
    if (!sec && !j) {
      continue;
    }
    //
    if (sec) {
      result.push(sec);
    }
    j++;
  }

  if (result.length === 0) {
    result.push([duration.seconds(), "秒"]);
  }
  return result;
}

export default function TimeReadable({ time }) {
  const router = useRouter();

  const diffTime = dayjs().diff(dayjs(time));
  //
  const timeDuration = normalizeTimeDuration(diffTime || 0, 1);

  let text = "";
  timeDuration.forEach((v) => {
    //
    text = text + v[0] + v[1];
  });
  text += "前";
  useEffect(() => {}, []);
  return (
    <Wrapper>
      <Item>{text}</Item>
    </Wrapper>
  );
}
