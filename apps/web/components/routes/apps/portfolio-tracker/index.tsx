'use client'

import { useState, useRef, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'


function formatNumber(x: string | number): string {
  const parts = x.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

interface Asset {
  ticker: string
  amount: number
}

interface CryptoData {
  price: number
  change: number
  news: { title: string; url: string }[]
  chartUrl: string
}

interface EditDialogProps {
  asset: Asset
  onSave: (updatedAsset: Asset) => void
  onClose: () => void
  isOpen: boolean
}

const SUPPORTED_PAIRS = {
  // Major Layer 1s
  'BTC': 'Bitcoin',
  'ETH': 'Ethereum',
  'SOL': 'Solana',
  'ADA': 'Cardano',
  'AVAX': 'Avalanche',
  'DOT': 'Polkadot',
  'MATIC': 'Polygon',
  'NEAR': 'NEAR Protocol',
  'ATOM': 'Cosmos',
  'FTM': 'Fantom',

  // Layer 2s & Scaling Solutions
  'OP': 'Optimism',
  'ARB': 'Arbitrum',
  'IMX': 'Immutable X',
  'METIS': 'Metis',
  'BASE': 'Base',
  'STX': 'Stacks',

  // DeFi Blue Chips
  'UNI': 'Uniswap',
  'AAVE': 'Aave',
  'MKR': 'Maker',
  'SNX': 'Synthetix',
  'CRV': 'Curve',
  'COMP': 'Compound',
  'SUSHI': 'SushiSwap',
  'BAL': 'Balancer',
  '1INCH': '1inch Network',

  // AI & Computing Tokens
  'AGIX': 'SingularityNET',
  'FET': 'Fetch.ai',
  'OCEAN': 'Ocean Protocol',
  'RLC': 'iExec RLC',
  'NMR': 'Numeraire',

  // Gaming & Metaverse
  'SAND': 'The Sandbox',
  'MANA': 'Decentraland',
  'AXS': 'Axie Infinity',
  'GALA': 'Gala Games',
  'ILV': 'Illuvium',
  'ENJ': 'Enjin Coin',

  // Infrastructure & Web3
  'LINK': 'Chainlink',
  'GRT': 'The Graph',
  'FIL': 'Filecoin',
  'AR': 'Arweave',
  'LPT': 'Livepeer',

  // Exchange Tokens
  'BNB': 'Binance Coin',
  'OKB': 'OKB',
  'KCS': 'KuCoin Token',
  'HT': 'Huobi Token',

  // Stablecoins & Related
  'USDC': 'USD Coin',
  'DAI': 'Dai',
  'TUSD': 'TrueUSD',
  'USDD': 'USDD',

  // Privacy Focused
  'XMR': 'Monero',
  'ZEC': 'Zcash',
  'SCRT': 'Secret',

  // RWA (Real World Assets)
  'MNT': 'Monetaria',
  'REALT': 'RealT',
  'RNDR': 'Render Network',

  // Emerging Trends
  'INJ': 'Injective',
  'SUI': 'Sui',
  'SEI': 'Sei',
  'PYTH': 'Pyth Network',
  'WEMIX': 'WEMIX',
  'BLUR': 'Blur',

  // Legacy Alts with Strong Communities
  'XRP': 'XRP',
  'LTC': 'Litecoin',
  'BCH': 'Bitcoin Cash',
  'ETC': 'Ethereum Classic',
  'XLM': 'Stellar',

  // Yield & Staking
  'LIDO': 'Lido DAO',
  'RPL': 'Rocket Pool',
  'ANKR': 'Ankr',

  // NFT & Social Tokens
  'APE': 'ApeCoin',
  'LRC': 'Loopring',
  'MASK': 'Mask Network',

  // New Financial Instruments
  'GMX': 'GMX',
  'DYDX': 'dYdX',
  'PERP': 'Perpetual Protocol',
  'VELO': 'Velo Protocol',

  // Identity & Social
  'CVC': 'Civic',
  'GTC': 'Gitcoin',
  'BAND': 'Band Protocol',

  // DAO Platforms
  'ENS': 'Ethereum Name Service',
  'PEOPLE': 'ConstitutionDAO',
  'TRIBE': 'Tribe DAO',

  // Emerging Markets Focus
  'CAKE': 'PancakeSwap',
  'WOO': 'WOO Network',
  'KAS': 'Kaspa',

  // Data & Oracle
  'API3': 'API3',
  'TRB': 'Tellor',

  // Enterprise & Infrastructure
  'QNT': 'Quant',
  'VET': 'VeChain',
  'HBAR': 'Hedera',
  'ROSE': 'Oasis Network',
  'THETA': 'Theta Network',
  'HOT': 'Holochain',
  'CHZ': 'Chiliz',
  'CELR': 'Celer Network',
  'REN': 'Ren',
  'SKL': 'SKALE',

  // Meme Coins
  'DOGE': 'Dogecoin',
  'SHIB': 'Shiba Inu',
  'BONK': 'Bonk',
  'PEPE': 'Pepe',
  'FLOKI': 'Floki Inu',
  'WIF': 'Dog Wif Hat',
  'MYRO': 'Myro',
  'SAMO': 'Samoyedcoin',
  'BABYDOGE': 'Baby Doge Coin',
  'ELON': 'Dogelon Mars',
  'WOJAK': 'Wojak Coin',
  'MEME': 'MEME',
  'SPACECLIFF': 'Space CLIFF',
  'SNEK': 'SNEK'

} as const

function EditDialog({ asset, onSave, onClose, isOpen }: EditDialogProps) {
  const [amount, setAmount] = useState(asset.amount.toString())

  const handleSave = () => {
    const newAmount = parseFloat(amount)
    if (!isNaN(newAmount) && newAmount > 0) {
      onSave({ ...asset, amount: newAmount })
      onClose()
    } else {
      alert('Please enter a valid amount')
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit {asset.ticker} Amount</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <div className="flex flex-col space-y-2">
            <label>Amount of {SUPPORTED_PAIRS[asset.ticker as keyof typeof SUPPORTED_PAIRS]}</label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function CryptoPortfolioManager() {
  const [portfolio, setPortfolio] = useState<Asset[]>(() => {
    // Load from localStorage on initial render
    const saved = localStorage.getItem('crypto-portfolio')
    return saved ? JSON.parse(saved) : [
      { ticker: 'BTC', amount: 1 },
      { ticker: 'ETH', amount: 10 },

    ]
  })

  const [newTicker, setNewTicker] = useState('')
  const [newAmount, setNewAmount] = useState('')
  const [cryptoData, setCryptoData] = useState<Record<string, CryptoData>>({})
  const [loading, setLoading] = useState(true)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [editingAsset, setEditingAsset] = useState<Asset | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  const fetchCryptoData = async () => {
    try {
      const symbols = portfolio.map(asset => asset.ticker).join(',')
      const response = await fetch(`/api/activity/crypto?symbols=${symbols}`)

      if (!response.ok) {
        throw new Error('Failed to fetch crypto data')
      }

      const data = await response.json()
      setCryptoData(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching crypto data:', error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCryptoData()
    const interval = setInterval(fetchCryptoData, 30000)
    return () => clearInterval(interval)
  }, [portfolio])

  useEffect(() => {
    localStorage.setItem('crypto-portfolio', JSON.stringify(portfolio))
  }, [portfolio])

  const addToPortfolio = () => {
    if (!newTicker || !newAmount) {
      alert('Please enter both ticker and amount')
      return
    }

    const formattedTicker = newTicker.toUpperCase()

    if (!(formattedTicker in SUPPORTED_PAIRS)) {
      alert(`Invalid ticker. Supported tickers are: ${Object.keys(SUPPORTED_PAIRS).join(', ')}`)
      return
    }

    if (portfolio.length >= 20) {
      alert('Maximum portfolio size (20) reached')
      return
    }

    if (portfolio.some(asset => asset.ticker === formattedTicker)) {
      alert('This ticker is already in your portfolio')
      return
    }

    setPortfolio([...portfolio, {
      ticker: formattedTicker,
      amount: parseFloat(newAmount)
    }])

    setNewTicker('')
    setNewAmount('')
  }

  const handleEdit = (asset: Asset) => {
    setEditingAsset(asset)
    setIsEditDialogOpen(true)
  }

  const handleEditSave = (updatedAsset: Asset) => {
    setPortfolio(portfolio.map(asset =>
      asset.ticker === updatedAsset.ticker ? updatedAsset : asset
    ))
    setIsEditDialogOpen(false)
    setEditingAsset(null)
  }

  const exportPortfolio = () => {
    const portfolioData = JSON.stringify(portfolio, null, 2)
    const blob = new Blob([portfolioData], { type: 'application/json;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'crypto-portfolio.json'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const importPortfolio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e: ProgressEvent<FileReader>) => {
        try {
          if (e.target?.result && typeof e.target.result === 'string') {
            const importedPortfolio = JSON.parse(e.target.result)
            if (Array.isArray(importedPortfolio)) {
              setPortfolio(importedPortfolio)
            } else {
              alert('Invalid portfolio file format')
            }
          }
        } catch (error) {
          console.error('Error reading portfolio file:', error)
          alert('Error reading portfolio file')
        }
      }
      reader.readAsText(file)
    }
  }

  const removeFromPortfolio = (index: number) => {
    setPortfolio(portfolio.filter((_, i) => i !== index))
  }

  const calculatePortfolioValue = () => {
    return portfolio.reduce((total, asset) => {
      const price = cryptoData[asset.ticker]?.price || 0
      return total + (asset.amount * price)
    }, 0)
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>My Portfolio</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add Asset Form */}
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Add New Asset</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6 items-end">
                <div className="flex-1">
                  <label className="text-sm text-muted-foreground mb-2">Ticker</label>
                  <Input
                    type="text"
                    placeholder="Enter ticker symbol"
                    value={newTicker}
                    onChange={(e) => setNewTicker(e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div className="w-48">
                  <label className="text-sm text-muted-foreground mb-2">Amount</label>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={newAmount}
                    onChange={(e) => setNewAmount(e.target.value)}
                    className="bg-background"
                  />
                </div>
                <Button
                  onClick={addToPortfolio}
                  size="lg"
                  className="mb-0.5 bg-green-700 hover:bg-green-600 text-white"
                >
                  Add
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Portfolio Actions */}
          <div className="flex gap-2 mb-4">
            <Button onClick={exportPortfolio}>Export Portfolio</Button>
            <input
              type="file"
              accept=".json"
              onChange={importPortfolio}
              ref={fileInputRef}
              className="hidden"
            />
            <Button onClick={() => fileInputRef.current?.click()}>
              Import Portfolio
            </Button>
            <Button onClick={fetchCryptoData}>Refresh Prices</Button>
          </div>

          {/* Portfolio Content */}
          <Tabs defaultValue="portfolio">
            <TabsList>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="charts">Charts</TabsTrigger>
            </TabsList>

            <TabsContent value="portfolio">
              {loading ? (
                <p>Loading prices...</p>
              ) : (
                <>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Asset</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Value</TableHead>
                        <TableHead>24h Change</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {portfolio.map((asset, index) => (
                        <TableRow key={index}>
                          <TableCell>{asset.ticker}</TableCell>
                          <TableCell>{asset.amount}</TableCell>
                          <TableCell>${formatNumber(cryptoData[asset.ticker]?.price?.toFixed(2) || '0')}</TableCell>
                          <TableCell>
                            ${formatNumber(((cryptoData[asset.ticker]?.price || 0) * asset.amount).toFixed(2))}
                          </TableCell>
                          <TableCell className={
                            cryptoData[asset.ticker]?.change > 0 ? 'text-green-500' : 'text-red-500'
                          }>
                            {cryptoData[asset.ticker]?.change?.toFixed(2) || 0}%
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button
                                variant="secondary"
                                size="sm"
                                onClick={() => handleEdit(asset)}
                              >
                                Edit
                              </Button>
                              <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => removeFromPortfolio(index)}
                              >
                                Remove
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <p className="mt-4 font-bold">
                    Total Portfolio Value: ${formatNumber(calculatePortfolioValue().toFixed(2))}
                  </p>
                </>
              )}
            </TabsContent>

            <TabsContent value="news">
              <div className="grid gap-4">
                {portfolio.map((asset, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{asset.ticker} News</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {cryptoData[asset.ticker]?.news.map((item, i) => (
                          <li key={i}>
                            <a
                              href={item.url}
                              className="text-blue-500 hover:underline"
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="charts">
              <div className="grid gap-4">
                {portfolio.map((asset, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{asset.ticker} Chart</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <iframe
                        src={cryptoData[asset.ticker]?.chartUrl}
                        className="w-full h-96"
                        title={`${asset.ticker} Chart`}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      {editingAsset && (
        <EditDialog
          asset={editingAsset}
          onSave={handleEditSave}
          onClose={() => {
            setIsEditDialogOpen(false)
            setEditingAsset(null)
          }}
          isOpen={isEditDialogOpen}
        />
      )}
    </div>
  )
}