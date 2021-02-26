"use es6";

import React from "react";
import { formatCurrency, formatPercentage } from "../utils/formatting";
import { numberField, currencyField, percentageField } from "../utils/fields";
import tickerStore from "../store/ticker";
import { Crypto } from "../../types";
import CoinCell from "./CoinCell";
import BaseChart from "./BaseChart";

const columns = [
  { field: "tradeable", headerName: "Tradeable", width: 100, hide: true },
  numberField({ field: "rank", headerName: "Rank", width: 120, hide: true }),
  {
    field: "coin",
    headerName: "Coin",
    width: 250,
    renderCell: (params) => (
      <CoinCell coin={params.value} rank={params.row.rank} />
    ),
  },
  currencyField({
    field: "dailyHigh",
    headerName: "Daily High",
    hide: true,
  }),
  currencyField({
    field: "marketCap",
    headerName: "Market Cap",
    hide: true,
  }),
  currencyField({
    field: "price",
    headerName: "Price",
  }),
  percentageField({
    field: "dayChange",
    headerName: "24h Change",
  }),
  percentageField({
    field: "weekChange",
    headerName: "7d Change",
  }),
  percentageField({
    field: "monthChange",
    headerName: "30d Change",
  }),
  percentageField({
    field: "yearChange",
    headerName: "365d Change",
  }),
  percentageField({
    field: "yearToDateChange",
    headerName: "Year To Date",
  }),
];

const mapData = (data: Crypto) => ({
  ...data,
  dailyHigh: formatCurrency(data.dailyHigh),
  marketCap: formatCurrency(data.marketCap),
  price: formatCurrency(data.price),
  dayChange: formatPercentage(data["1d"].priceChangePercent),
  weekChange: formatPercentage(data["7d"].priceChangePercent),
  monthChange: formatPercentage(data["30d"].priceChangePercent),
  yearChange: formatPercentage(data["365d"].priceChangePercent),
  yearToDateChange: formatPercentage(data["ytd"].priceChangePercent),
  tradeable: data.crypto.tradeable ? "Yes" : "No",
});

type Props = {};

const MarketTable = () => {
  const ticker = tickerStore.useState((s) => s.tickerData);
  const data = ticker.map(mapData);

  return <BaseChart rows={data} columns={columns} id="MarketTable" />;
};

export default MarketTable;
