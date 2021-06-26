// @ts-nocheck
const paramsKeyConvert = (str = "") =>
  str.replace(/[A-Z]/g, ([s]) => `_${s.toLowerCase()}`);

export const getApi = async (
  path,
  params = {},
  options?
): Promise<{ result?: any; error?: any }> => {
  const endpoint = `${process.env.NEXT_PUBLIC_API_END_POINT}`;

  const url = new URL(path, endpoint);
  for (const key of Object.keys(params)) {
    url.searchParams.set(paramsKeyConvert(key), params[key]);
  }

  return new Promise((resolve, reject) =>
    fetch(url, options)
      .then((resp) =>
        resp.status !== 200
          ? resp.json().then((data) =>
              resolve({
                error: {
                  status: resp.status,
                  message: data.message,
                  data: data.data,
                },
              })
            )
          : resp.json().then((result) => resolve({ result }))
      )
      .catch((e) =>
        resolve({
          error: {
            status: 500,
            message: e.message,
          },
        })
      )
  );
};
export const postApi = async (path, body = null, cookie = "") => {
  const result = await getApi(
    path,
    {},
    {
      method: "POST",
      credentials: "same-origin",
      body: body ? JSON.stringify(body) : null,
      headers: { "Content-Type": "application/json", Cookie: cookie },
    }
  );
  return result;
};
