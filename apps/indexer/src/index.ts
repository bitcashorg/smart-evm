import { getErrorMessage } from '@repo/errors'
import { logger } from './lib/logger'
import { startPresaleService } from './modules/presale'

async function main() {
  logger.info('Launchpad indexer starting up ...')
  try {
    // startExpress()
    startPresaleService()
    // startSwapsService()
    // startAuctionIndexer()
  } catch (error) {
    logger.error(getErrorMessage(error))
  }
}

main()
