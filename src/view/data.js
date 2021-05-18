// Interface between the Backend and the Frontend
// Single responsibility of handling the integration of Frontend and Backend
async function fetchTicketData() {
  // TODO: Error handling
  const response = await fetch("/api/tickets");
  const data = await response.json();
  return data.tickets;
}
