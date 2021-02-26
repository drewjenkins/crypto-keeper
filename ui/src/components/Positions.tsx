"use es6";

import React from "react";
import { formatCurrency, formatPercentage } from "../utils/formatting";
import { numberField, currencyField, percentageField } from "../utils/fields";
import positionsStore from "../store/positions";
import { Position } from "../../types";
import CoinCell from "./CoinCell";
import BaseChart from "./BaseChart";

const columns = [
  {
    field: "coin",
    headerName: "Coin",
    width: 250,
    renderCell: (params) => <CoinCell coin={params.value} />,
  },
  numberField({ field: "quantity", headerName: "Quantity", hide: true }),
  currencyField({
    field: "price",
    headerName: "Price",
  }),
  percentageField({
    field: "dayChange",
    headerName: "Day Change",
  }),
  currencyField({
    field: "marketValue",
    headerName: "Market Value",
    hide: true,
  }),
  currencyField({
    field: "costBasis",
    headerName: "Cost Basis",
  }),
  currencyField(
    {
      field: "gainLoss",
      headerName: "Gain/Loss",
    },
    true
  ),
  currencyField({
    field: "costPerShare",
    headerName: "Cost Per Share",
    hide: true,
  }),
  percentageField({
    field: "gainLossPercent",
    headerName: "Gain/Loss %",
  }),
  percentageField(
    {
      field: "portfolioPercentage",
      headerName: "% of Portfolio",
    },
    true
  ),
];

const mapData = (data: Position) => ({
  ...data,
  price: formatCurrency(data.price),
  marketValue: formatCurrency(data.marketValue),
  costBasis: formatCurrency(data.costBasis),
  costPerShare: formatCurrency(data.costPerShare),
  dayChange: formatPercentage(data.dayChange),
  gainLoss: formatCurrency(data.gainLoss),
  gainLossPercent: formatPercentage(data.gainLossPercent),
  portfolioPercentage: formatPercentage(data.portfolioPercentage),
});

type Props = {};

const PositionsTable = () => {
  const positions = positionsStore.useState((s) => s.positions);
  const data = positions.map(mapData);

  console.log(data);
  return <BaseChart rows={data} columns={columns} id="PositionsTable" />;
};

export default PositionsTable;
