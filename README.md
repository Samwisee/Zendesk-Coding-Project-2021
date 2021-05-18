# Zendesk-Coding-Project-2021

This is my submission for the coding challenge for Zendesk.

Requirements for this project are as follows:

- Connect to the Zendesk API
- Return the tickets, and handle API pagination over 100 results
- Show the list of results, and Paginate results for more than 25 results
- Show the individual ticket details
- Provide happy path tests
  
## Quickstart

To download the program use:

`git clone https://github.com/Samwisee/Zendesk-Coding-Project-2021.git`

This project was built using node version v14.13.0, check your node version using:

`node -v`

If your node version is out of date try this command:

```
brew update
brew upgrade node
```

Or try [this article](https://www.educative.io/edpresso/how-to-update-nodejs)

If node is not installed on your system try this command:

`brew install node`

Or follow the [nodejs documentation](https://nodejs.dev/learn/how-to-install-nodejs)

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


## Testing

To run the testing suite use:

`npm test`

This command encorporates tests for both the server and the UI.

The server tests handle successful requests (including tickets across paginated requests), general 500 errors, and bad credentials (401 errors). 

The UI tests show that the browser is able to render tickets as buttons with correctly labelled subject lines.

Testing is handled using [jest](https://jestjs.io/), [jsdom](https://github.com/jsdom/jsdom) for UI testing, and [moxios](https://github.com/axios/moxios) for API testing.

## System Design

This project was intially built on [deno.js](https://deno.land/) but I ran into a server issue with deno that I could not resolve, so I switched to a vanilla node application with Express.js for routing, Axios for API interactions, and Jest.js for testing. While Typescript is an awesome feature, it was not necessary for a project of this scope. Furthermore it was easy enough to work around the top level promise issue by wrapping async functions.

The simple data structure of the tickets is perfect for a single-page application (SPA), which allows the front end to render quickly and reduces the API calls to one per session.

This application uses the model, view, controller (MVC) approach applied to a single page application.
```
.
+-- /src
|   +-- /server
|       +-- app.js
|       +-- fetch.js
|   +-- /view
|       +-- data.js
|       +-- index.html
|       +-- styles.css
|       +-- UI.js
```

### src/server

- app.js acts as the Router layer and a simple controller. The controller functionality could be broken into a separate function if more functionality is require in the future.

- fetch.js calls the Zendesk API.

### src/view

- data.js acts as the glue code between the backend node js code and the frontend browser based js.
- index.html is the static html code, which acts as the View layer.
- UI.js provides the dynamic html code, which allows the App to function as a SPA, this also handles the modeling of the tickets through TicketTable. 
## Limitations

This version currently does not have any data storage solution. A future version would likely include a local storage to save ticket data in browser memory to reduce load times. Local storage will be appropriate given there's not more than 5MB of ticket data. Beyond that, a more sophisticated cache could be implemented on the server (using Redis or sqlite depending on the required scale).

Furthermore the API call fetches all of the batched data in one call which would work for thousands or even tens of thousands of records. But it may run into issues with millions of records returned. The approach to how to handle this level of data will depend on how the data is expected to be used. If it is client facing, it is probably most important to return the data quickly in small batches.
