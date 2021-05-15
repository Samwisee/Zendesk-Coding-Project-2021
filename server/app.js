import express from 'express'
import fetchTicketData from './fetch.js'

const app = express()
const port = process.env.PORT || 3000

// Set up templating engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('../view/index')
})

app.get('/tickets', async (req, res) => {
  const tickets = await fetchTicketData()
  console.log(tickets)
  res.render('../view/tickets', { tickets: tickets })
})

app.get('/tickets/:id', (req, res) => {
  console.log(app.get('data'))
  res.render('../view/ticket', { id: req.params.id,
    tickets: res.locals.tickets
  })
})

app.use((req, res) => {
  res.send('This page does not exist')
})

app.listen(port, () => console.info(`Listening http://localhost:${port}`))
