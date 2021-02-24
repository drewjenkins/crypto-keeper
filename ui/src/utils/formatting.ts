import { AbbreviateCurrency } from "abbreviate-currency";
const americanEnglishUsd = new AbbreviateCurrency({ language: "en-US" });

export const formatAmount = (amount) => amount.toFixed(4);

export const formatCurrency = (amount) => {
  const asNumber = parseFloat(amount);

  if (asNumber > 100000) return americanEnglishUsd.transform(amount);
  if (asNumber > 100) return `$${asNumber.toFixed(2)}`;
  if (asNumber > 10) return `$${asNumber.toFixed(3)}`;
  return `$${asNumber.toFixed(4)}`;
};

export const formatPercentage = (percent) => {
  const asNumber = parseFloat(percent) * 100;
  return `${
    asNumber < 1 && asNumber > -1 ? asNumber.toFixed(3) : asNumber.toFixed(2)
  }%`;
};

export const formatDate = (timestamp) => new Date(timestamp).toDateString();

export const normalize = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^a-z]/, "");
