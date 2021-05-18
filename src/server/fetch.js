import axios from "axios";

// TODO error handle API not available, look into retries for errors
export default async function fetchTicketData() {
  // Set up environmental variables
  const url = `https://${process.env.SUBDOMAIN}.zendesk.com/api/v2/tickets.json`;
  const auth = {
    username: process.env.EMAIL,
    password: process.env.PASSWORD,
  };

  // Attempt to call Zendesk API and handle error
  try {
    const data = await callAPI(url, auth);
    return data;
  } catch (err) {
    throw new Error(`Unable to call Zendesk API: ${err.message}`);
  }
}

// Call API and handle pagination if necessary
const callAPI = async (url, auth) => {
  const response = await axios.get(url, { auth });

  let { data } = response;
  let tickets = data.tickets;

  if (data.next_page != null) {
    const nextTickets = await callAPI(data.next_page, auth);
    tickets = [...tickets, ...nextTickets];
  }
  return tickets;
};
