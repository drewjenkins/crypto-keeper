import { Symbol, UTCString } from "../index";

export enum TransactionKind {
  "crypto_purchase" = "crypto_purchase",
  "van_purchase" = "van_purchase",
  "crypto_to_van_sell_order" = "crypto_to_van_sell_order",
  "dust_conversion_credited" = "dust_conversion_credited",
  "dust_conversion_debited" = "dust_conversion_debited",
  "crypto_earn_program_created" = "crypto_earn_program_created",
  "crypto_exchange" = "crypto_exchange",
  "crypto_deposit" = "crypto_deposit",
  "lockup_lock" = "lockup_lock",
}

export type RawTransaction = {
  "Timestamp (UTC)": UTCString;
  "Transaction Description": string;
  Currency: Symbol;
  Amount: string;
  "To Currency"?: Symbol | null;
  "To Amount"?: string | null;
  "Native Currency": "USD";
  "Native Amount": string;
  "Native Amount (in USD)": string;
  "Transaction Kind": TransactionKind;
};
