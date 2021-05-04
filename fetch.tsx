export default async function fetchTicketData () {

  try {
    const zendeskAPIurl = 'https://samcheney.zendesk.com/api/v2/ticket_fields'
    
    // Set up a new HTTP header
    let header = new Headers()
    header.append('Accept', 'application/json')

    // Encode credentials  using base64 
    let encoded = window.btoa('')

    // Append basic encoded credentials to HTTP header
    let auth = 'Basic ' + encoded
    header.append('Authorization', auth)
    
    // Set up an HTTP request
    let request = new Request(zendeskAPIurl, {
      method: 'Get',
      headers: header,
    })

    // Fetch the json data
    const response = await fetch(request)
    const tickets = await response.json()
    const ticketsArray = tickets.ticket_fields
    console.log(ticketsArray)
    return ticketsArray
  
  } catch (error) {
    console.log(error)
  }

}

fetchTicketData()