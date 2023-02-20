import { time } from 'console'
import { networks } from '../config/index'

export function getSubgraphUrlFromChainId(chainId: number): string {
  const network = networks.filter((obj) => {
    return obj.chainId === chainId
  })
  return network[0].subgraphUrl
}

export function getYearAndWeek(timestamp: number) {
  const dt = new Date(timestamp * 1000)
  const tdt = new Date(dt.valueOf())
  const dayn = (dt.getDay() + 6) % 7
  tdt.setDate(tdt.getDate() - dayn + 3)
  const firstThursday = tdt.valueOf()
  tdt.setMonth(0, 1)
  if (tdt.getDay() !== 4) {
    tdt.setMonth(0, 1 + ((4 - tdt.getDay() + 7) % 7))
  }
  const week = 1 + Math.ceil((firstThursday - (tdt as any)) / 604800000)
  const key = tdt.getFullYear() + '-' + week
  return key
}
export function getWeeksOfYear(from: number, to: number) {
  // returns all weeks from to
  const keys = []

  let current = from
  do {
    keys.push(getYearAndWeek(current))
    current += 7 * 86400
  } while (current < to)
  return keys
}
