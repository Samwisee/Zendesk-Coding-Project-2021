// TODO dotenv
import { XMLHttpRequest } from 'xmlhttprequest'
import dotenv from 'dotenv'
import btoa from 'btoa'

dotenv.config()

export default async function fetchTicketData() {
  const url = "https://samcheney.zendesk.com/api/v2/tickets.json"

  const xhr = new XMLHttpRequest()
  xhr.open("GET", url)

  let encoded = btoa(`${process.env.EMAIL}:${process.env.PASSWORD}`)

  xhr.setRequestHeader("Authorization", `Basic ${encoded}`)

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }}

  xhr.send();

}


console.log(fetchTicketData())
