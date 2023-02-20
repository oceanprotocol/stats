import networks from '../config/index'

export function getSubgraphUrlFromChainId(chainId: number): string {
  const network = networks.filter((obj) => {
    return obj.chainId === chainId
  })
  console.log(network)
  return network[0].subgraphUrl
}
