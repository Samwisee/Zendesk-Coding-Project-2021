// Interface between the Backend and the Frontend
// Single responsibility of handling the integration of Frontend and Backend
async function fetchTicketData () {
  // TODO: Error handling
  const ticketsResponse = await fetch("localhost:8080/tickets")
  return ticketsResponse["tickets"]
}