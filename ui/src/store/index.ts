import tickerStore from "./ticker";
import transactionsStore from "./transactions";
import positionsStore from "./positions";

const combineStores = () => ({
  tickerData: tickerStore.getRawState().tickerData,
  transactions: transactionsStore.getRawState().transactions,
  positions: positionsStore.getRawState().positions,
});

setInterval(() => {
  (window as any).store = (window as any).state = combineStores();
}, 1000);

export default combineStores;
