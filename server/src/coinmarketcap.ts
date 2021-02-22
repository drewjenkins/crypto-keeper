app.get("/list", function (req, res) {
  const requestOptions = {
    method: "GET",
    uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    qs: {
      start: "1",
      limit: "100",
      convert: "USD",
    },
    headers: {
      "X-CMC_PRO_API_KEY": process.env.CRYPTO_API_KEY,
    },
    json: true,
    gzip: true,
  };

  fetch(requestOptions)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});
