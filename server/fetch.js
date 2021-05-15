import axios from 'axios'

import dotenv from 'dotenv' // Set up environmental variables
import btoa from 'btoa' // Base64 encoder

dotenv.config()

export default async function fetchTicketData() {
  
  const url = `https://${process.env.SUBDOMAIN}.zendesk.com/api/v2/tickets.json`

  const data = await callAPI(url)
  console.log(data)

}

const callAPI = async (url) => {

  const response = await axios.get(url, {
    auth: {
      username: process.env.EMAIL,
      password: process.env.PASSWORD
    }
  })

  let { data } = response
  let tickets = data.tickets

  if (data.next_page != null) {
    const nextTickets = await callAPI(data.next_page)
    tickets = [...tickets, ...nextTickets]
  }
  return tickets

}

// TODO error handle API not available, look into retries