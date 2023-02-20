import {
  getSubgraphUrlFromChainId,
  getYearAndWeek,
  getWeeksOfYear
} from '../helpers/index'
import { networks } from '../config/index'
import fetch from 'cross-fetch'

async function getNoOfErc721PerChain(
  chainId: number,
  from: number,
  to: number
) {
  const subgraphUrl = getSubgraphUrlFromChainId(chainId)
  let skip = 0
  const nfts = {}
  const weeks = getWeeksOfYear(from, to)
  for (const week of weeks) nfts[week] = 0
  do {
    const query = {
      query: `query{
                  nfts(where:{createdTimestamp_gte:${from} createdTimestamp_lt:${to}} skip:${skip}, first:1000 orderBy:createdTimestamp orderDirection:asc){
                    createdTimestamp
                  }
              }`
    }
    //console.log(query)
    const response = await fetch(subgraphUrl, {
      method: 'POST',
      body: JSON.stringify(query)
    })
    const respJSON = await response.json()
    skip = skip + 1000
    if (!respJSON.data || respJSON.data.nfts.length < 1) {
      break
    }
    for (const row of respJSON.data.nfts) {
      const key = getYearAndWeek(row.createdTimestamp)
      nfts[key]++
    }
    // eslint-disable-next-line no-constant-condition
  } while (true)
  return nfts
}

export async function getNoOfErc721(from: number, to: number) {
  const prom = []
  const results = {}
  const weeks = getWeeksOfYear(from, to)
  for (const week of weeks) results[week] = 0
  let i = 0
  for (const network of networks) {
    prom[i] = getNoOfErc721PerChain(network.chainId, from, to)
    i++
  }
  const allPromises = await Promise.all(prom)
  for (const week of weeks) {
    i = 0
    for (const network of networks) {
      results[week] += allPromises[i][week]
      i++
    }
  }

  return results
}
