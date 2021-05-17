import axios from 'axios'
import dotenv from 'dotenv' // Set up environmental variables
import btoa from 'btoa' // Base64 encoder

export default async function fetchTicketData() {

  const url = `https://${process.env.SUBDOMAIN}.zendesk.com/api/v2/tickets.json`
  const auth = {
    username: process.env.EMAIL,
    password: process.env.PASSWORD
  }

  const data = await callAPI(url, auth)
  return data
}

const callAPI = async (url, auth) => {

  const response = await axios.get(url, { auth })

  let { data } = response
  console.log(response)
  let tickets = data.tickets

  if (data.next_page != null) {
    const nextTickets = await callAPI(data.next_page, auth)
    tickets = [...tickets, ...nextTickets]
  }
  return tickets
}

// TODO error handle API not available, look into retries for errors
