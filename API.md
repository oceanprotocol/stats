# Stats REST API

## VeOcean

### **Get** `/api/veOcean/lockedAmount`

- Description

    Returns total locked Ocean

### **Get** `/api/veOcean/deposits`

- Description

    Returns a json object which contains week no in a year and amount of ocean deposited

- Example
```json
{"2022-39":2888109,"2022-40":5191535,"2022-41":3872841,"2022-42":2528677,"2022-43":1061958,"2022-44":1550195,"2022-45":3601578,"2022-46":563982,"2022-47":3376665,"2022-48":141386,"2022-49":918299,"2022-50":238507,"2022-51":5317844,"2022-52":195225,"2022-53":33867,"2023-1":150856,"2023-2":223131,"2023-3":233288,"2023-4":184532,"2023-5":473586,"2023-6":626580,"2023-7":70221,"2023-8":58339}
```

- Parameters

    | name   | description                 | in   | required | default       |
    |--------|-----------------------------|------|----------|-------------- |
    | `since`| timestamp of start period   | path | no       | 6 months ago  |
    | `to`   | timestamp of end period     | path | no       | now           |

### **Get** `/api/veOcean/withdraws`

- Description

    Returns a json object which contains week no in a year and amount of ocean withdrawed

- Example
```json
{"2022-42":1331837,"2022-43":63687,"2022-44":879668,"2022-45":1773910,"2022-46":1010,"2022-47":207431,"2022-48":29655,"2022-49":523352,"2022-50":54822,"2022-51":138839,"2022-52":2995026,"2022-53":61520,"2023-1":12670,"2023-2":662956,"2023-3":26538,"2023-4":56008,"2023-5":114613,"2023-6":37948,"2023-7":30126,"2023-8":2773}
```

- Parameters

    | name   | description                 | in   | required | default       |
    |--------|-----------------------------|------|----------|-------------- |
    | `since`| timestamp of start period   | path | no       | 6 months ago  |
    | `to`   | timestamp of end period     | path | no       | now           |


## Core stats

### **Get** `/api/core/publishedNFT`

- Description

    Returns a json object which contains number of published nfts each week on all production chains

- Example
```json
{"2022-34":0,"2022-35":3,"2022-36":11,"2022-37":3,"2022-38":10,"2022-39":4,"2022-40":12,"2022-41":43,"2022-42":12,"2022-43":5,"2022-44":18,"2022-45":33,"2022-46":45,"2022-47":32,"2022-48":286,"2022-49":92,"2022-50":229,"2022-51":84,"2022-52":35,"2023-1":65,"2023-2":82,"2023-3":59,"2023-4":110,"2023-5":152,"2023-6":118,"2023-7":87,"2023-8":41}
```

- Parameters

    | name   | description                 | in   | required | default       |
    |--------|-----------------------------|------|----------|-------------- |
    | `since`| timestamp of start period   | path | no       | 6 months ago  |
    | `to`   | timestamp of end period     | path | no       | now           |


### **Get** `/api/core/uniqueConsumers`

- Description

    Returns a json object which contains number of unique consumers each week on all production chains

- Example
```json
{"2022-34":1,"2022-35":3,"2022-36":7,"2022-37":11,"2022-38":13,"2022-39":12,"2022-40":23,"2022-41":16,"2022-42":18,"2022-43":13,"2022-44":23,"2022-45":17,"2022-46":10,"2022-47":8,"2022-48":9,"2022-49":21,"2022-50":17,"2022-51":11,"2022-52":12,"2023-1":43,"2023-2":43,"2023-3":34,"2023-4":44,"2023-5":48,"2023-6":41,"2023-7":53,"2023-8":1}
```

- Parameters

    | name   | description                 | in   | required | default       |
    |--------|-----------------------------|------|----------|-------------- |
    | `since`| timestamp of start period   | path | no       | 6 months ago  |
    | `to`   | timestamp of end period     | path | no       | now           |


### **Get** `/api/core/uniquePublishMarkets`

- Description

    Returns a json object which contains number of unique Publishing Markets each week on all production chains

- Example
```json
{"2022-34":0,"2022-35":2,"2022-36":2,"2022-37":2,"2022-38":4,"2022-39":1,"2022-40":4,"2022-41":4,"2022-42":3,"2022-43":2,"2022-44":7,"2022-45":6,"2022-46":4,"2022-47":3,"2022-48":1,"2022-49":4,"2022-50":3,"2022-51":1,"2022-52":2,"2023-1":2,"2023-2":6,"2023-3":1,"2023-4":8,"2023-5":1,"2023-6":2,"2023-7":1,"2023-8":3}
```

- Parameters

    | name   | description                 | in   | required | default       |
    |--------|-----------------------------|------|----------|-------------- |
    | `since`| timestamp of start period   | path | no       | 6 months ago  |
    | `to`   | timestamp of end period     | path | no       | now           |


### **Get** `/api/core/uniqueConsumeMarkets`

- Description

    Returns a json object which contains number of unique Consume Markets each week on all production chains

