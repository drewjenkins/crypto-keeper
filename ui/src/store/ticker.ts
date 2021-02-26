import { Store } from "pullstate";
import { Crypto, Symbol } from "../../types";

const Ticker = new Store({ tickerData: [] });

export const getCryptoBySymbol = (symbol: Symbol): Crypto =>
  Ticker.getRawState().tickerData.find((t: Crypto) => t.symbol === symbol);

export default Ticker;
