import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import veOceanRoutes from './routes/veOceanRoutes'

dotenv.config()
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', express.static('static'))

app.use('/api/veOcean', veOceanRoutes)

app.use(cors())

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
