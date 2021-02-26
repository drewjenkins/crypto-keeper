import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fetch from "request-promise";
import WebSocket from "ws";
import deepEqual from "deep-equal";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var port = 3001;

const updateTicker = () => {
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

  return fetch(requestOptions)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return { error: err.message };
    });
};

app.get("/ticker", async (req, res) => {
  const response = await updateTicker();
  res.json(response);
});

const server = app.listen(port);
console.log(`
  Client running at http://localhost:3000
  Server running at http://localhost:${port}
`);

let lastTickerData;
const wss = new WebSocket.Server({ server });
wss.on("connection", async (ws) => {
  const id = setInterval(async () => {
    const data = await updateTicker();
    if (!deepEqual(lastTickerData, data)) {
      lastTickerData = data;
      ws.send(JSON.stringify({ id: "updateTicker", data }));
    }
  }, 10000);

  if (!lastTickerData) {
    const data = await updateTicker();
    lastTickerData = data;
    ws.send(JSON.stringify({ id: "updateTicker", data }));
  } else {
    ws.send(JSON.stringify({ id: "updateTicker", data: lastTickerData }));
  }

  ws.on("close", function () {
    console.log("stopping client interval");
    clearInterval(id);
  });
});
