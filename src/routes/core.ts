import { Request, Response } from 'express'
//import accessController from '../controllers/accessController'
import express from 'express'
import cacheService from 'express-api-cache'
const cache = cacheService.cache
import {
  getNoOfErc721,
  getUniqueConsumers,
  getUniquePublishMarkets
} from '../controllers/core'

const router = express.Router()

router.get(
  '/publishedNFT',
  cache('10 minutes'),
  async function (req: Request, res: Response) {
    const { since, to } = req.query
    let from, limit
    const now = Math.floor(Date.now() / 1000)
    if (!since) from = now - 15780000 // 6 months
    else from = parseInt(since as string)
    if (!to) limit = now
    else limit = parseInt(to as string)
    const deposits = await getNoOfErc721(from, limit)
    res.status(200).json(deposits)
  }
)
router.get(
  '/uniqueConsumers',
  cache('10 minutes'),
  async function (req: Request, res: Response) {
    const { since, to } = req.query
    let from, limit
    const now = Math.floor(Date.now() / 1000)
    if (!since) from = now - 15780000 // 6 months
    else from = parseInt(since as string)
    if (!to) limit = now
    else limit = parseInt(to as string)
    const deposits = await getUniqueConsumers(from, limit)
    res.status(200).json(deposits)
  }
)
router.get(
  '/uniquePublishMarkets',
  cache('10 minutes'),
  async function (req: Request, res: Response) {
    const { since, to } = req.query
    let from, limit
    const now = Math.floor(Date.now() / 1000)
    if (!since) from = now - 15780000 // 6 months
    else from = parseInt(since as string)
    if (!to) limit = now
    else limit = parseInt(to as string)
    const deposits = await getUniquePublishMarkets(from, limit)
    res.status(200).json(deposits)
  }
)

export default router
