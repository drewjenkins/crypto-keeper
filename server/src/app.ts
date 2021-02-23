import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fetch from "request-promise";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var port = 3001;

app.get("/ticker", function (req, res) {
  const date = new Date(new Date());
  date.setDate(date.getDate() - 1);

  const requestOptions = {
    method: "GET",
    uri: "https://api.nomics.com/v1/currencies/ticker",
    qs: {
      key: process.env.CRYPTO_API_KEY,
      status: "active",
      "per-page": 100,
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

app.listen(port);
console.log(`
  Client running at http://localhost:3000
  Server running at http://localhost:${port}
`);

// "X-CMC_PRO_API_KEY": "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c",
