import { CryptoName } from "../../types/index";

const cryptos: Array<CryptoName> = [
  {
    label: "Bitcoin",
    symbol: "BTC",
  },
  {
    label: "Ethereum",
    symbol: "ETH",
  },
  {
    label: "Tether",
    symbol: "USDT",
  },
  {
    label: "Binance Coin",
    symbol: "BNB",
  },
  {
    label: "Polkadot",
    symbol: "DOT",
  },
  {
    label: "Cardano",
    symbol: "ADA",
  },
  {
    label: "XRP",
    symbol: "XRP",
  },
  {
    label: "Litecoin",
    symbol: "LTC",
  },
  {
    label: "Chainlink",
    symbol: "LINK",
  },
  {
    label: "Bitcoin Cash",
    symbol: "BCH",
  },
  {
    label: "Stellar",
    symbol: "XLM",
  },
  {
    label: "USD Coin",
    symbol: "USDC",
  },
  {
    label: "Uniswap",
    symbol: "UNI",
  },
  {
    label: "Dogecoin",
    symbol: "DOGE",
  },
  {
    label: "Wrapped Bitcoin",
    symbol: "WBTC",
  },
  {
    label: "NEM",
    symbol: "XEM",
  },
  {
    label: "Cosmos",
    symbol: "ATOM",
  },
  {
    label: "Aave",
    symbol: "AAVE",
  },
  {
    label: "Solana",
    symbol: "SOL",
  },
  {
    label: "Crypto.com Coin",
    symbol: "CRO",
  },
  {
    label: "Monero",
    symbol: "XMR",
  },
  {
    label: "EOS",
    symbol: "EOS",
  },
  {
    label: "Huobi Token",
    symbol: "HT",
  },
  {
    label: "Bitcoin SV",
    symbol: "BSV",
  },
  {
    label: "TRON",
    symbol: "TRX",
  },
  {
    label: "THETA",
    symbol: "THETA",
  },
  {
    label: "IOTA",
    symbol: "MIOTA",
  },
  {
    label: "Terra",
    symbol: "LUNA",
  },
  {
    label: "Neo",
    symbol: "NEO",
  },
  {
    label: "Tezos",
    symbol: "XTZ",
  },
  {
    label: "FTX Token",
    symbol: "FTT",
  },
  {
    label: "VeChain",
    symbol: "VET",
  },
  {
    label: "Dai",
    symbol: "DAI",
  },
  {
    label: "Dash",
    symbol: "DASH",
  },
  {
    label: "Binance USD",
    symbol: "BUSD",
  },
  {
    label: "Maker",
    symbol: "MKR",
  },
  {
    label: "Avalanche",
    symbol: "AVAX",
  },
  {
    label: "Kusama",
    symbol: "KSM",
  },
  {
    label: "The Graph",
    symbol: "GRT",
  },
  {
    label: "Filecoin",
    symbol: "FIL",
  },
  {
    label: "Synthetix",
    symbol: "SNX",
  },
  {
    label: "UNUS SED LEO",
    symbol: "LEO",
  },
  {
    label: "Algorand",
    symbol: "ALGO",
  },
  {
    label: "Elrond",
    symbol: "EGLD",
  },
  {
    label: "SushiSwap",
    symbol: "SUSHI",
  },
  {
    label: "Compound",
    symbol: "COMP",
  },
  {
    label: "Decred",
    symbol: "DCR",
  },
  {
    label: "Ravencoin",
    symbol: "RVN",
  },
  {
    label: "PancakeSwap",
    symbol: "CAKE",
  },
  {
    label: "Zcash",
    symbol: "ZEC",
  },
  {
    label: "BitTorrent",
    symbol: "BTT",
  },
  {
    label: "Voyager Token",
    symbol: "VGX",
  },
  {
    label: "Ethereum Classic",
    symbol: "ETC",
  },
  {
    label: "Celsius",
    symbol: "CEL",
  },
  {
    label: "yearn.finance",
    symbol: "YFI",
  },
  {
    label: "UMA",
    symbol: "UMA",
  },
  {
    label: "Fantom",
    symbol: "FTM",
  },
  {
    label: "0x",
    symbol: "ZRX",
  },
  {
    label: "Zilliqa",
    symbol: "ZIL",
  },
  {
    label: "Nexo",
    symbol: "NEXO",
  },
  {
    label: "Revain",
    symbol: "REV",
  },
  {
    label: "Ren",
    symbol: "REN",
  },
  {
    label: "THORChain",
    symbol: "RUNE",
  },
  {
    label: "OKB",
    symbol: "OKB",
  },
  {
    label: "SwissBorg",
    symbol: "CHSB",
  },
  {
    label: "Waves",
    symbol: "WAVES",
  },
  {
    label: "NEAR Protocol",
    symbol: "NEAR",
  },
  {
    label: "renBTC",
    symbol: "RENBTC",
  },
  {
    label: "Hedera Hashgraph",
    symbol: "HBAR",
  },
  {
    label: "ICON",
    symbol: "ICX",
  },
  {
    label: "IOST",
    symbol: "IOST",
  },
  {
    label: "DigiByte",
    symbol: "DGB",
  },
  {
    label: "Ontology",
    symbol: "ONT",
  },
  {
    label: "Celo",
    symbol: "CELO",
  },
  {
    label: "Bancor",
    symbol: "BNT",
  },
  {
    label: "Paxos Standard",
    symbol: "PAX",
  },
  {
    label: "Bitcoin BEP2",
    symbol: "BTCB",
  },
  {
    label: "Basic Attention Token",
    symbol: "BAT",
  },
  {
    label: "Nano",
    symbol: "NANO",
  },
  {
    label: "Polygon",
    symbol: "MATIC",
  },
  {
    label: "Loopring",
    symbol: "LRC",
  },
  {
    label: "HUSD",
    symbol: "HUSD",
  },
  {
    label: "OMG Network",
    symbol: "OMG",
  },
  {
    label: "TerraUSD",
    symbol: "UST",
  },
  {
    label: "Pundi X",
    symbol: "NPXS",
  },
  {
    label: "Stacks",
    symbol: "STX",
  },
  {
    label: "Horizen",
    symbol: "ZEN",
  },
  {
    label: "Venus",
    symbol: "XVS",
  },
  {
    label: "Holo",
    symbol: "HOT",
  },
  {
    label: "1inch",
    symbol: "1INCH",
  },
  {
    label: "Flow (Dapper Labs)",
    symbol: "FLOW",
  },
  {
    label: "Qtum",
    symbol: "QTUM",
  },
  {
    label: "Curve DAO Token",
    symbol: "CRV",
  },
  {
    label: "Siacoin",
    symbol: "SC",
  },
  {
    label: "Bitcoin Gold",
    symbol: "BTG",
  },
  {
    label: "DODO",
    symbol: "DODO",
  },
  {
    label: "Quant",
    symbol: "QNT",
  },
  {
    label: "Theta Fuel",
    symbol: "TFUEL",
  },
  {
    label: "HedgeTrade",
    symbol: "HEDG",
  },
  {
    label: "KuCoin Token",
    symbol: "KCS",
  },
  {
    label: "Reserve Rights",
    symbol: "RSR",
  },
  {
    label: "Energy Web Token",
    symbol: "EWT",
  },
  {
    label: "Ocean Protocol",
    symbol: "OCEAN",
  },
  {
    label: "Decentraland",
    symbol: "MANA",
  },
  {
    label: "Enjin Coin",
    symbol: "ENJ",
  },
  {
    label: "TrueUSD",
    symbol: "TUSD",
  },
  {
    label: "Serum",
    symbol: "SRM",
  },
  {
    label: "Kyber Network",
    symbol: "KNC",
  },
  {
    label: "Lisk",
    symbol: "LSK",
  },
  {
    label: "Verge",
    symbol: "XVG",
  },
  {
    label: "Golem",
    symbol: "GLM",
  },
  {
    label: "Ampleforth",
    symbol: "AMPL",
  },
  {
    label: "NuCypher",
    symbol: "NU",
  },
  {
    label: "Status",
    symbol: "SNT",
  },
  {
    label: "Augur",
    symbol: "REP",
  },
  {
    label: "Band Protocol",
    symbol: "BAND",
  },
  {
    label: "Secret",
    symbol: "SCRT",
  },
  {
    label: "Balancer",
    symbol: "BAL",
  },
  {
    label: "Polkastarter",
    symbol: "POLS",
  },
  {
    label: "Helium",
    symbol: "HNT",
  },
  {
    label: "Civic",
    symbol: "CVC",
  },
  {
    label: "Arweave",
    symbol: "AR",
  },
  {
    label: "Chiliz",
    symbol: "CHZ",
  },
  {
    label: "TrustSwap",
    symbol: "SWAP",
  },
  {
    label: "Alpha Finance Lab",
    symbol: "ALPHA",
  },
  {
    label: "Injective Protocol",
    symbol: "INJ",
  },
  {
    label: "IoTeX",
    symbol: "IOTX",
  },
  {
    label: "ZB Token",
    symbol: "ZB",
  },
  {
    label: "Nervos Network",
    symbol: "CKB",
  },
  {
    label: "Gnosis",
    symbol: "GNO",
  },
  {
    label: "Harmony",
    symbol: "ONE",
  },
  {
    label: "Kava.io",
    symbol: "KAVA",
  },
  {
    label: "Swipe",
    symbol: "SXP",
  },
  {
    label: "Orchid",
    symbol: "OXT",
  },
  {
    label: "Aragon",
    symbol: "ANT",
  },
  {
    label: "Unibright",
    symbol: "UBT",
  },
  {
    label: "Vai",
    symbol: "VAI",
  },
  {
    label: "Numeraire",
    symbol: "NMR",
  },
  {
    label: "Bitcoin Diamond",
    symbol: "BCD",
  },
  {
    label: "FunFair",
    symbol: "FUN",
  },
  {
    label: "saffron.finance",
    symbol: "SFI",
  },
  {
    label: "RSK Infrastructure Framework",
    symbol: "RIF",
  },
  {
    label: "Telcoin",
    symbol: "TEL",
  },
  {
    label: "Fetch.ai",
    symbol: "FET",
  },
  {
    label: "Kin",
    symbol: "KIN",
  },
  {
    label: "MaidSafeCoin",
    symbol: "MAID",
  },
  {
    label: "OriginTrail",
    symbol: "TRAC",
  },
  {
    label: "VeThor Token",
    symbol: "VTHO",
  },
  {
    label: "Ankr",
    symbol: "ANKR",
  },
  {
    label: "Oasis Network",
    symbol: "ROSE",
  },
  {
    label: "Dent",
    symbol: "DENT",
  },
  {
    label: "Syntropy",
    symbol: "NOIA",
  },
  {
    label: "Stratis",
    symbol: "STRAX",
  },
  {
    label: "Komodo",
    symbol: "KMD",
  },
  {
    label: "TomoChain",
    symbol: "TOMO",
  },
  {
    label: "Utrust",
    symbol: "UTK",
  },
  {
    label: "Polymath",
    symbol: "POLY",
  },
  {
    label: "Ardor",
    symbol: "ARDR",
  },
  {
    label: "district0x",
    symbol: "DNT",
  },
  {
    label: "Storj",
    symbol: "STORJ",
  },
  {
    label: "BitShares",
    symbol: "BTS",
  },
  {
    label: "Ark",
    symbol: "ARK",
  },
  {
    label: "BORA",
    symbol: "BORA",
  },
  {
    label: "Steem",
    symbol: "STEEM",
  },
  {
    label: "PAX Gold",
    symbol: "PAXG",
  },
  {
    label: "xDai",
    symbol: "STAKE",
  },
  {
    label: "SingularityNET",
    symbol: "AGI",
  },
  {
    label: "MonaCoin",
    symbol: "MONA",
  },
  {
    label: "Hifi Finance",
    symbol: "MFT",
  },
  {
    label: "Wanchain",
    symbol: "WAN",
  },
  {
    label: "Bytom",
    symbol: "BTM",
  },
  {
    label: "GateToken",
    symbol: "GT",
  },
  {
    label: "WAX",
    symbol: "WAXP",
  },
  {
    label: "aelf",
    symbol: "ELF",
  },
  {
    label: "ReddCoin",
    symbol: "RDD",
  },
  {
    label: "CyberVein",
    symbol: "CVT",
  },
  {
    label: "COTI",
    symbol: "COTI",
  },
  {
    label: "ABBC Coin",
    symbol: "ABBC",
  },
  {
    label: "Gemini Dollar",
    symbol: "GUSD",
  },
  {
    label: "iExec RLC",
    symbol: "RLC",
  },
  {
    label: "Travala.com",
    symbol: "AVA",
  },
  {
    label: "Loom Network",
    symbol: "LOOM",
  },
  {
    label: "MX Token",
    symbol: "MX",
  },
  {
    label: "IRISnet",
    symbol: "IRIS",
  },
  {
    label: "Electroneum",
    symbol: "ETN",
  },
  {
    label: "Handshake",
    symbol: "HNS",
  },
  {
    label: "Request",
    symbol: "REQ",
  },
  {
    label: "JUST",
    symbol: "JST",
  },
  {
    label: "Badger DAO",
    symbol: "BADGER",
  },
  {
    label: "Haven Protocol",
    symbol: "XHV",
  },
  {
    label: "Reef",
    symbol: "REEF",
  },
  {
    label: "Uquid Coin",
    symbol: "UQC",
  },
  {
    label: "Energi",
    symbol: "NRG",
  },
  {
    label: "Populous",
    symbol: "PPT",
  },
  {
    label: "Prometeus",
    symbol: "PROM",
  },
  {
    label: "Morpheus.Network",
    symbol: "MRPH",
  },
  {
    label: "Power Ledger",
    symbol: "POWR",
  },
  {
    label: "Hive",
    symbol: "HIVE",
  },
  {
    label: "DFI.Money",
    symbol: "YFII",
  },
  {
    label: "Syscoin",
    symbol: "SYS",
  },
  {
    label: "Bridge Oracle",
    symbol: "BRG",
  },
  {
    label: "Creditcoin",
    symbol: "CTC",
  },
  {
    label: "Counos X",
    symbol: "CCXX",
  },
  {
    label: "HEX",
    symbol: "HEX",
  },
  {
    label: "DeFiChain",
    symbol: "DFI",
  },
  {
    label: "Wrapped BNB",
    symbol: "WBNB",
  },
  {
    label: "INO COIN",
    symbol: "INO",
  },
  {
    label: "ThoreCoin",
    symbol: "THR",
  },
  {
    label: "ZKSwap",
    symbol: "ZKS",
  },
  {
    label: "Insight Chain",
    symbol: "INB",
  },
  {
    label: "Venus BNB",
    symbol: "vBNB",
  },
  {
    label: "NXM",
    symbol: "NXM",
  },
  {
    label: "IZE",
    symbol: "IZE",
  },
  {
    label: "Zelwin",
    symbol: "ZLW",
  },
  {
    label: "BitMax Token",
    symbol: "BTMX",
  },
  {
    label: "Bitpanda Ecosystem Token",
    symbol: "BEST",
  },
  {
    label: "XinFin Network",
    symbol: "XDC",
  },
  {
    label: "Cipher Core Token",
    symbol: "CIPHC",
  },
  {
    label: "Venus XVS",
    symbol: "vXVS",
  },
  {
    label: "stETH (Lido)",
    symbol: "STETH",
  },
  {
    label: "Bitcoin Cash ABC",
    symbol: "BCHA",
  },
  {
    label: "GNY",
    symbol: "GNY",
  },
  {
    label: "botXcoin",
    symbol: "BOTX",
  },
  {
    label: "Huobi BTC",
    symbol: "HBTC",
  },
  {
    label: "Amp",
    symbol: "AMP",
  },
  {
    label: "The Transfer Token",
    symbol: "TTT",
  },
  {
    label: "Mirror Protocol",
    symbol: "MIR",
  },
  {
    label: "WhiteCoin",
    symbol: "XWC",
  },
  {
    label: "BakeryToken",
    symbol: "BAKE",
  },
  {
    label: "DerivaDAO",
    symbol: "DDX",
  },
  {
    label: "Venus BTC",
    symbol: "vBTC",
  },
  {
    label: "SafePal",
    symbol: "SFP",
  },
  {
    label: "MimbleWimbleCoin",
    symbol: "MWC",
  },
  {
    label: "Akash Network",
    symbol: "AKT",
  },
  {
    label: "Orion Protocol",
    symbol: "ORN",
  },
  {
    label: "Eauric",
    symbol: "EAURIC",
  },
  {
    label: "Sologenic",
    symbol: "SOLO",
  },
  {
    label: "Largo Coin",
    symbol: "LRG",
  },
  {
    label: "CoinMetro Token",
    symbol: "XCM",
  },
  {
    label: "RedFOX Labs",
    symbol: "RFOX",
  },
  {
    label: "MATH",
    symbol: "MATH",
  },
  {
    label: "Idea Chain Coin",
    symbol: "ICH",
  },
  {
    label: "Neutrino USD",
    symbol: "USDN",
  },
  {
    label: "Keep Network",
    symbol: "KEEP",
  },
  {
    label: "The Sandbox",
    symbol: "SAND",
  },
  {
    label: "Trust Wallet Token",
    symbol: "TWT",
  },
  {
    label: "Elitium",
    symbol: "EUM",
  },
  {
    label: "Doctors Coin",
    symbol: "DRS",
  },
  {
    label: "sUSD",
    symbol: "SUSD",
  },
  {
    label: "PARSIQ",
    symbol: "PRQ",
  },
  {
    label: "Hathor",
    symbol: "HTR",
  },
  {
    label: "Sora",
    symbol: "XOR",
  },
  {
    label: "SKALE Network",
    symbol: "SKL",
  },
  {
    label: "Perpetual Protocol",
    symbol: "PERP",
  },
  {
    label: "Linear",
    symbol: "LINA",
  },
  {
    label: "Litentry",
    symbol: "LIT",
  },
  {
    label: "GreenPower",
    symbol: "GRN",
  },
  {
    label: "Raydium",
    symbol: "RAY",
  },
  {
    label: "NFTX",
    symbol: "NFTX",
  },
  {
    label: "Cashaa",
    symbol: "CAS",
  },
  {
    label: "Bloomzed Loyalty Club Ticket",
    symbol: "BLCT",
  },
  {
    label: "NewYork Exchange",
    symbol: "NYE",
  },
  {
    label: "Harvest Finance",
    symbol: "FARM",
  },
  {
    label: "Hegic",
    symbol: "HEGIC",
  },
  {
    label: "Hellenic Coin",
    symbol: "HNC",
  },
  {
    label: "Massnet",
    symbol: "MASS",
  },
  {
    label: "Gala",
    symbol: "GALA",
  },
  {
    label: "Mobilian Coin",
    symbol: "MBN",
  },
  {
    label: "Chimpion",
    symbol: "BNANA",
  },
  {
    label: "Edgeware",
    symbol: "EDG",
  },
  {
    label: "XeniosCoin",
    symbol: "XNC",
  },
  {
    label: "YUSRA",
    symbol: "YUSRA",
  },
  {
    label: "Venus USDC",
    symbol: "vUSDC",
  },
  {
    label: "Sapphire",
    symbol: "SAPP",
  },
  {
    label: "JustLiquidity",
    symbol: "JUL",
  },
  {
    label: "Tornado Cash",
    symbol: "TORN",
  },
  {
    label: "Multiplier",
    symbol: "MXX",
  },
  {
    label: "Beldex",
    symbol: "BDX",
  },
  {
    label: "Rari Governance Token",
    symbol: "RGT",
  },
  {
    label: "Auto",
    symbol: "AUTO",
  },
  {
    label: "Orbit Chain",
    symbol: "ORC",
  },
  {
    label: "DIGG",
    symbol: "DIGG",
  },
  {
    label: "Frax",
    symbol: "FRAX",
  },
  {
    label: "Rocket Pool",
    symbol: "RPL",
  },
  {
    label: "Swingby",
    symbol: "SWINGBY",
  },
  {
    label: "Beefy.Finance",
    symbol: "BIFI",
  },
  {
    label: "Burger Swap",
    symbol: "BURGER",
  },
  {
    label: "Mixin",
    symbol: "XIN",
  },
  {
    label: "JulSwap",
    symbol: "JULD",
  },
  {
    label: "Bytecoin",
    symbol: "BCN",
  },
  {
    label: "Celer Network",
    symbol: "CELR",
  },
  {
    label: "Livepeer",
    symbol: "LPT",
  },
  {
    label: "AllianceBlock",
    symbol: "ALBT",
  },
  {
    label: "Akropolis",
    symbol: "AKRO",
  },
  {
    label: "Attila",
    symbol: "ATT",
  },
  {
    label: "BarnBridge",
    symbol: "BOND",
  },
  {
    label: "DuckDaoDime",
    symbol: "DDIM",
  },
  {
    label: "Aion",
    symbol: "AION",
  },
  {
    label: "Nexus",
    symbol: "NXS",
  },
  {
    label: "ShareToken",
    symbol: "SHR",
  },
  {
    label: "Cream Finance",
    symbol: "CREAM",
  },
  {
    label: "RChain",
    symbol: "REV",
  },
  {
    label: "Wrapped NXM",
    symbol: "WNXM",
  },
  {
    label: "Velas",
    symbol: "VLX",
  },
  {
    label: "LTO Network",
    symbol: "LTO",
  },
  {
    label: "yOUcash",
    symbol: "YOUC",
  },
  {
    label: "PIVX",
    symbol: "PIVX",
  },
  {
    label: "Frontier",
    symbol: "FRONT",
  },
  {
    label: "Spartan Protocol",
    symbol: "SPARTA",
  },
  {
    label: "HARD Protocol",
    symbol: "HARD",
  },
  {
    label: "NEST Protocol",
    symbol: "NEST",
  },
  {
    label: "Hxro",
    symbol: "HXRO",
  },
  {
    label: "StormX",
    symbol: "STMX",
  },
  {
    label: "Vitae",
    symbol: "VITAE",
  },
  {
    label: "WHALE",
    symbol: "WHALE",
  },
  {
    label: "Ergo",
    symbol: "ERG",
  },
  {
    label: "SparkPoint",
    symbol: "SRK",
  },
  {
    label: "Qcash",
    symbol: "QC",
  },
  {
    label: "QuarkChain",
    symbol: "QKC",
  },
  {
    label: "Empty Set Dollar",
    symbol: "ESD",
  },
  {
    label: "LBRY Credits",
    symbol: "LBC",
  },
  {
    label: "Ultra",
    symbol: "UOS",
  },
  {
    label: "ChainX",
    symbol: "PCX",
  },
  {
    label: "Anyswap",
    symbol: "ANY",
  },
  {
    label: "AXEL",
    symbol: "AXEL",
  },
  {
    label: "Origin Protocol",
    symbol: "OGN",
  },
  {
    label: "Aidos Kuneen",
    symbol: "ADK",
  },
  {
    label: "Wootrade",
    symbol: "WOO",
  },
  {
    label: "Ferrum Network",
    symbol: "FRM",
  },
  {
    label: "Divi",
    symbol: "DIVI",
  },
  {
    label: "bZx Protocol",
    symbol: "BZRX",
  },
  {
    label: "Streamr",
    symbol: "DATA",
  },
  {
    label: "Spendcoin",
    symbol: "SPND",
  },
  {
    label: "Basid Coin",
    symbol: "BASID",
  },
  {
    label: "DxChain Token",
    symbol: "DX",
  },
  {
    label: "DAO Maker",
    symbol: "DAO",
  },
  {
    label: "Gas",
    symbol: "GAS",
  },
  {
    label: "Everest",
    symbol: "ID",
  },
  {
    label: "Everipedia",
    symbol: "IQ",
  },
  {
    label: "WazirX",
    symbol: "WRX",
  },
  {
    label: "Unifi Protocol DAO",
    symbol: "UNFI",
  },
  {
    label: "AdEx Network",
    symbol: "ADX",
  },
  {
    label: "SUN",
    symbol: "SUN",
  },
  {
    label: "Venus ETH",
    symbol: "vETH",
  },
  {
    label: "Huobi Pool Token",
    symbol: "HPT",
  },
  {
    label: "Sport and Leisure",
    symbol: "SNL",
  },
  {
    label: "MVL",
    symbol: "MVL",
  },
  {
    label: "WINk",
    symbol: "WIN",
  },
  {
    label: "BOSAGORA",
    symbol: "BOA",
  },
  {
    label: "Rewardiqa",
    symbol: "REW",
  },
  {
    label: "API3",
    symbol: "API3",
  },
  {
    label: "EFFORCE",
    symbol: "WOZX",
  },
  {
    label: "COVER Protocol",
    symbol: "COVER",
  },
  {
    label: "Phala.Network",
    symbol: "PHA",
  },
  {
    label: "Waltonchain",
    symbol: "WTC",
  },
  {
    label: "Poseidon Network",
    symbol: "QQQ",
  },
  {
    label: "Atari Token",
    symbol: "ATRI",
  },
  {
    label: "DIA",
    symbol: "DIA",
  },
  {
    label: "Metacoin",
    symbol: "MTC",
  },
  {
    label: "PAID Network",
    symbol: "PAID",
  },
  {
    label: "TROY",
    symbol: "TROY",
  },
  {
    label: "Firo",
    symbol: "FIRO",
  },
  {
    label: "Darma Cash",
    symbol: "DMCH",
  },
  {
    label: "Elastos",
    symbol: "ELA",
  },
  {
    label: "Minter Network",
    symbol: "BIP",
  },
  {
    label: "Pirate Chain",
    symbol: "ARRR",
  },
  {
    label: "STASIS EURO",
    symbol: "EURS",
  },
  {
    label: "KardiaChain",
    symbol: "KAI",
  },
  {
    label: "Telos",
    symbol: "TLOS",
  },
  {
    label: "Enzyme",
    symbol: "MLN",
  },
  {
    label: "Venus BUSD",
    symbol: "vBUSD",
  },
  {
    label: "BTU Protocol",
    symbol: "BTU",
  },
  {
    label: "Oraichain Token",
    symbol: "ORAI",
  },
  {
    label: "Dusk Network",
    symbol: "DUSK",
  },
  {
    label: "Orbs",
    symbol: "ORBS",
  },
  {
    label: "Centrality",
    symbol: "CENNZ",
  },
  {
    label: "Thunder Token",
    symbol: "TT",
  },
  {
    label: "Bondly",
    symbol: "BONDLY",
  },
  {
    label: "Axie Infinity",
    symbol: "AXS",
  },
  {
    label: "Klever",
    symbol: "KLV",
  },
  {
    label: "Bitball Treasure",
    symbol: "BTRS",
  },
  {
    label: "CertiK",
    symbol: "CTK",
  },
  {
    label: "SOLVE",
    symbol: "SOLVE",
  },
  {
    label: "Frax Share",
    symbol: "FXS",
  },
  {
    label: "Tellor",
    symbol: "TRB",
  },
  {
    label: "Marlin",
    symbol: "POND",
  },
  {
    label: "Tokenlon Network Token",
    symbol: "LON",
  },
  {
    label: "USDX [Kava]",
    symbol: "USDX",
  },
  {
    label: "WaykiChain",
    symbol: "WICC",
  },
  {
    label: "Keep3rV1",
    symbol: "KP3R",
  },
  {
    label: "Ignis",
    symbol: "IGNIS",
  },
  {
    label: "MANTRA DAO",
    symbol: "OM",
  },
  {
    label: "MXC",
    symbol: "MXC",
  },
  {
    label: "PowerPool",
    symbol: "CVP",
  },
  {
    label: "Metal",
    symbol: "MTL",
  },
  {
    label: "Aeternity",
    symbol: "AE",
  },
  {
    label: "Flamingo",
    symbol: "FLM",
  },
  {
    label: "MAPS",
    symbol: "MAPS",
  },
  {
    label: "Zap",
    symbol: "ZAP",
  },
  {
    label: "Bounce Token",
    symbol: "BOT",
  },
  {
    label: "APY.Finance",
    symbol: "APY",
  },
  {
    label: "NULS",
    symbol: "NULS",
  },
  {
    label: "Audius",
    symbol: "AUDIO",
  },
  {
    label: "mStable USD",
    symbol: "MUSD",
  },
  {
    label: "MCO",
    symbol: "MCO",
  },
  {
    label: "Goose Finance",
    symbol: "EGG",
  },
  {
    label: "Nimiq",
    symbol: "NIM",
  },
  {
    label: "TrueFi",
    symbol: "TRU",
  },
  {
    label: "The Midas Touch Gold",
    symbol: "TMTG",
  },
  {
    label: "Switcheo",
    symbol: "SWTH",
  },
  {
    label: "RAMP",
    symbol: "RAMP",
  },
  {
    label: "Beam",
    symbol: "BEAM",
  },
  {
    label: "ankrETH",
    symbol: "aEth",
  },
  {
    label: "Duck DAO (DLP Duck Token)",
    symbol: "DUCK",
  },
  {
    label: "BigONE Token",
    symbol: "ONE",
  },
  {
    label: "Aavegotchi",
    symbol: "GHST",
  },
  {
    label: "Oxen",
    symbol: "LOKI",
  },
  {
    label: "Zenon",
    symbol: "ZNN",
  },
  {
    label: "cVault.finance",
    symbol: "CORE",
  },
  {
    label: "Einsteinium",
    symbol: "EMC2",
  },
  {
    label: "TitanSwap",
    symbol: "TITAN",
  },
  {
    label: "OptionRoom",
    symbol: "ROOM",
  },
  {
    label: "inSure DeFi",
    symbol: "SURE",
  },
  {
    label: "HyperCash",
    symbol: "HC",
  },
  {
    label: "Waves Enterprise",
    symbol: "WEST",
  },
  {
    label: "Etherisc DIP Token",
    symbol: "DIP",
  },
  {
    label: "Opium",
    symbol: "OPIUM",
  },
  {
    label: "OctoFi",
    symbol: "OCTO",
  },
  {
    label: "Bella Protocol",
    symbol: "BEL",
  },
  {
    label: "Cartesi",
    symbol: "CTSI",
  },
  {
    label: "Bonfida",
    symbol: "FIDA",
  },
  {
    label: "Darwinia Network",
    symbol: "RING",
  },
  {
    label: "Carry",
    symbol: "CRE",
  },
  {
    label: "Celo Dollar",
    symbol: "CUSD",
  },
  {
    label: "Gleec",
    symbol: "GLEEC",
  },
  {
    label: "Bao Finance",
    symbol: "BAO",
  },
  {
    label: "12Ships",
    symbol: "TSHP",
  },
  {
    label: "UniLend",
    symbol: "UFT",
  },
  {
    label: "Kadena",
    symbol: "KDA",
  },
  {
    label: "Stakenet",
    symbol: "XSN",
  },
  {
    label: "Contentos",
    symbol: "COS",
  },
  {
    label: "Meta",
    symbol: "MTA",
  },
  {
    label: "Groestlcoin",
    symbol: "GRS",
  },
  {
    label: "v.systems",
    symbol: "VSYS",
  },
  {
    label: "TerraKRW",
    symbol: "KRT",
  },
  {
    label: "Dragonchain",
    symbol: "DRGN",
  },
  {
    label: "Fusion",
    symbol: "FSN",
  },
  {
    label: "Selfkey",
    symbol: "KEY",
  },
  {
    label: "Wirex Token",
    symbol: "WXT",
  },
  {
    label: "dForce",
    symbol: "DF",
  },
  {
    label: "Render Token",
    symbol: "RNDR",
  },
  {
    label: "Skycoin",
    symbol: "SKY",
  },
  {
    label: "Bluzelle",
    symbol: "BLZ",
  },
  {
    label: "Kleros",
    symbol: "PNK",
  },
  {
    label: "MINDOL",
    symbol: "MIN",
  },
  {
    label: "Cortex",
    symbol: "CTXC",
  },
  {
    label: "Bankera",
    symbol: "BNK",
  },
  {
    label: "GXChain",
    symbol: "GXC",
  },
  {
    label: "Lambda",
    symbol: "LAMB",
  },
  {
    label: "Rubic",
    symbol: "RBC",
  },
  {
    label: "DigixDAO",
    symbol: "DGD",
  },
  {
    label: "Apollo Currency",
    symbol: "APL",
  },
  {
    label: "Ripio Credit Network",
    symbol: "RCN",
  },
  {
    label: "suterusu",
    symbol: "SUTER",
  },
  {
    label: "Unistake",
    symbol: "UNISTAKE",
  },
  {
    label: "Nxt",
    symbol: "NXT",
  },
  {
    label: "Standard Tokenization Protocol",
    symbol: "STPT",
  },
  {
    label: "DEXTools",
    symbol: "DEXT",
  },
  {
    label: "pNetwork",
    symbol: "PNT",
  },
  {
    label: "Bithao",
    symbol: "BHAO",
  },
  {
    label: "STEM CELL COIN",
    symbol: "SCC",
  },
  {
    label: "Constellation",
    symbol: "DAG",
  },
  {
    label: "MediBloc",
    symbol: "MED",
  },
  {
    label: "Cindicator",
    symbol: "CND",
  },
  {
    label: "TNC Coin",
    symbol: "TNC",
  },
  {
    label: "Neblio",
    symbol: "NEBL",
  },
  {
    label: "Neutrino Token",
    symbol: "NSBT",
  },
  {
    label: "LGO Token",
    symbol: "LGO",
  },
  {
    label: "Veritaseum",
    symbol: "VERI",
  },
  {
    label: "Function X",
    symbol: "FX",
  },
  {
    label: "ARPA Chain",
    symbol: "ARPA",
  },
  {
    label: "1irstcoin",
    symbol: "FST",
  },
  {
    label: "Decentralized Vulnerability Platform",
    symbol: "DVP",
  },
  {
    label: "Venus USDT",
    symbol: "vUSDT",
  },
  {
    label: "Super Zero Protocol",
    symbol: "SERO",
  },
  {
    label: "IDEX",
    symbol: "IDEX",
  },
  {
    label: "Vertcoin",
    symbol: "VTC",
  },
  {
    label: "SIRIN LABS Token",
    symbol: "SRN",
  },
  {
    label: "Nexalt",
    symbol: "XLT",
  },
  {
    label: "Terra Virtua Kolect",
    symbol: "TVK",
  },
  {
    label: "Meme",
    symbol: "MEME",
  },
  {
    label: "REVV",
    symbol: "REVV",
  },
  {
    label: "VerusCoin",
    symbol: "VRSC",
  },
  {
    label: "AirSwap",
    symbol: "AST",
  },
  {
    label: "USDK",
    symbol: "USDK",
  },
  {
    label: "ArdCoin",
    symbol: "ARDX",
  },
  {
    label: "Quantstamp",
    symbol: "QSP",
  },
  {
    label: "88mph",
    symbol: "MPH",
  },
  {
    label: "Phantasma",
    symbol: "SOUL",
  },
  {
    label: "Nebulas",
    symbol: "NAS",
  },
  {
    label: "Cocos-BCX",
    symbol: "COCOS",
  },
  {
    label: "Shopping",
    symbol: "SPI",
  },
  {
    label: "Sentinel Protocol",
    symbol: "UPP",
  },
  {
    label: "PIBBLE",
    symbol: "PIB",
  },
  {
    label: "Grin",
    symbol: "GRIN",
  },
  {
    label: "Effect.AI",
    symbol: "EFX",
  },
  {
    label: "Whiteheart",
    symbol: "WHITE",
  },
  {
    label: "Namecoin",
    symbol: "NMC",
  },
  {
    label: "PumaPay",
    symbol: "PMA",
  },
  {
    label: "RSK Smart Bitcoin",
    symbol: "RBTC",
  },
  {
    label: "Berry Data",
    symbol: "BRY",
  },
  {
    label: "Anchor Neural World",
    symbol: "ANW",
  },
  {
    label: "KLAYswap Protocol",
    symbol: "KSP",
  },
  {
    label: "Ultiledger",
    symbol: "ULT",
  },
  {
    label: "Basis Cash",
    symbol: "BAC",
  },
  {
    label: "Aleph.im",
    symbol: "ALEPH",
  },
  {
    label: "Measurable Data Token",
    symbol: "MDT",
  },
  {
    label: "EasyFi",
    symbol: "EASY",
  },
  {
    label: "LATOKEN",
    symbol: "LA",
  },
  {
    label: "PEAKDEFI",
    symbol: "PEAK",
  },
  {
    label: "BitZ Token",
    symbol: "BZ",
  },
  {
    label: "Ducato Protocol Token",
    symbol: "DUCATO",
  },
  {
    label: "BitKan",
    symbol: "KAN",
  },
  {
    label: "Refereum",
    symbol: "RFR",
  },
  {
    label: "Obyte",
    symbol: "GBYTE",
  },
  {
    label: "VIDT Datalink",
    symbol: "VIDT",
  },
  {
    label: "Robonomics.network",
    symbol: "XRT",
  },
  {
    label: "Aergo",
    symbol: "AERGO",
  },
  {
    label: "Phoenix Global",
    symbol: "PHB",
  },
  {
    label: "Endor Protocol",
    symbol: "EDR",
  },
  {
    label: "Quantum Resistant Ledger",
    symbol: "QRL",
  },
  {
    label: "Navcoin",
    symbol: "NAV",
  },
  {
    label: "FIO Protocol",
    symbol: "FIO",
  },
  {
    label: "LGCY Network",
    symbol: "LGCY",
  },
  {
    label: "NKN",
    symbol: "NKN",
  },
  {
    label: "PAC Global",
    symbol: "PAC",
  },
  {
    label: "DAD",
    symbol: "DAD",
  },
  {
    label: "DREP",
    symbol: "DREP",
  },
  {
    label: "Finxflo",
    symbol: "FXF",
  },
  {
    label: "BitcoinPoS",
    symbol: "BPS",
  },
  {
    label: "Hermez Network",
    symbol: "HEZ",
  },
  {
    label: "Dero",
    symbol: "DERO",
  },
  {
    label: "Sentivate",
    symbol: "SNTVT",
  },
  {
    label: "0Chain",
    symbol: "ZCN",
  },
  {
    label: "Presearch",
    symbol: "PRE",
  },
  {
    label: "BnkToTheFuture",
    symbol: "BFT",
  },
  {
    label: "Metronome",
    symbol: "MET",
  },
  {
    label: "CryptalDash",
    symbol: "CRD",
  },
  {
    label: "Nash Exchange",
    symbol: "NEX",
  },
  {
    label: "Rio DeFi",
    symbol: "RFUEL",
  },
  {
    label: "Proton",
    symbol: "XPR",
  },
  {
    label: "ASTA",
    symbol: "ASTA",
  },
  {
    label: "Perlin",
    symbol: "PERL",
  },
  {
    label: "Prosper",
    symbol: "PROS",
  },
  {
    label: "Aurora",
    symbol: "AOA",
  },
  {
    label: "Dego Finance",
    symbol: "DEGO",
  },
  {
    label: "BASIC",
    symbol: "BASIC",
  },
  {
    label: "Wing",
    symbol: "WING",
  },
  {
    label: "Rakon",
    symbol: "RKN",
  },
  {
    label: "StableXSwap",
    symbol: "STAX",
  },
  {
    label: "Homeros",
    symbol: "HMR",
  },
  {
    label: "Aryacoin",
    symbol: "AYA",
  },
  {
    label: "Crypterium",
    symbol: "CRPT",
  },
  {
    label: "Molecular Future",
    symbol: "MOF",
  },
  {
    label: "BoringDAO",
    symbol: "BOR",
  },
  {
    label: "Bridge Mutual",
    symbol: "BMI",
  },
  {
    label: "QASH",
    symbol: "QASH",
  },
  {
    label: "Invictus Hyperion Fund",
    symbol: "IHF",
  },
  {
    label: "Decentr",
    symbol: "DEC",
  },
  {
    label: "GeoDB",
    symbol: "GEO",
  },
  {
    label: "Raiden Network Token",
    symbol: "RDN",
  },
  {
    label: "Counos Coin",
    symbol: "CCA",
  },
  {
    label: "Helmet.insure",
    symbol: "HELMET",
  },
  {
    label: "Xensor",
    symbol: "XSR",
  },
  {
    label: "ZEON",
    symbol: "ZEON",
  },
  {
    label: "TenX",
    symbol: "PAY",
  },
  {
    label: "DigitalBits",
    symbol: "XDB",
  },
  {
    label: "YIELD App",
    symbol: "YLD",
  },
  {
    label: "Metaverse Dualchain Network Architecture",
    symbol: "DNA",
  },
  {
    label: "Steem Dollars",
    symbol: "SBD",
  },
  {
    label: "SpaceChain",
    symbol: "SPC",
  },
  {
    label: "Chromia",
    symbol: "CHR",
  },
  {
    label: "SALT",
    symbol: "SALT",
  },
  {
    label: "WOM Protocol",
    symbol: "WOM",
  },
  {
    label: "DeXe",
    symbol: "DEXE",
  },
  {
    label: "Morpheus Labs",
    symbol: "MITX",
  },
  {
    label: "ZeroSwap",
    symbol: "ZEE",
  },
  {
    label: "Sentinel",
    symbol: "SENT",
  },
  {
    label: "MiL.k",
    symbol: "MLK",
  },
  {
    label: "Decentral Games",
    symbol: "DG",
  },
  {
    label: "ForTube",
    symbol: "FOR",
  },
  {
    label: "GoChain",
    symbol: "GO",
  },
  {
    label: "Kira Network",
    symbol: "KEX",
  },
  {
    label: "NerveNetwork",
    symbol: "NVT",
  },
  {
    label: "Elamachain",
    symbol: "ELAMA",
  },
  {
    label: "Dock",
    symbol: "DOCK",
  },
  {
    label: "FC Barcelona Fan Token",
    symbol: "BAR",
  },
  {
    label: "LUKSO",
    symbol: "LYXe",
  },
  {
    label: "dKargo",
    symbol: "DKA",
  },
  {
    label: "Moeda Loyalty Points",
    symbol: "MDA",
  },
  {
    label: "SUKU",
    symbol: "SUKU",
  },
  {
    label: "DMarket",
    symbol: "DMT",
  },
  {
    label: "Pickle Finance",
    symbol: "PICKLE",
  },
  {
    label: "ARMOR",
    symbol: "ARMOR",
  },
  {
    label: "PRIZM",
    symbol: "PZM",
  },
  {
    label: "dHedge DAO",
    symbol: "DHT",
  },
  {
    label: "Vesper",
    symbol: "VSP",
  },
  {
    label: "CONTRACOIN",
    symbol: "CTCN",
  },
  {
    label: "Tixl",
    symbol: "TXL",
  },
  {
    label: "Mithril",
    symbol: "MITH",
  },
  {
    label: "YFDAI.FINANCE",
    symbol: "YF-DAI",
  },
  {
    label: "Folgory Coin",
    symbol: "FLG",
  },
  {
    label: "MovieBloc",
    symbol: "MBL",
  },
  {
    label: "Hashgard",
    symbol: "GARD",
  },
  {
    label: "Humanscape",
    symbol: "HUM",
  },
  {
    label: "AMO Coin",
    symbol: "AMO",
  },
  {
    label: "Venus SXP",
    symbol: "vSXP",
  },
  {
    label: "Yield Optimization Platform & Protocol",
    symbol: "YOP",
  },
  {
    label: "Hacken Token",
    symbol: "HAI",
  },
  {
    label: "Safex Token",
    symbol: "SFT",
  },
  {
    label: "Crust",
    symbol: "CRU",
  },
  {
    label: "Maro",
    symbol: "MARO",
  },
  {
    label: "Unisocks",
    symbol: "SOCKS",
  },
  {
    label: "Stafi",
    symbol: "FIS",
  },
  {
    label: "Galatasaray Fan Token",
    symbol: "GAL",
  },
  {
    label: "Metadium",
    symbol: "META",
  },
  {
    label: "AppCoins",
    symbol: "APPC",
  },
  {
    label: "Propy",
    symbol: "PRO",
  },
  {
    label: "Wabi",
    symbol: "WABI",
  },
  {
    label: "Hakka.Finance",
    symbol: "HAKKA",
  },
  {
    label: "AnimalGo",
    symbol: "GOM2",
  },
  {
    label: "Genesis Vision",
    symbol: "GVT",
  },
  {
    label: "VideoCoin",
    symbol: "VID",
  },
  {
    label: "Shroom.Finance",
    symbol: "SHROOM",
  },
  {
    label: "Factom",
    symbol: "FCT",
  },
  {
    label: "Bifrost",
    symbol: "BFC",
  },
  {
    label: "CUDOS",
    symbol: "CUDOS",
  },
  {
    label: "Metaverse ETP",
    symbol: "ETP",
  },
  {
    label: "TOP",
    symbol: "TOP",
  },
  {
    label: "PowerTrade Fuel",
    symbol: "PTF",
  },
  {
    label: "Davinci Coin",
    symbol: "DAC",
  },
  {
    label: "Venus LINK",
    symbol: "vLINK",
  },
  {
    label: "Dynamic Trading Rights",
    symbol: "DTR",
  },
  {
    label: "CoinEx Token",
    symbol: "CET",
  },
  {
    label: "Idle",
    symbol: "IDLE",
  },
  {
    label: "TrueChain",
    symbol: "TRUE",
  },
  {
    label: "Atomic Wallet Coin",
    symbol: "AWC",
  },
  {
    label: "Newscrypto",
    symbol: "NWC",
  },
  {
    label: "Emirex Token",
    symbol: "EMRX",
  },
  {
    label: "BIKI",
    symbol: "BIKI",
  },
  {
    label: "Rally",
    symbol: "RLY",
  },
  {
    label: "Quiztok",
    symbol: "QTCON",
  },
  {
    label: "WePower",
    symbol: "WPR",
  },
  {
    label: "Ubiq",
    symbol: "UBQ",
  },
  {
    label: "DSLA Protocol",
    symbol: "DSLA",
  },
  {
    label: "KeeperDAO",
    symbol: "ROOK",
  },
  {
    label: "Zynecoin",
    symbol: "ZYN",
  },
  {
    label: "QLC Chain",
    symbol: "QLC",
  },
  {
    label: "OAX",
    symbol: "OAX",
  },
  {
    label: "Project Pai",
    symbol: "PAI",
  },
  {
    label: "PCHAIN",
    symbol: "PI",
  },
  {
    label: "Ruff",
    symbol: "RUFF",
  },
  {
    label: "Props Token",
    symbol: "PROPS",
  },
  {
    label: "Blocknet",
    symbol: "BLOCK",
  },
  {
    label: "LockTrip",
    symbol: "LOC",
  },
  {
    label: "Ambrosus",
    symbol: "AMB",
  },
  {
    label: "IQeon",
    symbol: "IQN",
  },
  {
    label: "BitcoinHD",
    symbol: "BHD",
  },
  {
    label: "Leverj Gluon",
    symbol: "L2",
  },
  {
    label: "S4FE",
    symbol: "S4F",
  },
  {
    label: "Crowns",
    symbol: "CWS",
  },
  {
    label: "LOLTOKEN",
    symbol: "LOL",
  },
  {
    label: "VITE",
    symbol: "VITE",
  },
  {
    label: "Venus LTC",
    symbol: "vLTC",
  },
  {
    label: "Moss Coin",
    symbol: "MOC",
  },
  {
    label: "Beowulf",
    symbol: "BWF",
  },
  {
    label: "Bread",
    symbol: "BRD",
  },
  {
    label: "MixMarvel",
    symbol: "MIX",
  },
  {
    label: "Bitcoin 2",
    symbol: "BTC2",
  },
  {
    label: "King DAG",
    symbol: "KDAG",
  },
  {
    label: "SnowSwap",
    symbol: "SNOW",
  },
  {
    label: "Essentia",
    symbol: "ESS",
  },
  {
    label: "Alchemy Pay",
    symbol: "ACH",
  },
  {
    label: "Kebab Token",
    symbol: "KEBAB",
  },
  {
    label: "Falcon Project",
    symbol: "FNT",
  },
  {
    label: "Nucleus Vision",
    symbol: "NCASH",
  },
  {
    label: "Furucombo",
    symbol: "COMBO",
  },
  {
    label: "GameCredits",
    symbol: "GAME",
  },
  {
    label: "USDJ",
    symbol: "USDJ",
  },
  {
    label: "Qubitica",
    symbol: "QBIT",
  },
  {
    label: "Zano",
    symbol: "ZANO",
  },
  {
    label: "Razor Network",
    symbol: "RAZOR",
  },
  {
    label: "AMEPAY",
    symbol: "AME",
  },
  {
    label: "Gifto",
    symbol: "GTO",
  },
  {
    label: "PlatonCoin",
    symbol: "PLTC",
  },
  {
    label: "Archer DAO Governance Token",
    symbol: "ARCH",
  },
  {
    label: "Benchmark Protocol",
    symbol: "MARK",
  },
  {
    label: "Viacoin",
    symbol: "VIA",
  },
  {
    label: "POA",
    symbol: "POA",
  },
  {
    label: "Hedget",
    symbol: "HGET",
  },
  {
    label: "HUNT",
    symbol: "HUNT",
  },
  {
    label: "Poolz Finance",
    symbol: "POOLZ",
  },
  {
    label: "TokenClub",
    symbol: "TCT",
  },
  {
    label: "Observer",
    symbol: "OBSR",
  },
  {
    label: "Tachyon Protocol",
    symbol: "IPX",
  },
  {
    label: "Dawn Protocol",
    symbol: "DAWN",
  },
  {
    label: "CUTcoin",
    symbol: "CUT",
  },
  {
    label: "BHPCoin",
    symbol: "BHP",
  },
  {
    label: "Newton",
    symbol: "NEW",
  },
  {
    label: "UniLayer",
    symbol: "LAYER",
  },
  {
    label: "BitForex Token",
    symbol: "BF",
  },
  {
    label: "PLATINCOIN",
    symbol: "PLC",
  },
  {
    label: "YF Link",
    symbol: "YFL",
  },
  {
    label: "LiquidApps",
    symbol: "DAPP",
  },
  {
    label: "Trittium",
    symbol: "TRTT",
  },
  {
    label: "OST",
    symbol: "OST",
  },
  {
    label: "RING X PLATFORM",
    symbol: "RINGX",
  },
  {
    label: "Casino Betting Coin",
    symbol: "CBC",
  },
  {
    label: "Abyss",
    symbol: "ABYSS",
  },
  {
    label: "FREE Coin",
    symbol: "FREE",
  },
  {
    label: "CONUN",
    symbol: "CON",
  },
  {
    label: "Callisto Network",
    symbol: "CLO",
  },
  {
    label: "Peercoin",
    symbol: "PPC",
  },
  {
    label: "Global Digital Content",
    symbol: "GDC",
  },
  {
    label: "Rarible",
    symbol: "RARI",
  },
  {
    label: "Swerve",
    symbol: "SWRV",
  },
  {
    label: "Arcblock",
    symbol: "ABT",
  },
  {
    label: "Falconswap",
    symbol: "FSW",
  },
  {
    label: "Blox",
    symbol: "CDT",
  },
  {
    label: "Mirrored Amazon",
    symbol: "mAMZN",
  },
  {
    label: "Paris Saint-Germain Fan Token",
    symbol: "PSG",
  },
  {
    label: "Cardstack",
    symbol: "CARD",
  },
  {
    label: "Juventus Fan Token",
    symbol: "JUV",
  },
  {
    label: "BUX Token",
    symbol: "BUX",
  },
  {
    label: "Mirrored Netflix",
    symbol: "mNFLX",
  },
  {
    label: "GET Protocol",
    symbol: "GET",
  },
  {
    label: "Thugs Finance",
    symbol: "THUGS",
  },
  {
    label: "VIDY",
    symbol: "VIDY",
  },
  {
    label: "FirmaChain",
    symbol: "FCT",
  },
  {
    label: "ROOBEE",
    symbol: "ROOBEE",
  },
  {
    label: "DeFi Yield Protocol",
    symbol: "DYP",
  },
  {
    label: "VestChain",
    symbol: "VEST",
  },
  {
    label: "Jibrel Network",
    symbol: "JNT",
  },
  {
    label: "YOYOW",
    symbol: "YOYOW",
  },
  {
    label: "Tokes",
    symbol: "TKS",
  },
  {
    label: "Mettalex",
    symbol: "MTLX",
  },
  {
    label: "Santiment Network Token",
    symbol: "SAN",
  },
  {
    label: "Zenfuse",
    symbol: "ZEFU",
  },
  {
    label: "BLOCKv",
    symbol: "VEE",
  },
  {
    label: "Mirrored Tesla",
    symbol: "mTSLA",
  },
  {
    label: "Mirrored iShares Gold Trust",
    symbol: "mIAU",
  },
  {
    label: "Myriad",
    symbol: "XMY",
  },
  {
    label: "ProximaX",
    symbol: "XPX",
  },
  {
    label: "Venus DOT",
    symbol: "vDOT",
  },
  {
    label: "Dynamic",
    symbol: "DYN",
  },
  {
    label: "smARTOFGIVING",
    symbol: "AOG",
  },
  {
    label: "Lamden",
    symbol: "TAU",
  },
  {
    label: "Emercoin",
    symbol: "EMC",
  },
  {
    label: "PIXEL",
    symbol: "PXL",
  },
  {
    label: "LCX",
    symbol: "LCX",
  },
  {
    label: "Gem Exchange And Trading",
    symbol: "GXT",
  },
  {
    label: "Egretia",
    symbol: "EGT",
  },
  {
    label: "#MetaHash",
    symbol: "MHC",
  },
  {
    label: "Everex",
    symbol: "EVX",
  },
  {
    label: "Mirrored iShares Silver Trust",
    symbol: "mSLV",
  },
  {
    label: "DOS Network",
    symbol: "DOS",
  },
  {
    label: "PolkaBridge",
    symbol: "PBR",
  },
  {
    label: "DATA",
    symbol: "DTA",
  },
  {
    label: "Feathercoin",
    symbol: "FTC",
  },
  {
    label: "reflect.finance",
    symbol: "RFI",
  },
  {
    label: "LinkEye",
    symbol: "LET",
  },
  {
    label: "TE-FOOD",
    symbol: "TONE",
  },
  {
    label: "Anchor",
    symbol: "ANCT",
  },
  {
    label: "Gulden",
    symbol: "NLG",
  },
  {
    label: "Safe Haven",
    symbol: "SHA",
  },
  {
    label: "Tap",
    symbol: "XTP",
  },
  {
    label: "Hydro",
    symbol: "HYDRO",
  },
  {
    label: "Tokamak Network",
    symbol: "TON",
  },
  {
    label: "Muse",
    symbol: "MUSE",
  },
  {
    label: "Mirrored Invesco QQQ Trust",
    symbol: "mQQQ",
  },
  {
    label: "Monolith",
    symbol: "TKN",
  },
  {
    label: "Mirrored United States Oil Fund",
    symbol: "mUSO",
  },
  {
    label: "Mirrored Apple",
    symbol: "mAAPL",
  },
  {
    label: "Mirrored ProShares VIX",
    symbol: "mVIXY",
  },
  {
    label: "TEMCO",
    symbol: "TEMCO",
  },
  {
    label: "ZBG Token",
    symbol: "ZT",
  },
  {
    label: "FOAM",
    symbol: "FOAM",
  },
  {
    label: "Mirrored Alibaba",
    symbol: "mBABA",
  },
  {
    label: "Mirrored Twitter",
    symbol: "mTWTR",
  },
  {
    label: "Achain",
    symbol: "ACT",
  },
  {
    label: "Kcash",
    symbol: "KCASH",
  },
  {
    label: "Mirrored Microsoft",
    symbol: "mMSFT",
  },
  {
    label: "Viberate",
    symbol: "VIB",
  },
  {
    label: "Epic Cash",
    symbol: "EPIC",
  },
  {
    label: "Bibox Token",
    symbol: "BIX",
  },
  {
    label: "SIX",
    symbol: "SIX",
  },
  {
    label: "Smartlands Network",
    symbol: "SLT",
  },
  {
    label: "Blockzero Labs",
    symbol: "XIO",
  },
  {
    label: "StakeCubeCoin",
    symbol: "SCC",
  },
  {
    label: "CargoX",
    symbol: "CXO",
  },
  {
    label: "LikeCoin",
    symbol: "LIKE",
  },
  {
    label: "UCA Coin",
    symbol: "UCA",
  },
  {
    label: "DigitalNote",
    symbol: "XDN",
  },
  {
    label: "FinNexus",
    symbol: "FNX",
  },
  {
    label: "Unitrade",
    symbol: "TRADE",
  },
  {
    label: "Content Value Network",
    symbol: "CVNT",
  },
  {
    label: "Levolution",
    symbol: "LEVL",
  },
  {
    label: "Lympo",
    symbol: "LYM",
  },
  {
    label: "Lido DAO Token",
    symbol: "LDO",
  },
  {
    label: "Agrello",
    symbol: "DLT",
  },
  {
    label: "CyberMiles",
    symbol: "CMT",
  },
  {
    label: "Alpha Quark Token",
    symbol: "AQT",
  },
  {
    label: "Burst",
    symbol: "BURST",
  },
  {
    label: "Particl",
    symbol: "PART",
  },
  {
    label: "Validity",
    symbol: "VAL",
  },
  {
    label: "Verasity",
    symbol: "VRA",
  },
  {
    label: "DAOstack",
    symbol: "GEN",
  },
  {
    label: "Strong",
    symbol: "STRONG",
  },
  {
    label: "Universa",
    symbol: "UTNP",
  },
  {
    label: "apM Coin",
    symbol: "APM",
  },
  {
    label: "SmartCash",
    symbol: "SMART",
  },
  {
    label: "Tokenomy",
    symbol: "TEN",
  },
  {
    label: "NEXT",
    symbol: "NET",
  },
  {
    label: "FNB Protocol",
    symbol: "FNB",
  },
  {
    label: "ThoreNext",
    symbol: "THX",
  },
  {
    label: "Monero Classic",
    symbol: "XMC",
  },
  {
    label: "DEX",
    symbol: "DEX",
  },
  {
    label: "Atletico De Madrid Fan Token",
    symbol: "ATM",
  },
  {
    label: "Auctus",
    symbol: "AUC",
  },
  {
    label: "SYNC Network",
    symbol: "SYNC",
  },
  {
    label: "TrustVerse",
    symbol: "TRV",
  },
  {
    label: "High Performance Blockchain",
    symbol: "HPB",
  },
  {
    label: "Safe",
    symbol: "SAFE",
  },
  {
    label: "Centaur",
    symbol: "CNTR",
  },
  {
    label: "Metrix Coin",
    symbol: "MRX",
  },
  {
    label: "BitCore",
    symbol: "BTX",
  },
  {
    label: "FIBOS",
    symbol: "FO",
  },
  {
    label: "Aitra",
    symbol: "AITRA",
  },
  {
    label: "Credits",
    symbol: "CS",
  },
  {
    label: "Zel",
    symbol: "ZEL",
  },
  {
    label: "Peculium",
    symbol: "PCL",
  },
  {
    label: "Kryll",
    symbol: "KRL",
  },
  {
    label: "Hyperion",
    symbol: "HYN",
  },
  {
    label: "Dentacoin",
    symbol: "DCN",
  },
  {
    label: "United Traders Token",
    symbol: "UTT",
  },
  {
    label: "NIX",
    symbol: "NIX",
  },
  {
    label: "APIX",
    symbol: "APIX",
  },
  {
    label: "PieDAO DOUGH v2",
    symbol: "DOUGH",
  },
  {
    label: "Diamond Platform Token",
    symbol: "DPT",
  },
  {
    label: "Lightning Bitcoin",
    symbol: "LBTC",
  },
  {
    label: "Hydro Protocol",
    symbol: "HOT",
  },
  {
    label: "Geeq",
    symbol: "GEEQ",
  },
  {
    label: "Cobak Token",
    symbol: "CBK",
  },
  {
    label: "Nestree",
    symbol: "EGG",
  },
  {
    label: "Fuse Network",
    symbol: "FUSE",
  },
  {
    label: "Offshift",
    symbol: "XFT",
  },
  {
    label: "Genaro Network",
    symbol: "GNX",
  },
  {
    label: "Doki Doki Finance",
    symbol: "DOKI",
  },
  {
    label: "Autonio",
    symbol: "NIOX",
  },
  {
    label: "AS Roma Fan Token",
    symbol: "ASR",
  },
  {
    label: "EOS Force",
    symbol: "EOSC",
  },
  {
    label: "Heart Number",
    symbol: "HTN",
  },
  {
    label: "Time New Bank",
    symbol: "TNB",
  },
  {
    label: "EUNO",
    symbol: "EUNO",
  },
  {
    label: "Lead Wallet",
    symbol: "LEAD",
  },
  {
    label: "Eminer",
    symbol: "EM",
  },
  {
    label: "IoT Chain",
    symbol: "ITC",
  },
  {
    label: "Lykke",
    symbol: "LKK",
  },
  {
    label: "SmartCredit Token",
    symbol: "SMARTCREDIT",
  },
  {
    label: "Counterparty",
    symbol: "XCP",
  },
  {
    label: "TriumphX",
    symbol: "TRIX",
  },
  {
    label: "BitMart Token",
    symbol: "BMX",
  },
  {
    label: "Aeon",
    symbol: "AEON",
  },
  {
    label: "ScPrime",
    symbol: "SCP",
  },
  {
    label: "Mooncoin",
    symbol: "MOON",
  },
  {
    label: "BIZZCOIN",
    symbol: "BIZZ",
  },
  {
    label: "Indexed Finance",
    symbol: "NDX",
  },
  {
    label: "ILCOIN",
    symbol: "ILC",
  },
  {
    label: "Seele-N",
    symbol: "SEELE",
  },
  {
    label: "SingularDTV",
    symbol: "SNGLS",
  },
  {
    label: "Orient Walt",
    symbol: "HTDF",
  },
  {
    label: "Grid+",
    symbol: "GRID",
  },
  {
    label: "Realio Network",
    symbol: "RIO",
  },
  {
    label: "DragonVein",
    symbol: "DVC",
  },
  {
    label: "FLO",
    symbol: "FLO",
  },
  {
    label: "Monetha",
    symbol: "MTH",
  },
  {
    label: "SmartMesh",
    symbol: "SMT",
  },
  {
    label: "SONM",
    symbol: "SNM",
  },
  {
    label: "STATERA",
    symbol: "STA",
  },
  {
    label: "Valor Token",
    symbol: "VALOR",
  },
  {
    label: "Marscoin",
    symbol: "MARS",
  },
  {
    label: "SaTT",
    symbol: "SATT",
  },
  {
    label: "ELYSIA",
    symbol: "EL",
  },
  {
    label: "Origin Dollar",
    symbol: "OUSD",
  },
  {
    label: "SEEN",
    symbol: "SEEN",
  },
  {
    label: "Phore",
    symbol: "PHR",
  },
  {
    label: "AnRKey X",
    symbol: "$ANRX",
  },
  {
    label: "Filecash",
    symbol: "FIC",
  },
  {
    label: "Fyooz",
    symbol: "FYZ",
  },
  {
    label: "QuickX Protocol",
    symbol: "QCX",
  },
  {
    label: "All Sports",
    symbol: "SOC",
  },
  {
    label: "Stealth",
    symbol: "XST",
  },
  {
    label: "42-coin",
    symbol: "42",
  },
  {
    label: "Bird.Money",
    symbol: "BIRD",
  },
  {
    label: "Noku",
    symbol: "NOKU",
  },
  {
    label: "VNX Exchange",
    symbol: "VNXLU",
  },
  {
    label: "BOLT",
    symbol: "BOLT",
  },
  {
    label: "Idena",
    symbol: "IDNA",
  },
  {
    label: "Mobius",
    symbol: "MOBI",
  },
  {
    label: "YVS.Finance",
    symbol: "YVS",
  },
  {
    label: "Wagerr",
    symbol: "WGR",
  },
  {
    label: "Nord Finance",
    symbol: "NORD",
  },
  {
    label: "REPO",
    symbol: "REPO",
  },
  {
    label: "Covesting",
    symbol: "COV",
  },
  {
    label: "FLETA",
    symbol: "FLETA",
  },
  {
    label: "SunContract",
    symbol: "SNC",
  },
  {
    label: "Pillar",
    symbol: "PLR",
  },
  {
    label: "Cryptocean",
    symbol: "CRON",
  },
  {
    label: "BIDR",
    symbol: "BIDR",
  },
  {
    label: "Penta",
    symbol: "PNT",
  },
  {
    label: "DEAPcoin",
    symbol: "DEP",
  },
  {
    label: "Stake DAO",
    symbol: "SDT",
  },
  {
    label: "SwftCoin",
    symbol: "SWFTC",
  },
  {
    label: "GoCrypto Token",
    symbol: "GOC",
  },
  {
    label: "ColossusXT",
    symbol: "COLX",
  },
  {
    label: "PotCoin",
    symbol: "POT",
  },
  {
    label: "Pundi X NEM",
    symbol: "NPXSXEM",
  },
  {
    label: "Litecoin Cash",
    symbol: "LCC",
  },
  {
    label: "qiibee",
    symbol: "QBX",
  },
  {
    label: "Nsure.Network",
    symbol: "NSURE",
  },
  {
    label: "Enecuum",
    symbol: "ENQ",
  },
  {
    label: "AGA Token",
    symbol: "AGA",
  },
  {
    label: "CanYaCoin",
    symbol: "CAN",
  },
  {
    label: "OG Fan Token",
    symbol: "OG",
  },
  {
    label: "Mysterium",
    symbol: "MYST",
  },
  {
    label: "Bonded Finance",
    symbol: "BOND",
  },
  {
    label: "WeShow Token",
    symbol: "WET",
  },
  {
    label: "Darwinia Commitment Token",
    symbol: "KTON",
  },
  {
    label: "Atlas Protocol",
    symbol: "ATP",
  },
  {
    label: "MediShares",
    symbol: "MDS",
  },
  {
    label: "X-CASH",
    symbol: "XCASH",
  },
  {
    label: "DePay",
    symbol: "DEPAY",
  },
  {
    label: "Matrix AI Network",
    symbol: "MAN",
  },
  {
    label: "Diamond",
    symbol: "DMD",
  },
  {
    label: "HOLD",
    symbol: "HOLD",
  },
  {
    label: "DMM: Governance",
    symbol: "DMG",
  },
  {
    label: "Fatcoin",
    symbol: "FAT",
  },
  {
    label: "CWV Chain",
    symbol: "CWV",
  },
  {
    label: "Venus DAI",
    symbol: "vDAI",
  },
  {
    label: "QuadrantProtocol",
    symbol: "EQUAD",
  },
  {
    label: "Open Governance Token",
    symbol: "OPEN",
  },
  {
    label: "Banano",
    symbol: "BAN",
  },
  {
    label: "BLink",
    symbol: "BLINK",
  },
  {
    label: "BuySell",
    symbol: "BULL",
  },
  {
    label: "T.OS",
    symbol: "TOSC",
  },
  {
    label: "PlayFuel",
    symbol: "PLF",
  },
  {
    label: "Aragon Court",
    symbol: "ANJ",
  },
  {
    label: "CasinoCoin",
    symbol: "CSC",
  },
  {
    label: "Smart MFG",
    symbol: "MFG",
  },
  {
    label: "U Network",
    symbol: "UUU",
  },
  {
    label: "Panda Yield",
    symbol: "BBOO",
  },
  {
    label: "ODEM",
    symbol: "ODE",
  },
  {
    label: "carVertical",
    symbol: "CV",
  },
  {
    label: "BTSE",
    symbol: "BTSE",
  },
  {
    label: "SOMESING",
    symbol: "SSX",
  },
  {
    label: "Digitex",
    symbol: "DGTX",
  },
  {
    label: "Minereum",
    symbol: "MNE",
  },
  {
    label: "Chi Gastoken",
    symbol: "CHI",
  },
  {
    label: "Blockchain Certified Data Token",
    symbol: "BCDT",
  },
  {
    label: "Skrumble Network",
    symbol: "SKM",
  },
  {
    label: "XMax",
    symbol: "XMX",
  },
  {
    label: "Gameswap",
    symbol: "GSWAP",
  },
  {
    label: "BitGreen",
    symbol: "BITG",
  },
  {
    label: "Raven Protocol",
    symbol: "RAVEN",
  },
  {
    label: "PANTHEON X",
    symbol: "XPN",
  },
  {
    label: "Pluton",
    symbol: "PLU",
  },
  {
    label: "UnlimitedIP",
    symbol: "UIP",
  },
  {
    label: "ASKO",
    symbol: "ASKO",
  },
  {
    label: "Precium",
    symbol: "PCM",
  },
  {
    label: "HitChain",
    symbol: "HIT",
  },
  {
    label: "Amoveo",
    symbol: "VEO",
  },
  {
    label: "Jobchain",
    symbol: "JOB",
  },
  {
    label: "YOU COIN",
    symbol: "YOU",
  },
  {
    label: "Ternio",
    symbol: "TERN",
  },
  {
    label: "Parachute",
    symbol: "PAR",
  },
  {
    label: "TENT",
    symbol: "TENT",
  },
  {
    label: "Earneo",
    symbol: "RNO",
  },
  {
    label: "Sphere",
    symbol: "SPHR",
  },
  {
    label: "Remme",
    symbol: "REM",
  },
  {
    label: "DeepBrain Chain",
    symbol: "DBC",
  },
  {
    label: "TronEuropeRewardCoin",
    symbol: "TERC",
  },
  {
    label: "Valobit",
    symbol: "VBIT",
  },
  {
    label: "Jarvis Network",
    symbol: "JRT",
  },
  {
    label: "MahaDAO",
    symbol: "MAHA",
  },
  {
    label: "AIDUS TOKEN",
    symbol: "AIDUS",
  },
  {
    label: "Odyssey",
    symbol: "OCN",
  },
  {
    label: "EXMO Coin",
    symbol: "EXM",
  },
  {
    label: "XYO",
    symbol: "XYO",
  },
  {
    label: "MIR COIN",
    symbol: "MIR",
  },
  {
    label: "KARMA",
    symbol: "KARMA",
  },
];

export default cryptos;
