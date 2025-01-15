import { NextResponse } from 'next/server'

const SUPPORTED_PAIRS = {
  // Major Layer 1s
  'BTC': 'BTCUSDT',    // Bitcoin
  'ETH': 'ETHUSDT',    // Ethereum
  'SOL': 'SOLUSDT',    // Solana
  'ADA': 'ADAUSDT',    // Cardano
  'AVAX': 'AVAXUSDT',  // Avalanche
  'DOT': 'DOTUSDT',    // Polkadot
  'MATIC': 'MATICUSDT', // Polygon
  'NEAR': 'NEARUSDT',  // NEAR Protocol
  'ATOM': 'ATOMUSDT',  // Cosmos
  'FTM': 'FTMUSDT',    // Fantom

  // Layer 2s & Scaling Solutions
  'OP': 'OPUSDT',      // Optimism
  'ARB': 'ARBUSDT',    // Arbitrum
  'IMX': 'IMXUSDT',    // Immutable X
  'METIS': 'METISUSDT', // Metis
  'BASE': 'BASEUSDT',   // Base
  'STX': 'STXUSDT',    // Stacks

  // DeFi Blue Chips
  'UNI': 'UNIUSDT',    // Uniswap
  'AAVE': 'AAVEUSDT',  // Aave
  'MKR': 'MKRUSDT',    // Maker
  'SNX': 'SNXUSDT',    // Synthetix
  'CRV': 'CRVUSDT',    // Curve
  'COMP': 'COMPUSDT',  // Compound
  'SUSHI': 'SUSHIUSDT', // Sushiswap
  'BAL': 'BALUSDT',    // Balancer
  '1INCH': '1INCHUSDT', // 1inch

  // AI & Computing Tokens
  'AGIX': 'AGIXUSDT',  // SingularityNET
  'FET': 'FETUSDT',    // Fetch.ai
  'OCEAN': 'OCEANUSDT', // Ocean Protocol
  'RLC': 'RLCUSDT',    // iExec
  'NMR': 'NMRUSDT',    // Numeraire

  // Gaming & Metaverse
  'SAND': 'SANDUSDT',  // The Sandbox
  'MANA': 'MANAUSDT',  // Decentraland
  'AXS': 'AXSUSDT',    // Axie Infinity
  'GALA': 'GALAUSDT',  // Gala Games
  'ILV': 'ILVUSDT',    // Illuvium
  'ENJ': 'ENJUSDT',    // Enjin

  // Infrastructure & Web3
  'LINK': 'LINKUSDT',  // Chainlink
  'GRT': 'GRTUSDT',    // The Graph
  'FIL': 'FILUSDT',    // Filecoin
  'AR': 'ARUSDT',      // Arweave
  'LPT': 'LPTUSDT',    // Livepeer

  // Exchange Tokens
  'BNB': 'BNBUSDT',    // Binance
  'OKB': 'OKBUSDT',    // OKX
  'KCS': 'KCSUSDT',    // KuCoin
  'FTT': 'FTTUSDT',    // FTX (historical)
  'HT': 'HTUSDT',      // Huobi

  // Stablecoins & Related
  'USDC': 'USDCUSDT',  // USD Coin
  'DAI': 'DAIUSDT',    // DAI
  'TUSD': 'TUSDUSDT',  // TrueUSD
  'USDD': 'USDDUSDT',  // USDD

  // Privacy Focused
  'XMR': 'XMRUSDT',    // Monero
  'ZEC': 'ZECUSDT',    // Zcash
  'SCRT': 'SCRTUSDT',  // Secret

  // RWA (Real World Assets)
  'MNT': 'MNTUSDT',    // Monetaria
  'REALT': 'REALTUSDT', // RealT
  'RNDR': 'RNDRUSDT',  // Render

  // Emerging Trends
  'INJ': 'INJUSDT',    // Injective
  'SUI': 'SUIUSDT',    // Sui
  'SEI': 'SEIUSDT',    // Sei
  'PYTH': 'PYTHUSDT',  // Pyth Network
  'WEMIX': 'WEMIXUSDT', // WEMIX
  'BLUR': 'BLURUSDT',  // Blur

  // Legacy Alts with Strong Communities
  'XRP': 'XRPUSDT',    // Ripple
  'DOGE': 'DOGEUSDT',  // Dogecoin
  'LTC': 'LTCUSDT',    // Litecoin
  'BCH': 'BCHUSDT',    // Bitcoin Cash
  'ETC': 'ETCUSDT',    // Ethereum Classic
  'XLM': 'XLMUSDT',    // Stellar

  // Cross-Chain & Interoperability
  'RUNE': 'RUNEUSDT',  // THORChain
  'QNT': 'QNTUSDT',    // Quant
  'ROSE': 'ROSEUSDT',  // Oasis
  'ICX': 'ICXUSDT',    // ICON

  // Yield & Staking
  'LIDO': 'LIDOUSDT',  // Lido DAO
  'RPL': 'RPLUSDT',    // Rocket Pool
  'ANKR': 'ANKRUSDT',  // Ankr

  // NFT & Social Tokens
  'APE': 'APEUSDT',    // ApeCoin
  'LRC': 'LRCUSDT',    // Loopring
  'MASK': 'MASKUSDT',  // Mask Network

  // New Financial Instruments
  'GMX': 'GMXUSDT',    // GMX
  'DYDX': 'DYDXUSDT',  // dYdX
  'PERP': 'PERPUSDT',  // Perpetual Protocol
  'VELO': 'VELOUSDT',  // Velo

  // Identity & Social
  'CVC': 'CVCUSDT',    // Civic
  'GTC': 'GTCUSDT',    // Gitcoin
  'BAND': 'BANDUSDT',  // Band Protocol

  // DAO Platforms
  'ENS': 'ENSUSDT',    // Ethereum Name Service
  'PEOPLE': 'PEOPLEUSDT', // ConstitutionDAO
  'TRIBE': 'TRIBEUSDT', // Tribe

  // Emerging Markets Focus
  'CAKE': 'CAKEUSDT',  // PancakeSwap
  'WOO': 'WOOUSDT',    // WOO Network
  'KAS': 'KASUSDT',    // Kaspa

  // Data & Oracle
  'API3': 'API3USDT',  // API3
  'TRB': 'TRBUSDT',    // Tellor

  // Green & Sustainability
  'POWR': 'POWRUSDT',  // Power Ledger
  'FLUX': 'FLUXUSDT',  // Flux
  'GLM': 'GLMUSDT',    // Golem

  // Enterprise Blockchain
  'VET': 'VETUSDT',    // VeChain
  'HBAR': 'HBARUSDT',  // Hedera

  // Emerging Privacy Tech
  'KEEP': 'KEEPUSDT',  // Keep Network

  // Content & Media
  'THETA': 'THETAUSDT', // Theta Network
  'HOT': 'HOTUSDT',    // Holochain
  'CHZ': 'CHZUSDT',    // Chiliz

  // Cross-Chain Infrastructure
  'CELR': 'CELRUSDT',  // Celer Network
  'REN': 'RENUSDT',    // Ren
  'SKL': 'SKLUSDT',     // SKALE

  // Meme Coins
  'SHIB': 'SHIBUSDT',    // Shiba Inu
  'BONK': 'BONKUSDT',    // Bonk (Solana ecosystem)
  'PEPE': 'PEPEUSDT',    // Pepe
  'FLOKI': 'FLOKIUSDT',  // Floki Inu
  'WIF': 'WIFUSDT',      // WIF (Solana dog coin)
  'MYRO': 'MYROUSDT',    // Myro (Sui ecosystem)
  'SAMO': 'SAMOUSDT',    // Samoyedcoin (Solana ecosystem)
  'BABYDOGE': 'BABYDOGEUSDT', // Baby Doge Coin
  'ELON': 'ELONUSDT',    // Dogelon Mars
  'WOJAK': 'WOJAKUSDT',  // Wojak Coin
  'MEME': 'MEMEUSDT',    // MEME (Previously Meme Coin)
  'DOGWIFHAT': 'DOGWIFHATUSDT', // Dog Wif Hat
  'SPACECLIFF': 'SPACECLIFFUSDT', // Space CLIFF
  'SNEK': 'SNEKUSDT',    // SNEK
} as const