- Example
```json
{"2022-34":0,"2022-35":2,"2022-36":2,"2022-37":2,"2022-38":4,"2022-39":1,"2022-40":4,"2022-41":4,"2022-42":3,"2022-43":2,"2022-44":7,"2022-45":6,"2022-46":4,"2022-47":3,"2022-48":1,"2022-49":4,"2022-50":3,"2022-51":1,"2022-52":2,"2023-1":2,"2023-2":6,"2023-3":1,"2023-4":8,"2023-5":1,"2023-6":2,"2023-7":1,"2023-8":3}
```

- Parameters

    | name   | description                 | in   | required | default       |
    |--------|-----------------------------|------|----------|-------------- |
    | `since`| timestamp of start period   | path | no       | 6 months ago  |
    | `to`   | timestamp of end period     | path | no       | now           |

### **Get** `/api/core/freeConsumes`

- Description

    Returns a json object which contains number of free orders each week on all production chains

- Example
```json
{"2022-34":0,"2022-35":2,"2022-36":2,"2022-37":2,"2022-38":4,"2022-39":1,"2022-40":4,"2022-41":4,"2022-42":3,"2022-43":2,"2022-44":7,"2022-45":6,"2022-46":4,"2022-47":3,"2022-48":1,"2022-49":4,"2022-50":3,"2022-51":1,"2022-52":2,"2023-1":2,"2023-2":6,"2023-3":1,"2023-4":8,"2023-5":1,"2023-6":2,"2023-7":1,"2023-8":3}
```

- Parameters

    | name   | description                 | in   | required | default       |
    |--------|-----------------------------|------|----------|-------------- |
    | `since`| timestamp of start period   | path | no       | 6 months ago  |
    | `to`   | timestamp of end period     | path | no       | now           |


### **Get** `/api/core/oceanConsumes`

- Description

    Returns a json object which contains number of ocean orders each week on all production chains

- Example
```json
{"2022-35":{"Mainnet":0,"Polygon":0,"BSC":0,"ewf":0,"Moonriver":0},"2022-36":{"Mainnet":0,"Polygon":0,"BSC":0,"ewf":0,"Moonriver":0},"2022-37":{"Mainnet":0,"Polygon":0,"BSC":0,"ewf":0,"Moonriver":0},"2022-38":{"Mainnet":0,"Polygon":0,"BSC":0,"ewf":0,"Moonriver":0},"2022-39":{"Mainnet":0,"Polygon":207,"BSC":0,"ewf":0,"Moonriver":0},"2022-40":{"Mainnet":0,"Polygon":652,"BSC":0,"ewf":0,"Moonriver":0},"2022-41":{"Mainnet":0,"Polygon":867,"BSC":0,"ewf":0,"Moonriver":0},"2022-42":{"Mainnet":0,"Polygon":1746,"BSC":0,"ewf":0,"Moonriver":0},"2022-43":{"Mainnet":0,"Polygon":872,"BSC":0,"ewf":0,"Moonriver":0},"2022-44":{"Mainnet":0,"Polygon":59183,"BSC":0,"ewf":0,"Moonriver":0},"2022-45":{"Mainnet":0,"Polygon":118426,"BSC":0,"ewf":0,"Moonriver":0},"2022-46":{"Mainnet":0,"Polygon":229634,"BSC":0,"ewf":0,"Moonriver":0},"2022-47":{"Mainnet":0,"Polygon":62688,"BSC":0,"ewf":0,"Moonriver":0},"2022-48":{"Mainnet":0,"Polygon":86740,"BSC":0,"ewf":0,"Moonriver":0},"2022-49":{"Mainnet":40100,"Polygon":28184,"BSC":0,"ewf":0,"Moonriver":0},"2022-50":{"Mainnet":0,"Polygon":286316,"BSC":0,"ewf":0,"Moonriver":0},"2022-51":{"Mainnet":0,"Polygon":1275964,"BSC":0,"ewf":0,"Moonriver":0},"2022-52":{"Mainnet":0,"Polygon":1429157.7519267506,"BSC":0,"ewf":0,"Moonriver":0},"2023-1":{"Mainnet":0,"Polygon":2523336.4813825693,"BSC":0,"ewf":0,"Moonriver":0},"2023-2":{"Mainnet":0,"Polygon":5564770,"BSC":0,"ewf":0,"Moonriver":0},"2023-3":{"Mainnet":0,"Polygon":5489278,"BSC":0,"ewf":0,"Moonriver":0},"2023-4":{"Mainnet":0,"Polygon":4777663,"BSC":0,"ewf":0,"Moonriver":0},"2023-5":{"Mainnet":0,"Polygon":4154833,"BSC":0,"ewf":0,"Moonriver":0},"2023-6":{"Mainnet":0,"Polygon":2727741,"BSC":0,"ewf":0,"Moonriver":0},"2023-7":{"Mainnet":0,"Polygon":2174253,"BSC":0,"ewf":0,"Moonriver":0},"2023-8":{"Mainnet":0,"Polygon":1387349,"BSC":0,"ewf":0,"Moonriver":0},"2023-9":{"Mainnet":0,"Polygon":2888405,"BSC":0,"ewf":0,"Moonriver":0}}
```

- Parameters

    | name   | description                 | in   | required | default       |
    |--------|-----------------------------|------|----------|-------------- |
    | `since`| timestamp of start period   | path | no       | 6 months ago  |
    | `to`   | timestamp of end period     | path | no       | now           |


