export const encodeURIQuery = (q) =>
  Object.keys(q)
    .map((k) => `${k}=${encodeURIComponent(q[k])}`)
    .join("&");

export const pageHref = (router, page) => {
  const url = `${router.pathname}?${encodeURIQuery({ ...router.query, page })}`;

  return url;
};
