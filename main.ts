import fetchTicketData from './fetch.ts'

const ticketsArray = await fetchTicketData()
console.log(ticketsArray)