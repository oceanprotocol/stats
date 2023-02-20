import { Request, Response } from 'express'
//import accessController from '../controllers/accessController'
import express from 'express'
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
router.get('/deposits', async function (req: Request, res: Response) {
  const { since, to } = req.query
  let from, limit
  const now = Math.floor(Date.now() / 1000)
  if (!since) from = now - 15780000 // 6 months
  else from = parseInt(since as string)
  if (!to) limit = now
  else limit = parseInt(to as string)
  const deposits = await veGetDeposits(from, limit)
  res.status(200).send(deposits)
})
router.get('/withdraws', async function (req: Request, res: Response) {
  const { since, to } = req.query
  let from, limit
  const now = Math.floor(Date.now() / 1000)
  if (!since) from = now - 15780000 // 6 months
  else from = parseInt(since as string)
  if (!to) limit = now
  else limit = parseInt(to as string)
  const deposits = await veGetWithdraws(from, limit)
  res.status(200).send(deposits)
})

export default router
