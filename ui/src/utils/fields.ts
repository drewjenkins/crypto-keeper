import { TableField } from "../../types/index";
import { convertCurrencyToNumber, convertPercentageToNumber } from "./utils";

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
  overrides: TableField = {} as TableField
): TableField => ({
  sortComparator: (a, b) =>
    convertCurrencyToNumber(a) < convertCurrencyToNumber(b) ? -1 : 1,
  ...overrides,
});

export const percentageField = (
  overrides: TableField = {} as TableField
): TableField => ({
  sortComparator: (a, b) =>
    convertPercentageToNumber(a) < convertPercentageToNumber(b) ? -1 : 1,
  ...overrides,
});
