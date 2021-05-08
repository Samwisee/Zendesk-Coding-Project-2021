import fetchTicketData from './fetch.tsx'
import startServer from './server.tsx'

const ticketsArray = await fetchTicketData()

startServer()