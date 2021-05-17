// import sum from "./server/fetch.js";
import moxios from 'moxios'
import fetchTicketData from './server/fetch'

const zendeskResponse = {
  "tickets": [{
    "requester_id": 1,
    "assignee_id": 5,
    "subject": "velit eiusmod reprehenderit officia cupidatat",
    "description": "Aute ex sunt culpa ex ea esse sint cupidatat aliqua ex consequat sijt reprehenderit. Velit labore proident quis culpa ad duis adipisicing laboris voluptate velit incididunt minim consequat nulla. Laboris adipisicing reprehenderit minim tempor officia ullamco occaecat ut laborum.\n\nAliquip velit adipisicing exercitation irure aliqua qui. Commodo eu laborum cillum nostrud eu. Mollit duis qui non ea deserunt est est et officia ut excepteur Lorem pariatur deserunt.",
    "tags": [
      "est",
      "nisi",
      "incididunt"
    ]
  }]
}

test('two plus two is four', () => {
  // basic test to show that tests are working
  expect(2 + 2).toBe(4);
});

// Setting up moxios
describe('fetch', () => {
  beforeEach(function () {
    // import and pass your custom axios instance to this method
    moxios.install()
  })

  afterEach(function () {
    // import and pass your custom axios instance to this method
    moxios.uninstall()
  })

  it('returns tickets on successful API call', async () =>{
    // arrange
    moxios.stubRequest(/.*/, {
      status: 200,
      responseText: JSON.stringify(zendeskResponse)
    })

    // act
    const actualTickets = await fetchTicketData()
    
    // assert
    expect(actualTickets).toEqual(zendeskResponse.tickets)
  })
  
  it('aggregates all pages into a single response', () =>{
    // TODO: figure out how to stub multiple request
  })
  
  it('returns error on unsuccessful API call', () =>{
    // arrange
    moxios.stubRequest(/.*/, {
      status: 500,
      responseText: "something bad happened"
    })
    
    // act
    expect(async () => {
      const actualTickets = await fetchTicketData()
    }).toThrow()
  })
  
})

test('', () =>{
  
})

// Integration tests
test('API response matches the data at the ', () =>{
  // expect(tickets)
})

test('', () =>{
  
})