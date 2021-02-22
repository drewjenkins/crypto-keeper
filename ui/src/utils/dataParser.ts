import { RawCrypto, Currency } from "./csv";

type Crypto = {
  type: "purchase" | "exchange-purchase" | "exchange-sale" | "sale";
  label: string;
  symbol: Currency;
  date: number;
  amount: number;
  pricePer: number;
  pricePaid: number;
  notes?: string;
  // portfolioPercent: number;
  // currentPrice: number,
  // gainLoss: number,
  // gainLossPercent: number,
};

type CryptoTotals = {
  value: number;
  gainLoss: number;
  gainLossPercent: number;
};

export const getTransactions = (data: Array<RawCrypto>): Array<Crypto> => {
  let parsedData: Array<Crypto> = [];

  let purchases = data.filter((d) =>
    ["crypto_deposit", "crypto_purchase"].includes(d["Transaction Kind"])
  );
  // @ts-ignore
  parsedData = purchases.map((d) => ({
    type: "purchase",
    label: "Purchase",
    symbol: d["Currency"],
    date: new Date(d["Timestamp (UTC)"]).valueOf(),
    amount: d.Amount,
    pricePer: Math.abs(d["Native Amount (in USD)"] / d.Amount),
    pricePaid: Math.abs(d["Native Amount (in USD)"]),
  }));

  let cashPurchases = data.filter((d) =>
    ["van_purchase"].includes(d["Transaction Kind"])
  );
  // @ts-ignore
  parsedData = [
    ...parsedData,
    ...cashPurchases.map((d) => ({
      amount: Math.abs(d["To Amount"]),
      type: "purchase",
      label: "Purchase",
      symbol: d["To Currency"],
      date: new Date(d["Timestamp (UTC)"]).valueOf(),
      pricePer: Math.abs(d["Native Amount (in USD)"] / d["To Amount"]),
      pricePaid: Math.abs(d["Native Amount (in USD)"]),
    })),
  ];

  const sales = data.filter((d) =>
    ["crypto_to_van_sell_order"].includes(d["Transaction Kind"])
  );
  // @ts-ignore
  parsedData = [
    ...parsedData,
    ...sales.map((d) => ({
      amount: Math.abs(d.Amount),
      type: "sale",
      label: "Sale",
      symbol: d["Currency"],
      date: new Date(d["Timestamp (UTC)"]).valueOf(),
      pricePer: Math.abs(d["Native Amount (in USD)"] / d.Amount),
      pricePaid: Math.abs(d["Native Amount (in USD)"]),
    })),
  ];

  const exchanges = data.filter(
    (d) => d["Transaction Kind"] === "crypto_exchange"
  );
  for (let i = 0; i < exchanges.length; i++) {
    parsedData.push({
      type: "exchange-sale",
      label: "Exchange - Sale",
      symbol: exchanges[i]["Currency"],
      amount: Math.abs(exchanges[i].Amount),
      date: new Date(exchanges[i]["Timestamp (UTC)"]).valueOf(),
      pricePer: Math.abs(
        exchanges[i]["Native Amount (in USD)"] / exchanges[i].Amount
      ),
      pricePaid: Math.abs(exchanges[i]["Native Amount (in USD)"]),
      notes: exchanges[i]["Transaction Description"],
    });

    parsedData.push({
      type: "exchange-purchase",
      label: "Exchange - Purchase",
      symbol: exchanges[i]["To Currency"],
      amount: exchanges[i]["To Amount"],
      date: new Date(exchanges[i]["Timestamp (UTC)"]).valueOf(),
      pricePer: Math.abs(
        exchanges[i]["Native Amount (in USD)"] / exchanges[i]["To Amount"]
      ),
      pricePaid: Math.abs(exchanges[i]["Native Amount (in USD)"]),
      notes: exchanges[i]["Transaction Description"],
    });
  }

  return parsedData;
};
