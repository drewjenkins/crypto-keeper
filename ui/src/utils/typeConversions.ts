import cryptos from "../constants/cryptos";
import { normalize } from "../utils/formatting";
import { CryptoName } from "../../types/index";

export const utcStringToTimestamp = (utcString) =>
  new Date(utcString).valueOf();

export const getCryptoByLabel = (label) =>
  cryptos.find((c: CryptoName) => normalize(c.label) === normalize(label));

export const getCryptoBySymbol = (symbol) =>
  cryptos.find((c: CryptoName) => normalize(c.symbol) === normalize(symbol));
