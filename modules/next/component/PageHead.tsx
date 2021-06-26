import Head from "next/head";

export default function PageHead({ title = "", captcha = false }) {
  return (
    <Head>
      <title>{title || process.env.NEXT_PUBLIC_SITE_NAME}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name={process.env.NEXT_PUBLIC_SITE_NAME} content="技术论坛" />
      {captcha && (
        <script src="https://www.recaptcha.net/recaptcha/api.js?hl=zh"></script>
      )}
      <link href="/css/uicons-regular-rounded.css" rel="stylesheet" />
    </Head>
  );
}
