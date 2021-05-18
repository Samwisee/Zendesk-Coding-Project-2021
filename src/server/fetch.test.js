import moxios from "moxios";
import fetchTicketData from "./fetch";

const zendeskResponsePage1 = {
  tickets: [
    {
      requester_id: 1,
      assignee_id: 5,
      subject: "velit eiusmod reprehenderit officia cupidatat",
      description:
        "Aute ex sunt culpa ex ea esse sint cupidatat aliqua ex consequat sijt reprehenderit. Velit labore proident quis culpa ad duis adipisicing laboris voluptate velit incididunt minim consequat nulla. Laboris adipisicing reprehenderit minim tempor officia ullamco occaecat ut laborum.\n\nAliquip velit adipisicing exercitation irure aliqua qui. Commodo eu laborum cillum nostrud eu. Mollit duis qui non ea deserunt est est et officia ut excepteur Lorem pariatur deserunt.",
      tags: ["est", "nisi", "incididunt"],
    },
  ],
};

const zendeskResponsePage2 = {
  tickets: [
    {
      requester_id: 1,
      assignee_id: 5,
      subject: "velit eiusmod reprehenderit officia cupidatat",
      description:
        "Aute ex sunt culpa ex ea esse sint cupidatat aliqua ex consequat sijt reprehenderit. Velit labore proident quis culpa ad duis adipisicing laboris voluptate velit incididunt minim consequat nulla. Laboris adipisicing reprehenderit minim tempor officia ullamco occaecat ut laborum.\n\nAliquip velit adipisicing exercitation irure aliqua qui. Commodo eu laborum cillum nostrud eu. Mollit duis qui non ea deserunt est est et officia ut excepteur Lorem pariatur deserunt.",
      tags: ["est", "nisi", "incididunt"],
    },
  ],
};

// Setting up moxios
describe("fetch Zendesk API data", () => {
  beforeEach(function () {
    // import and pass your custom axios instance to this method
    moxios.install();
  });

  afterEach(function () {
    // import and pass your custom axios instance to this method
    moxios.uninstall();
  });

  it("returns tickets on successful API call", async () => {
    // Arrange request for moxios
    moxios.stubRequest(/.*/, {
      status: 200,
      responseText: JSON.stringify(zendeskResponsePage1),
    });

    // act to call fetch.js
    const actualTickets = await fetchTicketData();

    // assert that tickets returns properly
    await expect(actualTickets).toEqual(zendeskResponsePage1.tickets);
  });

  it("if the API is paginated, ticket response is aggregated and returned", async () => {
    // arrange
    moxios.stubRequest(/tickets\.json$/, {
      status: 200,
      responseText: JSON.stringify(
        // Adding next_page parameter to trigger paging without contaminating other tests
        Object.assign(zendeskResponsePage1, {
          next_page: "test.zendesk.com/api/v2/tickets.json?page=2",
        })
      ),
    });
    moxios.stubRequest(/tickets\.json\?page=2$/, {
      status: 200,
      responseText: JSON.stringify(zendeskResponsePage2),
    });

    // act
    const actualTickets = await fetchTicketData();

    // assert
    expect(actualTickets).toEqual([
      ...zendeskResponsePage1.tickets,
      ...zendeskResponsePage2.tickets,
    ]);
  });

  it("returns error on unsuccessful API call", () => {
    // arrange
    moxios.stubRequest(/.*/, {
      status: 500,
      responseText: "Something bad happened on the server",
    });

    // act
    return expect(fetchTicketData).rejects.toThrow(
      new Error(
        "Unable to call Zendesk API: Request failed with status code 500"
      )
    );
  });

  it("returns error when invalid credentials are provided", () => {
    // arrange
    moxios.stubRequest(/.*/, {
      status: 401,
      responseText: "Invalid credentials were provided",
    });

    // act
    return expect(fetchTicketData).rejects.toThrow(
      new Error(
        "Unable to call Zendesk API: Request failed with status code 401"
      )
    );
  });
});
