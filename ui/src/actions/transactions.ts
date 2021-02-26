import transactionStore from "../store/transactions";
import { uploadCSV } from "../api/csv";
import transform from "../adapters/croTransactionToTransaction";
import flatMap from "lodash/flatMap";
import { updatePositions } from "./positions";

export const updateTransactions = async (file: File) => {
  const csv = await uploadCSV(file);

  const filteredTransactions = csv.filter((d) => !!d["Timestamp (UTC)"]);
  const transformedTransactions = flatMap(filteredTransactions.map(transform));

  transactionStore.update((s) => {
    // @ts-ignore
    s.transactions = transformedTransactions;
  });

  updatePositions(transformedTransactions);
};
