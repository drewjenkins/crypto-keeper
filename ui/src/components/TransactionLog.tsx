"use es6";

import React from "react";
import { formatAmount, formatCurrency, formatDate } from "../utils/formatting";
import { timeField, numberField, currencyField } from "../utils/fields";
import transactionStore from "../store/transactions";
import BaseChart from "./BaseChart";
import CoinCell from "./CoinCell";

const columns = [
  {
    field: "coin",
    headerName: "Coin",
    width: 250,
    renderCell: (params) => <CoinCell coin={params.value} />,
  },
  numberField({ field: "amount", headerName: "Amount", width: 110 }),
  timeField({ field: "date", headerName: "Date" }),
  currencyField({ field: "pricePer", headerName: "Price Per" }),
  currencyField({
    field: "pricePaid",
    headerName: "Price Paid",
  }),
  {
    field: "description",
    headerName: "Description",
    width: 300,
  },
];

const mapData = (data) => ({
  ...data,
  amount: formatAmount(data.amount),
  date: formatDate(data.timestamp),
  pricePer: formatCurrency(data.pricePerUnit),
  pricePaid: formatCurrency(data.transactionAmount),
});

const TransactionLog = () => {
  const transactions = transactionStore.useState((s) => s.transactions);
  const data = transactions.map(mapData);
  return <BaseChart rows={data} columns={columns} id="PrettyDataTable" />;
};

export default TransactionLog;
