import { RawTransaction, TransactionKind } from "../../types/api/csvUpload";
import { CryptoTransaction, TransactionType } from "../../types/index";
import {
  utcStringToTimestamp,
  getCryptoBySymbol,
} from "../utils/typeConversions";
import { createGuid } from "../utils/utils";

const mapTransactionType = (input: TransactionKind): TransactionType => {
  switch (input) {
    case TransactionKind.crypto_deposit:
    case TransactionKind.crypto_purchase:
    case TransactionKind.van_purchase: {
      return TransactionType.purchase;
    }
    case TransactionKind.crypto_to_van_sell_order: {
      return TransactionType.sale;
    }
    case TransactionKind.crypto_exchange: {
      return TransactionType.exchange;
    }
    case TransactionKind.crypto_earn_program_created:
    case TransactionKind.dust_conversion_credited:
    case TransactionKind.dust_conversion_debited:
    case TransactionKind.lockup_lock: {
      return TransactionType.hide;
    }
    default:
      return TransactionType.other;
  }
};

const getTransactionAmount = (input: RawTransaction): number => {
  if (input["Transaction Kind"] === TransactionKind.van_purchase) {
    return parseFloat(input["To Amount"]);
  }

  return parseFloat(input["Amount"]);
};

const transform = (input: RawTransaction): Array<CryptoTransaction> => {
  const transaction: CryptoTransaction = {} as CryptoTransaction;
  transaction.type = mapTransactionType(input["Transaction Kind"]);

  if (transaction.type === TransactionType.hide) return [];

  transaction.timestamp = utcStringToTimestamp(input["Timestamp (UTC)"]);
  transaction.description = input["Transaction Description"];
  transaction.amount = getTransactionAmount(input);
  transaction.transactionAmount = parseFloat(input["Native Amount (in USD)"]);
  transaction.pricePerUnit = Math.abs(
    transaction.transactionAmount / transaction.amount
  );
  transaction.id = createGuid();
  transaction.crypto =
    getCryptoBySymbol(input.Currency) ||
    // Fallback to ['To Currency'] from van_purchase
    getCryptoBySymbol(input["To Currency"]);
  transaction.label = transaction.crypto.label;
  transaction.symbol = transaction.crypto.symbol;

  if (transaction.type !== TransactionType.exchange) {
    return [transaction];
  }

  const splitTransaction: CryptoTransaction = { ...transaction };
  transaction.type = TransactionType["exchange-sale"];
  transaction.transactionAmount = 0 - transaction.transactionAmount;
  splitTransaction.type = TransactionType["exchange-purchase"];
  splitTransaction.amount = parseFloat(input["To Amount"]!);
  splitTransaction.pricePerUnit = Math.abs(
    splitTransaction.transactionAmount / splitTransaction.amount
  );
  splitTransaction.crypto = getCryptoBySymbol(input["To Currency"]!);
  splitTransaction.label = splitTransaction.crypto.label;
  splitTransaction.symbol = splitTransaction.crypto.symbol;
  splitTransaction.id = createGuid();

  return [splitTransaction, transaction];
};

export default transform;
