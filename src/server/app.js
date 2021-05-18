import express from "express";
import fetchTicketData from "./fetch.js";
import dotenv from "dotenv";

// Set up environmental variables
dotenv.config();

// Set up server
const app = express();
const port = process.env.PORT || 3000;

// Set up static resources
app.use(express.static("src/view"));

// Provide controller for get method
app.get("/api/tickets", async (req, res) => {
  const tickets = await fetchTicketData();
  res.send({ tickets });
});

// 404 error in case user attempt to access any other  endpoint
app.use((req, res) => {
  res.set("Content-Type", "text/html");
  res.send(
    Buffer.from("<p>404 this page does not exist</p><a href='/'>Go Back</a>")
  );
});

// Log dev url for user
app.listen(port, () => console.info(`Listening http://localhost:${port}`));
