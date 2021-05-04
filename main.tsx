import fetchTicketData from './fetch.tsx'

import { serve } from "https://deno.land/std/http/server.ts";

const ticketsArray = await fetchTicketData()
console.log(ticketsArray)

const server = serve({ port: 8000 });
console.log("Listening to port 8000 on http://localhost:8000/");

for await (const request of server) {
  request.respond({ body: "<h1>Hello there</h1>"});
}  
