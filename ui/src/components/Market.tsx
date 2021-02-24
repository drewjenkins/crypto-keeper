"use es6";

import React from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { formatCurrency, formatPercentage } from "../utils/formatting";
import { numberField, currencyField, percentageField } from "../utils/fields";
import tickerStore from "../store/ticker";
import useTableSort from "../hooks/tableSort";
import TrendArrow from "./TrendArrow";
import { Crypto } from "../../types";
import { red, green } from "../colors";
import { convertPercentageToNumber } from "../utils/utils";
import { updateFavorites, getFavorites } from "../storage/favorites";

const columns = [
  { field: "tradeable", headerName: "T", width: 100 },
  numberField({ field: "rank", headerName: "Rank", width: 120 }),
  { field: "label", headerName: "Type", width: 165 },
  { field: "symbol", headerName: "Symbol", width: 130 },
  currencyField({
    field: "dailyHigh",
    headerName: "Daily High",
    width: 150,
    hide: true,
  }),
  currencyField({
    field: "marketCap",
    headerName: "Market Cap",
    width: 150,
    hide: true,
  }),
  currencyField({
    field: "price",
    headerName: "Price",
    width: 170,
    renderCell: (params) => (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        {params.value}

        <span style={{ marginRight: 30, display: "flex" }}>
          <TrendArrow
            currentValue={params.row.price}
            lastValue={params.row.prevPrice}
          />
        </span>
      </div>
    ),
  }),
  currencyField({
    field: "dayChange",
    headerName: "Day Change",
    width: 160,
    hide: true,
  }),
  percentageField({
    field: "percentChange",
    headerName: "Percent Change",
    width: 160,
    renderCell: (params) => (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            marginLeft: 5,
            color: parseFloat(params.value) > 0 ? green : red,
          }}
        >
          {params.value}
        </span>
        <div style={{ display: "flex", alignItems: "center", marginRight: 30 }}>
          <TrendArrow
            currentValue={convertPercentageToNumber(params.value)}
            lastValue={0}
            hideTooltip={true}
          />
        </div>
      </div>
    ),
  }),
  percentageField({
    field: "weekChange",
    headerName: "Week Change",
    width: 160,
    renderCell: (params) => (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            marginLeft: 5,
            color: parseFloat(params.value) > 0 ? green : red,
          }}
        >
          {params.value}
        </span>
        <div style={{ display: "flex", alignItems: "center", marginRight: 30 }}>
          <TrendArrow
            currentValue={convertPercentageToNumber(params.value)}
            lastValue={0}
            hideTooltip={true}
          />
        </div>
      </div>
    ),
  }),
  percentageField({
    field: "monthChange",
    headerName: "Month Change",
    width: 160,
    renderCell: (params) => (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            marginLeft: 5,
            color: parseFloat(params.value) > 0 ? green : red,
          }}
        >
          {params.value}
        </span>
        <div style={{ display: "flex", alignItems: "center", marginRight: 30 }}>
          <TrendArrow
            currentValue={convertPercentageToNumber(params.value)}
            lastValue={0}
            hideTooltip={true}
          />
        </div>
      </div>
    ),
  }),
  percentageField({
    field: "yearChange",
    headerName: "Year Change",
    width: 160,
    renderCell: (params) => (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            marginLeft: 5,
            color: parseFloat(params.value) > 0 ? green : red,
          }}
        >
          {params.value}
        </span>
        <div style={{ display: "flex", alignItems: "center", marginRight: 30 }}>
          <TrendArrow
            currentValue={convertPercentageToNumber(params.value)}
            lastValue={0}
            hideTooltip={true}
          />
        </div>
      </div>
    ),
  }),
  percentageField({
    field: "yearToDateChange",
    headerName: "Year To Date",
    width: 160,
    renderCell: (params) => (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            marginLeft: 5,
            color: parseFloat(params.value) > 0 ? green : red,
          }}
        >
          {params.value}
        </span>
        <div style={{ display: "flex", alignItems: "center", marginRight: 30 }}>
          <TrendArrow
            currentValue={convertPercentageToNumber(params.value)}
            lastValue={0}
            hideTooltip={true}
          />
        </div>
      </div>
    ),
  }),
];

const mapData = (data: Crypto) => ({
  ...data,
  dailyHigh: formatCurrency(data.dailyHigh),
  marketCap: formatCurrency(data.marketCap),
  price: formatCurrency(data.price),
  dayChange: formatCurrency(data["1d"].priceChange),
  percentChange: formatPercentage(data["1d"].priceChangePercent),
  weekChange: formatPercentage(data["7d"].priceChangePercent),
  monthChange: formatPercentage(data["30d"].priceChangePercent),
  yearChange: formatPercentage(data["365d"].priceChangePercent),
  yearToDateChange: formatPercentage(data["ytd"].priceChangePercent),
  tradeable: data.crypto.tradeable ? "Yes" : "No",
});

type Props = {};

const MarketTable = () => {
  const ticker = tickerStore.useState((s) => s.tickerData);
  const [sortModel, setSortModel] = useTableSort("MarketTable");
  const data = ticker.map(mapData);

  return (
    <div style={{ height: 620, width: "100%" }}>
      <DataGrid
        components={{
          Toolbar: GridToolbar,
        }}
        autoHeight={false}
        rows={data}
        // @ts-ignore
        columns={columns}
        // @ts-ignore
        sortModel={sortModel}
        // @ts-ignore
        onSortModelChange={setSortModel}
        checkboxSelection
        selectionModel={getFavorites()}
        // @ts-ignore
        onRowSelected={updateFavorites}
      />
    </div>
  );
};

export default MarketTable;
