# Zendesk-Coding-Project-2021

This is my submission for the coding challenge for Zendesk.

## Setup

This project was intially built on [deno.js](https://deno.land/). I chose the deno runtime over node the runtime because it comes with everything I will need out of the box, including:

1) Web API fetching 
2) Built in Testing
3) Supports Typescript natively
4) Supports level promises which will be handy for the API request

Unfortunately I ran into a server issue with deno that I could not resolve, so I switched to a vanilla node application with Express routing.

The simple data structure of the tickets is perfect for a single-page application (SPA), which allows the front end to render quickly and reduces the API calls to one per session.

This application loosely uses the model, view, controller, router (MVCR) approach. During development, it became clear that the controller was not yet necessary due to the overall simplicity of the application, but a controller could be introduced to add new server methods. 
## Running the Program

After downloading the project you will need to set up the npm packages using the following command:

`npm install `

Before running the application you will also need to create a .env file to fill your username and password. You will find an .env.example file in the project:

```
EMAIL = 'example@zendesk.com'
PASSWORD = 'example'
SUBDOMAIN = 'example'
```

PORT = '3000' remove the .example part of the extension and apply 

`npm start`

`npm test`

## Design of system