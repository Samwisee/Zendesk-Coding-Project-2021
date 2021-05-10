import fetchTicketData from './server/fetch.js'
import startServer from './server/server.js'

const ticketsArray = await fetchTicketData()

startServer()