// Mock news data - replace with real API call when ready
const NEWS_DATA = {
  BTC: [{ title: "Bitcoin reaches new high", url: "#" }],
  ETH: [{ title: "Ethereum 2.0 update scheduled", url: "#" }],
  ADA: [{ title: "Cardano announces new partnership", url: "#" }]
} as const

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const symbols = searchParams.get('symbols')?.split(',') || []
    
    if (!symbols.length) {
      return NextResponse.json(
        { error: 'No symbols provided' },
        { status: 400 }
      )
    }

    // Fetch prices from Binance
    const pairs = symbols
      .map(symbol => SUPPORTED_PAIRS[symbol as keyof typeof SUPPORTED_PAIRS])
      .filter(Boolean)

    const pricePromises = pairs.map(pair => 
      fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${pair}`)
        .then(res => res.json())
    )

    const priceResults = await Promise.all(pricePromises)
    
    // Format the response data
    const data: Record<string, any> = {}
    priceResults.forEach(result => {
      const symbol = Object.keys(SUPPORTED_PAIRS).find(
        key => SUPPORTED_PAIRS[key as keyof typeof SUPPORTED_PAIRS] === result.symbol
      )
      if (symbol) {
        data[symbol] = {
          price: parseFloat(result.lastPrice),
          change: parseFloat(result.priceChangePercent),
          news: NEWS_DATA[symbol as keyof typeof NEWS_DATA] || [],
          // Add placeholder for TradingView chart data
          chartUrl: `https://www.tradingview.com/symbols/${symbol}USDT`
        }
      }
    })

    return NextResponse.json(data)

  } catch (error) {
    console.error('Crypto data error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch crypto data' },
      { status: 500 }
    )
  }
}