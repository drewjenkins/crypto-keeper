"use es6";

import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { timeField, numberField } from "../utils/fields";
import { CryptoTransaction, TableColumns } from "../../types/index";
import transactionStore from "../store/transactions";
import useTableSort from "../hooks/tableSort";

const columns: TableColumns = [
  timeField({
    field: "timestamp",
    headerName: "Time",
  }),
  {
    field: "description",
    headerName: "Desc",
    width: 160,
  },
  {
    field: "label",
    headerName: "Label",
    width: 160,
  },
  numberField({
    field: "amount",
    headerName: "Amount",
    width: 105,
  }),
  {
    field: "type",
    headerName: "Transaction Kind",
    hide: false,
    width: 300,
  },
];

const mapData = (row: CryptoTransaction, index: number) => ({
  ...row,
  id: index,
  label: `${row.crypto.label} (${row.crypto.symbol})`,
});

const RawDataTable = () => {
  const [sortModel, setSortModel] = useTableSort("RawDataTable");

  const transactions = transactionStore.useState((s) => s.transactions);

  return (
    <div style={{ height: 620, width: "100%" }}>
      <DataGrid
        rows={transactions.map(mapData)}
        // @ts-ignore
        columns={columns}
        // @ts-ignore
        onSortModelChange={setSortModel}
        // @ts-ignore
        sortModel={sortModel}
        checkboxSelection
      />
    </div>
  );
};

export default RawDataTable;
