"use es6";

import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { getTransactions } from "../utils/dataParser";
import { formatAmount, formatCurrency, formatDate } from "../utils/formatting";
import { timeField, numberField, currencyField } from "../utils/fields";
import { ApiCrypto } from "../api/crypto";
import { RawCrypto } from "../utils/csv";

const columns = [
  { field: "label", headerName: "Type", width: 165 },
  { field: "symbol", headerName: "Symbol" },
  currencyField({ field: "price", headerName: "Price" }),
  numberField({ field: "amount", headerName: "Amount", width: 110 }),
  timeField({ field: "date", headerName: "Date" }),
  currencyField({ field: "pricePer", headerName: "Price Per", width: 150 }),
  currencyField({
    field: "pricePaid",
    headerName: "Price Paid",
    width: 150,
  }),
  {
    field: "notes",
    headerName: "Notes",
    width: 300,
  },
  // { field: "portfolioPercent", headerName: "% of Portfolio" },
  // { field: "totalValue", headerName: "Total Value" },
  // { field: "totalGainLoss", headerName: "Total Gain/Loss" },
  // { field: "gainLossPercent", headerName: "Gain/Loss %" },
];

const mapData = (data, i) => ({
  ...data,
  amount: formatAmount(data.amount),
  date: formatDate(data.date),
  pricePer: formatCurrency(data.pricePer),
  pricePaid: formatCurrency(data.pricePaid),
  id: i,
});

type Props = {
  data: Array<RawCrypto>;
  tickerData: Array<any>;
};

const TotalsTable = ({ data, tickerData }: Props) => {
  if (!data || !tickerData.length) return null;

  console.log(tickerData);
  console.log(tickerData.find((d) => d.id === "BTC").price);

  const appendPriceData = (transaction) => ({
    ...transaction,
    price: formatCurrency(
      tickerData.find((d) => d.id === transaction.symbol).price
    ),
  });

  const transactions = getTransactions(data).map(mapData).map(appendPriceData);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={transactions}
        // @ts-ignore
        columns={columns}
        sortModel={[{ field: "date", sort: "desc" }]}
        checkboxSelection
      />
    </div>
  );
};

export default TotalsTable;
