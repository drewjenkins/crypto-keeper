import { UTCString, Symbol, CryptoStatus } from "../index";

export type RawHistoricalData = {
  market_cap_change: string;
  market_cap_change_pct: string;
  price_change: string;
  price_change_pct: string;
  volume: string;
  volume_change: string;
  volume_change_pct: string;
};

export type RawCrypto = {
  circulating_supply: string;
  currency: Symbol;
  first_candle: UTCString;
  first_order_book: UTCString;
  first_trade: UTCString;
  high: string;
  high_timestamp: UTCString;
  id: Symbol;
  logo_url: string;
  market_cap: string;
  max_supply: string;
  name: string;
  num_exchanges: string;
  num_pairs: string;
  num_pairs_unmapped: string;
  price: string;
  price_date: UTCString;
  price_timestamp: UTCString;
  rank: string;
  rank_delta: string;
  status: CryptoStatus;
  symbol: Symbol;
  "1d": RawHistoricalData;
  "7d": RawHistoricalData;
  "30d": RawHistoricalData;
  "365d": RawHistoricalData;
  ytd: RawHistoricalData;
};
