import { ticker } from "../api/crypto";
import tickerStore from "../store/ticker";
import transform from "../adapters/nomicsTickerAdapter";
import { updatePositions } from "./positions";
import { Crypto } from "../../types";
import { formatCurrency, formatPercentage } from "../utils/formatting";

export const getTicker = async () => {
  const data = await ticker();
};

export const updateTicker = (data) => {
  if (data.error) {
    console.error(data.error);
    return;
  }

  const crypto: Array<Crypto> = data.map(transform);
  tickerStore.update((store) => {
    store.tickerData = [...crypto];
  });

  const CRO = crypto.find((c) => c.coin === "CRO");
  document.title = `${CRO.symbol} - ${formatCurrency(
    CRO.price
  )} (${formatPercentage(CRO["1d"].priceChangePercent, true)}) | CK`;
  updatePositions(undefined, crypto);
};
