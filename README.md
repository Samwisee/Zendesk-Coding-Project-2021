# Zendesk-Coding-Project-2021

This is my submission for the coding challenge for Zendesk.

## Setup

This project is built on [deno.js](https://deno.land/). I chose the deno runtime over node the runtime because it comes with everything I will need out of the box, including:

1) Web API fetching 
2) Built in Testing
3) Supports Typescript natively
4) Supports level promises which will be handy for the API request

First thing is to install deno.

`brew install deno`

Follow this [link](https://deno.land/) if you don't have homebrew.

## Running the Program

`deno run --allow-net fetch.ts`

Deno is secure by default so you will need to include permission tags to

## Design of system