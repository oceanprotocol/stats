import { getSubgraphUrlFromChainId } from '../helpers/index'
import fetch from 'cross-fetch'

export async function veGetWithdraws(from: number, to: number) {
  const subgraphUrl = getSubgraphUrlFromChainId(1)
  let skip = 0
  const deposits = {}
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
      const date = new Date(row.timestamp * 1000)
      const year = date.getFullYear()
      const oneJan = new Date(year, 0, 1)
      const numberOfDays = Math.floor(
        ((date as any) - (oneJan as any)) / (24 * 60 * 60 * 1000)
      )
      const week = Math.ceil((date.getDay() + 1 + numberOfDays) / 7)
      const key = year + '-' + week
      if (!(key in deposits)) deposits[key] = 0
      deposits[key] += parseFloat(row.value)*-1
    }
    // eslint-disable-next-line no-constant-condition
  } while (true)
  return deposits
}
export async function veGetDeposits(from: number, to: number) {
  const subgraphUrl = getSubgraphUrlFromChainId(1)
  let skip = 0
  const deposits = {}
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
      const date = new Date(row.timestamp * 1000)
      const year = date.getFullYear()
      const oneJan = new Date(year, 0, 1)
      const numberOfDays = Math.floor(
        ((date as any) - (oneJan as any)) / (24 * 60 * 60 * 1000)
      )
      const week = Math.ceil((date.getDay() + 1 + numberOfDays) / 7)
      const key = year + '-' + week
      if (!(key in deposits)) deposits[key] = 0
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
