# Zendesk-Coding-Project-2021

This is my submission for the coding challenge for Zendesk.

Requirements for this project are as follows:

- Connect to the Zendesk API
- Return the tickets
- Paginate results for more than 25 results
- Show a list of results
- Show the individual tickets
- Provide happy path tests
  
## Quickstart

To download the program use:

`git clone https://github.com/Samwisee/Zendesk-Coding-Project-2021.git`

After downloading the project you will need to set up the npm packages using the following command:

`npm install `

Before running the application you will also need to create a .env file to fill your username and password. You will find an .env.example file in the project that looks like this:

```
EMAIL = 'example@zendesk.com'
PASSWORD = 'example'
SUBDOMAIN = 'example'
PORT = '3000'
```

You can remove the .example part of the file extension and replace the 'example' parts with your own information.

To run the program use:

`npm start`

To run the testing suite use:

`npm test`

## System Design

This project was intially built on [deno.js](https://deno.land/). I chose the deno runtime over node the runtime because it comes with everything I will need out of the box, including:

1) Web API fetching 
2) Built in Testing
3) Supports Typescript natively
4) Supports level promises which will be handy for the API request

Unfortunately I ran into a server issue with deno that I could not resolve, so I switched to a vanilla node application with Express routing.

The simple data structure of the tickets is perfect for a single-page application (SPA), which allows the front end to render quickly and reduces the API calls to one per session.

This application loosely uses the model, view, controller, router (MVCR) approach. 

### /server

- app.js acts as the Router layer and simply points to the html page.
- fetch.js file is the API call, which handles the interaction with the Zendesk API. 

### /view

- data.js acts as the glue code between the backend node js code and the frontend browser based js.
- index.html is the static html code, which acts as the main View layer.
- UI.js provide the dynamic html code, which allows the application to function as a SPA, this also handles the main modeling of the tickets through TicketTable. 

During development, it became clear that the controller was not yet necessary due to the overall simplicity of the application, but a controller could be introduced to add new server methods. 

## Limitations

This version currently does not have any data storage solution. A future version would likely include a local storage to save ticket data in browser memory to reduce load times. Furthermore the API call fetches all of the batched data in one call which would work for thousands or even tens of thousands of records. But it may run into issues with millions of records returned.

