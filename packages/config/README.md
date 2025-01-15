# app-env

This package manages the environment configurations for the smartsale project, covering production, pre-production, and development settings. 
These are public configurations, and private environment variables must be used for secrets, such as private keys, in each project. 
Provides a single source of truth for all environment configurations, making it easier to manage and update configurations across the project.

## Environments

- **Production (prod)**: [bitlauncher.ai](https://bitlauncher.ai) - Mainnet auction contracts with real tokens.
- **Pre-Production (test)**: [test.bitlauncher.ai](https://test.bitlauncher.ai) - Mainnet pre-prod auction contracts with real tokens.
- **Development (dev)**: [dev.bitlauncher.ai](https://dev.bitlauncher.ai) - Testnet auction contracts with mocked tokens.

All preview deployments run against the development environment.

## Usage

This package is used to provide environment configurations to the smartsale project.

```tsx
import { environment } from '@repo/config

// get the environment config for the current environment
const config = environment[process.env.NEXT_PUBLIC_APP_ENV || 'dev']

// get the chain config for the current environment
const chain = config.chains[106]

```

