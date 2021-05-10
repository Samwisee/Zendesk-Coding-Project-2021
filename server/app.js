import express from 'express'
import fetchTicketData from './fetch.js'

const app = express()
const port = 3000

app.use(express.static('view'))

app.get('/tickets', async (req, res, next) => {
  try{
    const ticketData = await fetchTicketData()
    console.log(ticketData)
    result.send(ticketsArray)
  } catch {
    console.log('Routing error')
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function expressStatic (req, res, next) {
  
  next()
}

