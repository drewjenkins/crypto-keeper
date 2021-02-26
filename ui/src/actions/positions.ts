import positionsStore from "../store/positions";
import getState from "../store";
import transform from "../adapters/transactionsToPositions";
import { CryptoTransaction, Crypto } from "../../types";

export const updatePositions = async (
  _transactions?: Array<CryptoTransaction>,
  _tickerData?: Array<Crypto>
) => {
  const { tickerData, transactions } = getState();

  positionsStore.update((store) => {
    store.positions = [
      ...transform(_transactions || transactions, _tickerData || tickerData),
    ];
  });
};
