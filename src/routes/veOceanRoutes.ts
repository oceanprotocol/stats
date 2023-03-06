import { Request, Response } from 'express'
//import accessController from '../controllers/accessController'
import express from 'express'
import cacheService from 'express-api-cache'
const cache = cacheService.cache
import {
  veGetLockedAmount,
  veGetDeposits,
  veGetWithdraws
} from '../controllers/veOcean'

const router = express.Router()

/* GET Access role premissions. */
router.get('/lockedAmount', async function (req: Request, res: Response) {
  const lockedAmount = await veGetLockedAmount()
  console.log('lockedAmount:' + lockedAmount)
  res.status(200).send('' + lockedAmount)
})
router.get(
  '/deposits',
  cache('10 minutes'),
  async function (req: Request, res: Response) {
    const { since, to } = req.query
    let from, limit
    const now = Math.floor(Date.now() / 1000)
    if (!since) from = now - 15780000 // 6 months
    else from = parseInt(since as string)
    if (!to) limit = now
    else limit = parseInt(to as string)
    const deposits = await veGetDeposits(from, limit)
    res.status(200).json(deposits)
  }
)
router.get(
  '/withdraws',
  cache('10 minutes'),
  async function (req: Request, res: Response) {
    const { since, to } = req.query
    let from, limit
    const now = Math.floor(Date.now() / 1000)
    if (!since) from = now - 15780000 // 6 months
    else from = parseInt(since as string)
    if (!to) limit = now
    else limit = parseInt(to as string)
    const deposits = await veGetWithdraws(from, limit)
    res.status(200).json(deposits)
  }
)

export default router
