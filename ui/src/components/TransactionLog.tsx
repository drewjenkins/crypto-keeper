"use es6";

import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { formatAmount, formatCurrency, formatDate } from "../utils/formatting";
import { timeField, numberField, currencyField } from "../utils/fields";
import transactionStore from "../store/transactions";
import useTableSort from "../hooks/tableSort";

const columns = [
  { field: "label", headerName: "Type", width: 165 },
  { field: "symbol", headerName: "Symbol" },
  // currencyField({ field: "price", headerName: "Price" }),
  numberField({ field: "amount", headerName: "Amount", width: 110 }),
  timeField({ field: "date", headerName: "Date" }),
  currencyField({ field: "pricePer", headerName: "Price Per", width: 150 }),
  currencyField({
    field: "pricePaid",
    headerName: "Price Paid",
    width: 150,
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

type Props = {};

const TransactionLog = () => {
  const transactions = transactionStore.useState((s) => s.transactions);
  const [sortModel, setSortModel] = useTableSort("PrettyDataTable");

  return (
    <div style={{ height: 620, width: "100%" }}>
      <DataGrid
        rows={transactions.map(mapData)}
        // @ts-ignore
        columns={columns}
        // @ts-ignore
        sortModel={sortModel}
        // @ts-ignore
        onSortModelChange={setSortModel}
        checkboxSelection
      />
    </div>
  );
};

export default TransactionLog;
