import express from 'express'
import { PORT } from '../constants.js'

const app = express()
app.disable('x-powered-by')
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
