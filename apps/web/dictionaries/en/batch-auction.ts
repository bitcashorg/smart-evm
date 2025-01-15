import type { PageContentData } from '@/components/shared/content'

export const batchAuction = {
  content: [
    { type: 'h1', text: 'How Bitlauncher Works' },
    {
      type: 'p',
      text: 'Enabling fair price discovery for token auctions.',
    },
    {
      type: 'p',
      text: 'The aim of the platform is to make it easy for teams to discover a fair price for their token. Bitlauncher uses batch auctions, which are a popular mechanism for ensuring fair price for both the decentralized and traditional finance worlds. Batch auctions enable matching of limit orders of buyers and sellers with the same clearing price for all participants. From crypto use cases like Initial DEX Offerings (like those on the Mesa interface for Gnosis Protocol v1) to traditional finance auctions (like Google’s IPO and the NYSE Open Auction), batch auctions play an important role in the democratization of the auctioned assets. This function is especially important for decentralized teams which need to ensure fair token distributions while operating trustlessly and efficiently. Batch auctions are set to become a fundamental “DeFi Lego” brick for any team or community interested in offering their users the most transparent and fairest auction-mechanism for their token.',
    },
    {
      type: 'Image',
      src: '/images/learn/batch-auctions/batch-auctions.webp',
      alt: 'Comparison Chart',
      width: 720,
      height: 400,
      layout: 'responsive',
      className: 'dark:invert',
    },
    { type: 'h2', text: 'Comparison of Different Auction Mechanisms' },
    {
      type: 'p',
      text: 'With bitlauncher’s open-source smart contract, projects can quickly and securely create their own decentralized fair auctions. Unlike some solutions dependent on a centralized curation process, Bitlauncher is permissionless so that any Ethereum team can deploy & execute batch auctions for price finding. Bitlauncher allows any Ethereum project or community to conduct auctions that:',
    },
    {
      type: 'Image',
      src: '/images/auction-comparison.webp',
      alt: 'Comparison Chart',
      width: 720,
      height: 400,
      layout: 'responsive',
      className: 'dark:invert',
    },
    {
      type: 'Image',
      src: '/images/learn/batch-auctions/batch-auction.webp',
      alt: 'Batch Auction',
      width: 720,
      height: 400,
      layout: 'responsive',
      className: 'dark:invert',
    },
    { type: 'h2', text: 'Fair Price Discovery with Bitlauncher' },
    {
      type: 'p',
      text: 'By providing an easy interface for price discovery with batch auctions, Bitlauncher enables:',
    },
    {
      type: 'ul',
      items: [
        'Auctioneers to determine a minimum price they are willing to sell their tokens for, and',
        'Bidders to set the maximum price they are willing to pay',
      ],
    },
    {
      type: 'p',
      text: 'These characteristics allow the platform to create a fair pricing dynamic in which both participants get either what they were willing to receive or more. Additionally the batched time nature of the auctions greatly reduces frontrunning and gas bidding wars, decreasing the amount of extracted value from auctioneers and bidders.',
    },
  ] as PageContentData,
}
