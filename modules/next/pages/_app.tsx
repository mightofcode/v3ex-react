import { AppProps } from "next/app";
import { Provider } from "react-redux";
import NProgress from "nprogress";
import Router from "next/router";

import { store } from "@/store";
//import Auth from "@/components/auth";

import "nprogress/nprogress.css";
import "semantic-ui-css/semantic.min.css";
import "@/styles/globals.css";
import * as React from "react";
import Auth from "@/component/Auth";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <script>0</script>
      <Auth />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
