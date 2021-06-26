import httpProxy from "http-proxy";
import Cookies from "cookies";
import url from "url";
const API_URL = process.env.API_URL;
const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default (req, res) => {
  return new Promise<void>((resolve, reject) => {
    const method = req.method;
    const pathname = url.parse(req.url).pathname;

    const cookies = new Cookies(req, res);
    const authToken = cookies.get("auth-token");

    req.url = req.url.replace(/^\/api/, "");
    req.headers.cookie = "";
    if (authToken) {
      req.headers["Authorization"] = `Bearer ${authToken}`;
    }
    proxy.once("error", reject);
    proxy.web(
      req,
      res,
      {
        target: API_URL,
        autoRewrite: false,
        selfHandleResponse: false,
      },
      function (e) {}
    );
  });
};
