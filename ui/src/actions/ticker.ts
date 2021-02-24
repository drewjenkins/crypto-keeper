import { ticker } from "../api/crypto";
import tickerStore from "../store/ticker";
import transform from "../adapters/nomicsTickerAdapter";

export const getTicker = async () => {
  const data = await ticker();
  if (data.error) {
    console.error(data.error);
    return;
  }

  tickerStore.update((store) => {
    const crypto = data.map((d) => transform(d, store));
    store.tickerData = [...crypto];
  });
};
