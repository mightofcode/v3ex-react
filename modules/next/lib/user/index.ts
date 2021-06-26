import Cookies from "cookies";
import { postApi } from "@/services/nextApi";
import { useDispatch } from "react-redux";
import { useEffect, useLayoutEffect } from "react";
import { setUser } from "@/store/userReducer";

export function withLoginUser(getServerSideProps) {
  return async function (context) {
    const propsPromise = getServerSideProps(context);
    const cookies = new Cookies(context.req, context.res);
    const profilePromise = postApi(
      "api/user/profile",
      {},
      context.req.headers.cookie
    );
    const [props, { result: user }] = await Promise.all([
      propsPromise,
      profilePromise,
    ]);

    return {
      ...props,
      props: {
        ...props.props,
        loginUser: user ?? null,
      },
    };
  };
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function withLoginUserRedux(fnComponent) {
  return ({ loginUser, ...props }) => {
    const dispatch = useDispatch();
    // useIsomorphicLayoutEffect(() => {
    //   dispatch(setUser(loginUser));
    // }, [loginUser]);

    useIsomorphicLayoutEffect(() => {
      dispatch(setUser(loginUser));
    }, [loginUser]);
    return fnComponent(props);
  };
}
