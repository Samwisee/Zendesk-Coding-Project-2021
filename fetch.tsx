export default async function fetchTicketData() {
  try {
    const zendeskAPIurl = "https://samcheney.zendesk.com/api/v2/tickets.json";

    // Set up a new HTTP header
    let header = new Headers();
    header.append("Accept", "application/json");

    // Encode credentials  using base64
    let encoded = window.btoa("samcheneyus@gmail.com:something1");

    // Append basic encoded credentials to HTTP header
    let auth = "Basic " + encoded;
    header.append("Authorization", auth);

    // Set up an HTTP request
    let request = new Request(zendeskAPIurl, {
      method: "Get",
      headers: header,
    });

    // Fetch the json data
    const response = await fetch(request);
    const tickets = await response.json();
    const ticketsArray = tickets.tickets;
    return ticketsArray;
  } catch (error) {
    console.log(error);
  }
}

fetchTicketData();
