import express from 'express'
import fetchTicketData from './fetch.js'
import dotenv from 'dotenv'

dotenv.config() // Set up environmental variables

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('view'))

app.get('/api/tickets', async (req, res) => {
  const tickets = await fetchTicketData()
  res.send({ tickets })
})

app.use((req, res) => {
  res.send('This page does not exist')
})

app.listen(port, () => console.info(`Listening http://localhost:${port}`))
