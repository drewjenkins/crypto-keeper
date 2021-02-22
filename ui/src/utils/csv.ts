import CSV from "../../data/crypto.csv";

export type TransactionKind =
  | "crypto_purchase"
  | "van_purchase"
  | "crypto_to_van_sell_order"
  | "dust_conversion_credited"
  | "dust_conversion_debited"
  | "crypto_earn_program_created"
  | "crypto_exchange"
  | "crypto_deposit"
  | "lockup_lock";

// prettier-ignore
export type Currency = "BTC" | "ETH" | "BNB" | "DOT" | "ADA" | "USDT" | "XRP" | "LTC" | "LINK" | "BCH" | "XLM" | "UNI" | "USDC" | "WBTC" | "DOGE" | "AAVE" | "EOS" | "XEM" | "XMR" | "HT" | "BSV" | "ATOM" | "TRX" | "MIOTA" | "NEO" | "XTZ" | "THETA" | "VET" | "CRO" | "FTT" | "DASH" | "GRT" | "AVAX" | "SOL" | "LUNA" | "SNX" | "MKR" | "ALGO" | "FIL" | "EGLD" | "DAI" | "SUSHI" | "BUSD" | "CAKE" | "COMP" | "DCR" | "KSM" | "ETC" | "ZEC" | "RVN" | "BTT" | "YFI" | "UMA" | "ZIL" | "LEO" | "REN" | "VGX" | "NEXO" | "CEL" | "WAVES" | "OKB" | "ICX" | "NEAR" | "ZRX" | "RUNE" | "ONT" | "DGB" | "HBAR" | "REV" | "RENBTC" | "CELO" | "NANO" | "OMG" | "LRC" | "BAT" | "MATIC" | "BNT" | "BTCB" | "ZEN" | "IOST" | "FTM" | "CHSB" | "1INCH" | "XVS" | "QTUM" | "DODO" | "PAX" | "CRV" | "SC" | "BTG" | "STX" | "HUSD" | "UST" | "NPXS" | "FLOW" | "OCEAN" | "RSR" | "LSK" | "HEDG" | "QNT" | "MANA" | "ENJ" | "TFUEL" | "EWT" | "KNC" | "GLM" | "HOT" | "XVG" | "REP" | "SNT" | "KCS" | "AMPL" | "NU" | "BAND" | "POLS" | "SCRT" | "BAL" | "TUSD" | "CVC" | "CHZ" | "HNT" | "ZB" | "SXP" | "ONE" | "KAVA" | "ALPHA" | "CKB" | "IOTX" | "SRM" | "AR" | "BCD" | "GNO" | "VAI" | "SWAP" | "INJ" | "OXT" | "ANT" | "FUN" | "FET" | "VTHO" | "STRAX" | "RIF" | "STORJ" | "SFI" | "UBT" | "POLY" | "ARDR" | "STEEM" | "KMD" | "MFT" | "UTK" | "ARK" | "GT" | "NMR" | "ANKR" | "DNT" | "RLC" | "ROSE" | "MAID" | "BTM" | "WAN" | "BTS" | "AGI" | "DENT" | "TEL" | "NOIA" | "MONA" | "ELF" | "TRAC" | "TOMO" | "STAKE" | "RDD" | "BORA" | "PROM" | "BADGER" | "JST" | "LOOM" | "COTI" | "WAXP" | "PAXG" | "CVT" | "ABBC" | "KIN" | "PPT" | "HIVE" | "ETN" | "IRIS" | "POWR" | "YFII" | "SYS" | "AVA" | "XHV" | "MX" | "CELR" | "AKRO" | "GAS" | "SHR" | "STMX" | "REEF" | "GUSD";
export type UTCString = string;

export type RawCrypto = {
  "Timestamp (UTC)": UTCString;
  "Transaction Description": string;
  Currency: Currency;
  Amount: number;
  "To Currency"?: Currency | null;
  "To Amount"?: number | null;
  "Native Currency": "USD";
  "Native Amount": number;
  "Native Amount (in USD)": number;
  "Transaction Kind": TransactionKind;
};

export default CSV as Array<RawCrypto>;
