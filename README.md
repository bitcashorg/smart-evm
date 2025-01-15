# SmartSale

Welcome to the SmartSale repository! This document provides a comprehensive overview of our platform designed for executing batch auctions for fair initial offerings and token buyback programs. SmartSale offers a streamlined user experience in the blockchain ecosystem, making it a foundational tool for price-discovery.

## Introduction

SmartSale is crafted to enhance the decentralized finance (DeFi) ecosystem by providing a reliable and fair auction mechanism. By adopting batch auctions, our platform ensures fair price discovery and equitable participation, supporting the democratization of financial systems through blockchain technology.

## Features

- **Batch Auction Mechanism**: Allows for fair and transparent price setting through batch auctions, ensuring all participants receive equal treatment.
- **Token Buyback Programs**: Supports projects in managing their tokenomics by facilitating scheduled buyback auctions.
- **Enhanced User Experience**: Simplifies the user interface to accommodate both novice and experienced users in the DeFi space.
- **Open-Source Community**: Promotes an open development environment, encouraging contributions and collaborations within the community.

### What problem are we solving?

SmartSale addresses critical challenges in the execution of initial token offerings and token buybacks within the DeFi ecosystem.

**Problem #1: Traditional financial systems and early blockchain implementations of token sales often lack transparency and fairness in price setting.**

Solution: SmartSale employs a batch auction system, proven in market mechanisms, to establish a single clearing price for all participants. This approach ensures transparency and fairness, reflecting true market demand and reducing the likelihood of price manipulation.

**Problem #2: Existing platforms like Gnosis Protocol v1 have highlighted the need for enhanced scalability and user experience in managing decentralized auctions.**

Solution: Building on the foundational concepts of its predecessors, SmartSale optimizes the auction process to handle a large number of bids efficiently within a single auction. This optimization improves predictability and user experience for all participants.

SmartSale is committed to compliance and security, rigorously adhering to emerging regulations such as MiCA to minimize legal risks for new projects and ensure a stable operational framework.

## Project Overview

This document provides an overview of the applications and packages within the project, along with a brief description of the Hardhat setup.

### Hardhat (`/hardhat`)
- [Hardhat](https://hardhat.org/): Development environment for Ethereum software, including configurations and scripts for compiling, testing, and deploying smart contracts.

### Applications
- [Faucet](https://github.com/your-repo/smartsale/tree/main/apps/faucet): Distributes test tokens or currencies in blockchain networks for testing purposes.
- [Indexer](https://github.com/your-repo/smartsale/tree/main/apps/indexer): Indexes blockchain data by listening to the network, extracting data from blocks, transactions, and events, and storing it for easy querying.
- [Webapp](https://github.com/your-repo/smartsale/tree/main/apps/webapp): Front-end application providing a user interface for displaying blockchain data, interacting with smart contracts.

### Services
- [Alchemy](https://github.com/your-repo/smartsale/tree/main/packages/alchemy): Integrates with the Alchemy SDK for interacting with Ethereum and other blockchain networks.
- [Jobs](https://github.com/your-repo/smartsale/tree/main/packages/jobs): Contains background tasks and scheduled processes using Trigger.dev for efficient asynchronous operations.
- [Supabase](https://github.com/your-repo/smartsale/tree/main/packages/supabase): Integrates with Supabase for real-time database functionality, authentication, and storage services.

### Packages
- [Config](https://github.com/your-repo/smartsale/tree/main/packages/config): Provides shared configuration.
- [Chains](https://github.com/your-repo/smartsale/tree/main/packages/chains): Contains definitions, interfaces, and utilities for various tokens in the SmartSale ecosystem.
- [Tokens](https://github.com/your-repo/smartsale/tree/main/packages/tokens): Includes definitions and utilities for ERC20 token implementations.
- [Auction](https://github.com/your-repo/smartsale/tree/main/packages/auction): Includes auction contracts and utilities.
- [Errors](https://github.com/your-repo/smartsale/tree/main/packages/errors): Contains an error catalog and utilities.
- [Utils](https://github.com/your-repo/smartsale/tree/main/packages/utils): Provides utility functions and helpers.

### Tooling
- [Config TypeScript](https://github.com/your-repo/smartsale/tree/main/tooling/tsconfig): Offers shared TypeScript configurations for standardizing compilation options across the project.

## Requirements

- **Bun**: Provides a faster runtime for JavaScript, enhancing development efficiency.
- **Supabase CLI**: Facilitates local development and effective database schema management.
- **Docker**: Essential for creating isolated environments, ensuring consistent operation across different setups.

## Tech Stack

### Backend & APIs

- **Supabase**
  - Manages authentication and real-time data interactions.
  - **Advanced Search**: Supports complex queries necessary for managing auction data.

### Frontend & Design

- **Next.js 14**
  - Utilizes efficient routing mechanisms and server-side data fetching to provide a smooth user experience.
  - [Learn more about Next.js](https://nextjs.org/docs/routing/introduction)

- **Shadcn & Radix**
  - Offers pre-designed UI components, making the development process faster and more accessible.
  - [Learn more about Shadcn](https://shadcn.com/)
  - [Learn more about Radix](https://www.radix-ui.com/)

### Smart Contracts

- **EVM Solidity**
  - Utilizes Ethereum's Solidity programming for creating reliable and secure smart contracts essential for auction operations.

### DevOps and Tools

- **Turbo Monorepo**
  - Enhances codebase management with efficient build processes and dependency caching.
  - [Learn more about Turbo Monorepo](https://turborepo.org/)

- **Lighthouse CI**
  - Ensures high performance and accessibility standards are met, integrating seamlessly with continuous integration pipelines.
  - [Learn more about Lighthouse CI](https://developers.google.com/web/tools/lighthouse#ci)

### Animation

- **Framer Motion for React**
  - Provides dynamic visual feedback through animations, enhancing user interface interactions.
  - [Learn more about Framer Motion](https://www.framer.com/motion/)

- **UseAnimations React Library**
  - Offers a collection of ready-to-use animations, enriching the user experience across the platform.
  - [Learn more about UseAnimations](https://useanimations.github.io/react-useanimations/)

## Installation

To get started with SmartSale, clone the repository and set up the environment:

```bash
git clone https://github.com/bitcashorg/smartsale.git
cd smartsale
bun install
```

## Usage

Kickstart the (overall) development server:

```bash
bun run dev
```

### webapp

To run the webapp:

```bash
task run app # cd apps/webapp && bun dev
```

## Contributing

We value contributions from the community and encourage participation through code contributions, feedback, and suggestions. Join our collaborative efforts to refine and expand the capabilities of SmartSale.

Join our community on Discord for real-time collaboration: [Join us on Discord!](https://discord.com/invite/a4gwhT9G)

Please ensure to update tests appropriately and adhere to our code of conduct.

## License

This project is licensed under the MIT License - see the `LICENSE` file for

## Acknowledgments

This project is a fork of [Gnosis Auction Contracts](https://github.com/Gnosis-Auction/auction-contracts).
