import { CryptoName, Symbol } from "../../types";
import cryptos, { unknown } from "../constants/cryptos";

export const createGuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const convertCurrencyToNumber = (currency: string) => {
  let parsed = currency.replace("$", "");

  if (/[TBMK]+/.test(parsed)) {
    let [whole, decimal] = parsed.split(".");

    if (!decimal) {
      whole = whole.replace("T", "000000000000000");
      whole = whole.replace("B", "000000000");
      whole = whole.replace("M", "000000");
      whole = whole.replace("K", "000");
      parsed = whole;
    } else {
      decimal = decimal.replace("T", "000000000000000");
      decimal = decimal.replace("B", "000000000");
      decimal = decimal.replace("M", "000000");
      decimal = decimal.replace("K", "000");
      parsed = `${whole}${decimal}`;
    }
  }

  return parseFloat(parsed);
};

export const convertPercentageToNumber = (percentage: string) => {
  return parseFloat(percentage.replace("%", ""));
};

export const getCryptoNameFromSymbol = (symbol: Symbol): CryptoName =>
  cryptos.find((c) => c.symbol === symbol) || unknown;
