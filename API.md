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
