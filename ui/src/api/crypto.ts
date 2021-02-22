export type ApiCrypto = {
  circulating_supply: number;
  cmc_rank: number;
  date_added: string;
  id: number;
  last_updated: string;
  max_supply: number;
  name: string;
  num_market_pairs: number;
  platform: null;
  quote: {
    USD: {
      last_updated: string;
      market_cap: number;
      percent_change_1h: number;
      percent_change_7d: number;
      percent_change_24h: number;
      percent_change_30d: number;
      price: number;
      volume_24h: number;
    };
  };
  // USD: {price: 55769.36585390189, volume_24h: 52882390767.640114, percent_change_1h: -1.54646249,…}},
  slug: string;
  symbol: string;
  tags: Array<string>;
  total_supply: 18635218;
};

export const ticker = async () => {
  const res = await fetch("http://localhost:3001/ticker");
  return res.json();
};
