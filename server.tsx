import { serve } from "https://deno.land/std/http/server.ts";

// Set up a local server and make a CLI print out

export default async function startServer() {
  const server = serve({ port: 8000 });
  console.log("Listening to port 8000 on http://localhost:8000/");

// 
  for await (const server_request of server) {
    const html = await Deno.readFile('./index.html');
    const decoder = new TextDecoder()
    server_request.respond({ body: decoder.decode(html) });
  }
}