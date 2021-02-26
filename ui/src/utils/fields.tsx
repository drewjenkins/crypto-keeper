"use es6";

import React from "react";
import { TableField } from "../../types/index";
import { convertCurrencyToNumber, convertPercentageToNumber } from "./utils";
import TrendCell from "../components/TrendCell";
import Currency from "../components/Currency";

export const timeField = (
  overrides: TableField = {} as TableField
): TableField => ({
  width: 150,
  sortComparator: (a, b) =>
    new Date(a).valueOf() < new Date(b).valueOf() ? -1 : 1,
  ...overrides,
});

export const numberField = (
  overrides: TableField = {} as TableField
): TableField => ({
  sortComparator: (a, b) =>
    Number.parseFloat(a) < Number.parseFloat(b) ? -1 : 1,
  ...overrides,
});

export const currencyField = (
  overrides: TableField = {} as TableField,
  colorize: boolean = false
): TableField => ({
  sortComparator: (a, b) =>
    convertCurrencyToNumber(a) < convertCurrencyToNumber(b) ? -1 : 1,
  width: 170,
  ...(colorize && {
    renderCell: (params) => <Currency value={params.value} />,
  }),
  ...overrides,
});

export const percentageField = (
  overrides: TableField = {} as TableField,
  hideArrow = false
): TableField => ({
  sortComparator: (a, b) =>
    convertPercentageToNumber(a) < convertPercentageToNumber(b) ? -1 : 1,
  width: 160,
  renderCell: (params) => (
    <TrendCell
      currentValue={convertPercentageToNumber(params.value)}
      lastValue={0}
      valueLabel={params.value}
      hideArrow={hideArrow}
    />
  ),
  ...overrides,
});
