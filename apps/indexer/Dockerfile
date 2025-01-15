# Start from the bun base image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy the package.json files for the workspaces
COPY package.json .
COPY apps/indexer/package.json ./apps/indexer/package.json

COPY services/trigger/package.json ./services/trigger/package.json
COPY services/supabase/package.json ./services/supabase/package.json
COPY services/alchemy/package.json ./services/alchemy/package.json

COPY packages/config/package.json ./packages/config/package.json
COPY packages/auction/package.json ./packages/auction/package.json
COPY packages/utils/package.json ./packages/utils/package.json
COPY packages/errors/package.json ./packages/errors/package.json
COPY packages/tokens/package.json ./packages/tokens/package.json
COPY packages/chains/package.json ./packages/chains/package.json

COPY tooling/tsconfig/package.json ./tooling/tsconfig/package.json

# Copy the lock file
COPY bun.lockb .

# Install dependencies for the entire monorepo
RUN mkdir hardhat
RUN npm install -g bun 
RUN bun install -g ts-node tsconfig-paths ts-node-dev
RUN bun install

# Copy the specific workspaces
COPY apps/indexer ./apps/indexer
COPY packages/ ./packages/
COPY services/ ./services/
COPY tooling/ ./tooling/

# Set the working directory to your specific workspace
WORKDIR /app/apps/indexer

EXPOSE 8080
CMD ["bun", "prod"]