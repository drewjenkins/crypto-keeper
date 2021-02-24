import tickerStore from "./ticker";
import transactionsStore from "./transactions";

const combineStores = {
  tickerStore,
  transactionsStore,
};

setInterval(() => {
  (window as any).store = (window as any).state = combineStores;
}, 1000);

export default combineStores;
