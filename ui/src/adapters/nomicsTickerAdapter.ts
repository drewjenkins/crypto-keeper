import { RawCrypto } from "../../types/api/crypto";
import { Crypto, HistoricalData } from "../../types";
import {
  getCryptoBySymbol,
  utcStringToTimestamp,
} from "../utils/typeConversions";

const calculatePreviousPrice = (crypto: Crypto, store: any) => {
  // @ts-ignore
  const match = store.tickerData.find((s) => {
    if (s.crypto.symbol === crypto.crypto.symbol)
      return s.crypto.symbol === crypto.crypto.symbol;
  });

  if (match) {
    if (match.price !== crypto.price) {
      return parseFloat(match.price);
    }
    return match.prevPrice || match.price;
  }

  return crypto.price;
};

const transform = (input: RawCrypto): Crypto => {
  const crypto: Crypto = {} as Crypto;

  const buildHistoricalData = (key: string): HistoricalData => ({
    marketCapChange: parseInt(input[key].market_cap_change, 10),
    marketCapChangePercent: parseFloat(input[key].market_cap_change_pct),
    priceChange: parseFloat(input[key].price_change),
    priceChangePercent: parseFloat(input[key].price_change_pct),
    volume: parseInt(input[key].volume, 10),
    volumeChange: parseInt(input[key].volume_change, 10),
    volumeChangePercent: parseFloat(input[key].volume_change_pct),
  });

  crypto.crypto = getCryptoBySymbol(input.symbol);
  crypto.id = crypto.crypto.symbol;
  crypto.symbol = crypto.crypto.symbol;
  crypto.coin = crypto.crypto.symbol;
  crypto.label = crypto.crypto.label;
  crypto.dailyHigh = parseFloat(input.high);
  crypto.dailyHighTimestamp = utcStringToTimestamp(input.high_timestamp);
  crypto.iconUrl = input.logo_url;
  crypto.status = input.status;
  crypto.marketCap = parseInt(input.market_cap, 10);
  crypto.maxSupply = parseInt(input.max_supply, 10);
  crypto.price = parseFloat(input.price);
  crypto.timestamp = utcStringToTimestamp(input.price_timestamp);
  crypto.rank = parseInt(input.rank, 10);

  crypto["1d"] = buildHistoricalData("1d");
  crypto["7d"] = buildHistoricalData("7d");
  crypto["30d"] = buildHistoricalData("30d");
  crypto["365d"] = buildHistoricalData("365d");
  crypto["ytd"] = buildHistoricalData("ytd");

  return crypto;
};

export default transform;
