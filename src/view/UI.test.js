import jsdom, { JSDOM } from "jsdom";

const tickets = [
  {
    requester_id: 1,
    assignee_id: 5,
    subject: "velit eiusmod reprehenderit officia cupidatat",
    description:
      "Aute ex sunt culpa ex ea esse sint cupidatat aliqua ex consequat sijt reprehenderit. Velit labore proident quis culpa ad duis adipisicing laboris voluptate velit incididunt minim consequat nulla. Laboris adipisicing reprehenderit minim tempor officia ullamco occaecat ut laborum. Aliquip velit adipisicing exercitation irure aliqua qui. Commodo eu laborum cillum nostrud eu. Mollit duis qui non ea deserunt est est et officia ut excepteur Lorem pariatur deserunt.",
    tags: ["est", "nisi", "incididunt"],
  },
  {
    requester_id: 2,
    assignee_id: 8,
    subject: "excepteur laborum ex occaecat Lorem",
    description:
      "Exercitation amet in laborum minim. Nulla et veniam laboris dolore fugiat aliqua et sit mollit. Dolor proident nulla mollit culpa in officia pariatur officia magna eu commodo duis. Aliqua reprehenderit aute qui voluptate dolor deserunt enim aute tempor ad dolor fugiat. Mollit aliquip elit aliqua eiusmod. Ex et anim non exercitation consequat elit dolore excepteur. Aliqua reprehenderit non culpa sit consequat cupidatat elit.",
    tags: ["labore", "voluptate", "amet"],
  },
];

test("TicketTable renders", async (done) => {
  // Arrange to set up JSDOM
  const options = {
    resources: "usable",
    runScripts: "dangerously",
  };

  return JSDOM.fromFile(`src/view/test.html`, options).then((dom) => {
    dom.window.onload = () => {
      // Act to build buttons
      dom.window.eval(` 
        const tickets = ${JSON.stringify(tickets)};
        const ticketTable = new TicketTable(tickets, "table");
        ticketTable.render();
      `);

      // Assert that there should be the same number of buttons as tickets
      const buttons =
        dom.window.document.getElementsByClassName("ticketButton");
      expect(buttons.length).toBe(tickets.length);

      // Assert that ticket subject  is rendered correctly as button text
      expect(buttons[0].innerText).toBe(tickets[0].subject);
      done();
    };
  });
});
