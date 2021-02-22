"use es6";

import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { timeField, numberField, currencyField } from "../utils/fields";

const columns = [
  timeField({
    field: "Timestamp (UTC)",
    headerName: "Time",
  }),
  {
    field: "Transaction Description",
    headerName: "Desc",
    width: 160,
  },
  {
    field: "Currency",
    headerName: "Currency",
    width: 160,
  },
  numberField({
    field: "Amount",
    headerName: "Amount",
    width: 105,
  }),
  {
    field: "To Currency",
    headerName: "To Symbol",
    hide: false,
  },
  numberField({
    field: "To Amount",
    headerName: "Converted Amount",
    width: 175,
  }),
  { field: "Native Currency", headerName: "Native Currency", hide: false },
  currencyField({
    field: "Native Amount",
    headerName: "Native Amount",
    hide: false,
  }),
  currencyField({
    field: "Native Amount (in USD)",
    headerName: "Price",
  }),
  {
    field: "Transaction Kind",
    headerName: "Transaction Kind",
    hide: false,
    width: 300,
  },
];

const mapData = (row, index) => ({
  ...row,
  "Timestamp (UTC)": new Date(row["Timestamp (UTC)"]).toDateString(),
  Amount: Number(row["Amount"]).toPrecision(4),
  "To Amount": Number(row["To Amount"]).toPrecision(4),
  "Native Amount": `$${row["Native Amount"]}`,
  "Native Amount (in USD)": `$${row["Native Amount (in USD)"]}`,
  id: index,
});

const RawDataTable = ({ data }) => {
  if (!data) return null;

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data.map(mapData)}
        // @ts-ignore
        columns={columns}
        sortModel={[{ field: "Timestamp (UTC)", sort: "desc" }]}
        checkboxSelection
      />
    </div>
  );
};

export default RawDataTable;
