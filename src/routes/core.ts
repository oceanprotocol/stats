import { Request, Response } from 'express'
//import accessController from '../controllers/accessController'
import express from 'express'
import { getNoOfErc721, getUniqueConsumers } from '../controllers/core'

const router = express.Router()

router.get('/publishedNFT', async function (req: Request, res: Response) {
  const { since, to } = req.query
  let from, limit
  const now = Math.floor(Date.now() / 1000)
  if (!since) from = now - 15780000 // 6 months
  else from = parseInt(since as string)
  if (!to) limit = now
  else limit = parseInt(to as string)
  const deposits = await getNoOfErc721(from, limit)
  res.status(200).send(deposits)
})
router.get('/uniqueConsumers', async function (req: Request, res: Response) {
  const { since, to } = req.query
  let from, limit
  const now = Math.floor(Date.now() / 1000)
  if (!since) from = now - 15780000 // 6 months
  else from = parseInt(since as string)
  if (!to) limit = now
  else limit = parseInt(to as string)
  const deposits = await getUniqueConsumers(from, limit)
  res.status(200).send(deposits)
})

export default router
