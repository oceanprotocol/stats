import {
  getSubgraphUrlFromChainId,
  getYearAndWeek,
  getWeeksOfYear
} from '../helpers/index'
import fetch from 'cross-fetch'

export async function veGetActions(from: number, to: number) {
  const subgraphUrl = getSubgraphUrlFromChainId(1)
  let skip = 0
  const deposits = {}
  const weeks = getWeeksOfYear(from, to)
  for (const week of weeks) {
    deposits[week] = {}
    for (let i = 0; i <= 4; i++) deposits[week][i] = 0
  }
  do {
    const query = {
      query: `query{
                  veDeposits(where:{timestamp_gte:${from} timestamp_lt:${to}} skip:${skip}, first:1000 orderBy:timestamp orderDirection:asc){
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
      deposits[key][row.type] += 1
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
  for (const week of weeks) {
    deposits[week] = {}
    for (let i = 0; i <= 4; i++) deposits[week][i] = 0
  }
  do {
    const query = {
      query: `query{
                  veDeposits(where:{timestamp_gte:${from} timestamp_lt:${to}} skip:${skip}, first:1000 orderBy:timestamp orderDirection:asc){
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
      deposits[key][row.type] += parseFloat(row.value)
    }
    // eslint-disable-next-line no-constant-condition
  } while (true)
  return deposits
}

export async function veGetWeeklyLockedAmount(from: number, to: number) {
  const subgraphUrl = getSubgraphUrlFromChainId(1)
  let skip = 0
  const deposits = {}
  const weeks = getWeeksOfYear(from, to)
  for (const week of weeks) deposits[week] = 0
  do {
    const query = {
      query: `query{
                  veDeposits(where:{timestamp_gte:${from} timestamp_lt:${to}} skip:${skip}, first:1000 orderBy:timestamp orderDirection:asc){
                    totalOceanLocked
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
      deposits[key] = parseFloat(row.totalOceanLocked)
    }
    // eslint-disable-next-line no-constant-condition
  } while (true)
  return deposits
}

export async function veGetLockedAmount() {
  const subgraphUrl = getSubgraphUrlFromChainId(1)
  const query = {
    query: `query{
                veDeposits(orderBy: timestamp orderDirection:desc first:1){
                  totalOceanLocked
                }
              }`
  }
  const response = await fetch(subgraphUrl, {
    method: 'POST',
    body: JSON.stringify(query)
  })
  const respJSON = await response.json()
  if (!respJSON.data || respJSON.data.veDeposits.length < 1) {
    return 0
  }

  return respJSON.data.veDeposits[0].totalOceanLocked
}
