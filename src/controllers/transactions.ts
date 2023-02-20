/*
async function getConsumes(start, end, weekType){
    for(network of networks){
        let skip = 0
        do {
            const query = {
                query: `query{
                            orders(skip:${skip}, first:1000, where: {createdTimestamp_gte: ${start}  createdTimestamp_lt: ${end}}){
                            id
                            datatoken {
                                id
                                nft{
                                    id
                                }    
                            }
                            createdTimestamp
                            lastPriceToken
                            lastPriceValue
                            gasUsed
                            gasPrice
                            }
                        }`
            }
            const response = await fetch(network.subgraphUrl, {
                method: 'POST',
                body: JSON.stringify(query)
            })
            const respJSON = await response.json()
            skip = skip + 1000
            if (!respJSON.data || respJSON.data.orders.length < 1) {
                break
            }
            const orders=respJSON.data.orders
            for (order of orders) {
                const id=order.datatoken.nft.id+"-"+String(network.chainId)
                if(!datasets.hasOwnProperty(id)){
                    await createDatasetObject(order.datatoken.nft.id,network.chainId)
                }
                //console.log("==============================================\n")
                //console.log(dataset)
                //console.log("==============================================\n")
                if(datasets.hasOwnProperty(id)){
                    if (debug) console.log("nft:"+order.datatoken.nft.id+"   getUsdValue("+order.lastPriceToken+","+order.lastPriceValue+","+network.token+","+order.gasUsed+","+order.gasPrice)
                    const usdValue=await getUsdValue(order.lastPriceToken,order.lastPriceValue,network.token.toLowerCase(),order.gasUsed,order.gasPrice)
                    totalUSDT+=usdValue
                    if (debug) console.log("Got:"+usdValue)
                    const d=new Date(order.createdTimestamp * 1000)
                    const when=d.getUTCDate()+" "+d.getUTCMonth()
                    switch(weekType){
                        case 0:
                            datasets[id].thisWeekConsumesUsdt+=usdValue; 
                            datasets[id].thisWeekConsumes++; 
                            datasets[id].thisWeekConsumesArr.push({"when":when,'value':usdValue})
                            break
                        case 1:
                            datasets[id].lastWeekConsumesUsdt+=usdValue; 
                            datasets[id].lastWeekConsumes++; 
                            datasets[id].lastWeekConsumesArr.push({"when":when,'value':usdValue})
                            break;
                    }
                    
                    
                    
                }
            }

        }
        while(true)

    }
  }
  */
