"use es6";

import React from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { Crypto, TableField } from "../../types/index";
import useTableSort from "../hooks/tableSort";
import { updateFavorites, getFavorites } from "../storage/favorites";

type ChartProps = {
  id: string;
  rows: Array<any>;
  columns: Array<TableField>;
};

const BaseChart = (props: ChartProps) => {
  const [sortModel, setSortModel] = useTableSort(props.id);

  return (
    <div style={{ height: 675, width: "100%" }}>
      <DataGrid
        components={{
          Toolbar: GridToolbar,
        }}
        disableSelectionOnClick={true}
        density="comfortable"
        autoHeight={false}
        rows={props.rows}
        // @ts-ignore
        columns={props.columns}
        // @ts-ignore
        sortModel={sortModel}
        // @ts-ignore
        onSortModelChange={setSortModel}
        selectionModel={getFavorites()}
        // @ts-ignore
        onRowSelected={updateFavorites}
      />
    </div>
  );
};

export default BaseChart;
