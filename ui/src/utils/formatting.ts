import { AbbreviateCurrency } from "abbreviate-currency";
const americanEnglishUsd = new AbbreviateCurrency({
  language: "en-US",
  digitGroups: [
    { symbol: "M", digits: 7 }, // 1,000,000+ (7 digits or more.)
    { symbol: "B", digits: 10 }, // 1,000,000,000+ (10 digits or more.)
    { symbol: "T", digits: 13 }, // 1,000,000,000,000+ (13 digits or more.)],
  ],
});

export const formatAmount = (amount) => amount.toFixed(4);

export const formatCurrency = (amount) => {
  const asNumber = parseFloat(amount);
  return asNumber > 100000
    ? americanEnglishUsd.transform(amount)
    : `${new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 3,
      }).format(asNumber)}`;
};

export const formatPercentage = (percent, showPlus = false) => {
  const asNumber = parseFloat(percent) * 100;
  return `${asNumber > 0 && showPlus ? "+" : ""}${asNumber.toFixed(2)}%`;
};

export const formatDate = (timestamp) => new Date(timestamp).toDateString();

export const normalize = (str = "") =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^a-z]/, "");
