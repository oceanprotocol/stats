import {
  getSubgraphUrlFromChainId,
  getYearAndWeek,
  getWeeksOfYear
} from '../helpers/index'
import fetch from 'cross-fetch'

export async function veGetWithdraws(from: number, to: number) {
  const subgraphUrl = getSubgraphUrlFromChainId(1)
  let skip = 0
  const deposits = {}
  const weeks = getWeeksOfYear(from, to)
  for (const week of weeks) deposits[week] = 0
  do {
    const query = {
      query: `query{
                  veDeposits(where:{type:4 timestamp_gte:${from} timestamp_lt:${to}} skip:${skip}, first:1000 orderBy:timestamp orderDirection:asc){
                              value
                              type
                              timestamp
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
    if (!respJSON.data || respJSON.data.veDeposits.length < 1) {
      break
    }
    for (const row of respJSON.data.veDeposits) {
      const key = getYearAndWeek(row.timestamp)
      deposits[key] += parseFloat(row.value) * -1
    }
    // eslint-disable-next-line no-constant-condition
  } while (true)
  return deposits
}
export async function veGetDeposits(from: number, to: number) {
  const subgraphUrl = getSubgraphUrlFromChainId(1)
  let skip = 0
  const deposits = {}
  const weeks = getWeeksOfYear(from, to)
  for (const week of weeks) deposits[week] = 0
  do {
    const query = {
      query: `query{
                  veDeposits(where:{type:1 timestamp_gte:${from} timestamp_lt:${to}} skip:${skip}, first:1000 orderBy:timestamp orderDirection:asc){
                              value
                              type
                              timestamp
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
    if (!respJSON.data || respJSON.data.veDeposits.length < 1) {
      break
    }
    for (const row of respJSON.data.veDeposits) {
      const key = getYearAndWeek(row.timestamp)
      deposits[key] += parseFloat(row.value)
    }
    // eslint-disable-next-line no-constant-condition
  } while (true)
  return deposits
}
export async function veGetLockedAmount() {
  const subgraphUrl = getSubgraphUrlFromChainId(1)
  let skip = 0
  let totalLocked = 0
  do {
    const query = {
      query: `query{
                          veOCEANs(skip:${skip}, first:1000){
                            lockedAmount
                          }
                        }`
    }
    const response = await fetch(subgraphUrl, {
      method: 'POST',
      body: JSON.stringify(query)
    })
    const respJSON = await response.json()
    skip = skip + 1000
    if (!respJSON.data || respJSON.data.veOCEANs.length < 1) {
      break
    }
    for (const row of respJSON.data.veOCEANs) {
      totalLocked += parseFloat(row.lockedAmount)
    }
    // eslint-disable-next-line no-constant-condition
  } while (true)
  return totalLocked
}
