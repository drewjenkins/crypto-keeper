import {
  Crypto,
  CryptoTransaction,
  Symbol,
  Label,
  TransactionType,
  Position,
} from "../../types";

type PartialPosition = {
  symbol: Symbol;
  transactions: Array<CryptoTransaction>;
};

const stubbedPosition = (position: PartialPosition): Position => ({
  id: position.symbol,
  symbol: position.symbol,
  coin: position.symbol,
  label: position.symbol as Label,
  rank: -1,
  quantity: -1,
  price: -1,
  marketValue: -1,
  costBasis: -1,
  costPerShare: -1,
  dayChange: -1,
  gainLoss: -1,
  gainLossPercent: -1,
  portfolioPercentage: -0.01,
  transactions: position.transactions,
});

const groupTransactions = (
  transactions: Array<CryptoTransaction>
): Array<PartialPosition> => {
  const positions: Array<PartialPosition> = [];

  transactions.forEach((transaction) => {
    if (transaction.type !== TransactionType.other) {
      const index = positions.findIndex((p) => p.symbol === transaction.symbol);
      const match = positions[index];
      const data = {
        symbol: transaction.symbol,
        transactions: [transaction],
      };

      if (!match) {
        positions.push(data);
      } else {
        positions[index].transactions.push(transaction);
      }
    }
  });

  return positions;
};

const transform = (
  transactions: Array<CryptoTransaction>,
  cryptos: Array<Crypto>
): Array<Position> => {
  let positions: Array<Position> = groupTransactions(
    transactions
  ) as Array<Position>;

  positions = positions
    .map((position) => {
      const matchedCrypto = cryptos.find((c) => c.symbol === position.symbol);
      if (!matchedCrypto) {
        return stubbedPosition(position);
      }

      position.id = matchedCrypto.coin;
      position.label = matchedCrypto.label;
      position.coin = matchedCrypto.coin;
      position.symbol = matchedCrypto.symbol;
      position.rank = matchedCrypto.rank;
      position.price = matchedCrypto.price;
      position.quantity = position.transactions.reduce(
        (acc: number, current: CryptoTransaction) => {
          acc = acc + current.amount;
          return acc;
        },
        0
      );
      position.dayChange = matchedCrypto["1d"].priceChangePercent;

      position.marketValue = position.price * position.quantity;

      position.costBasis = position.transactions.reduce(
        (acc: number, current: CryptoTransaction) => {
          acc = acc + current.transactionAmount;
          return acc;
        },
        0
      );

      position.costPerShare = position.costBasis / position.quantity;
      position.gainLoss = position.marketValue - position.costBasis;
      position.gainLossPercent = position.marketValue / position.costBasis - 1;

      return position;
    })
    .filter((p) => p.quantity > 0);

  const walletTotal = positions.reduce((p, i) => p + i.marketValue, 0);
  positions = positions.map((p) => ({
    ...p,
    portfolioPercentage: p.marketValue / walletTotal,
  }));

  return positions.sort((a, b) => (a.rank < b.rank ? -1 : 1));
};

export default transform;
