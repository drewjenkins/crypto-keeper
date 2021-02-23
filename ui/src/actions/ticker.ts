import { ticker } from "../api/crypto";
import tickerStore from "../store/ticker";

export const getTicker = async () => {
  const data = await ticker();
  if (data.error) {
    console.error(data.error);
    return;
  }

  tickerStore.update((s) => [...data]);
};
