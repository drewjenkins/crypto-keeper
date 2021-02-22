const key = "7234dcc7-912a-4548-8e76-38f5ceca9de5";

const requestOptions = {
  method: "GET",
  mode: "cors",
  cache: "no-cache",
  // qs: {
  //   start: "1",
  //   limit: "5000",
  //   convert: "USD",
  // },
  headers: {
    "X-CMC_PRO_API_KEY": "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c",
  },
  json: true,
  gzip: true,
};

export const list = async () =>
  fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD",
    // @ts-ignore
    requestOptions
  );
