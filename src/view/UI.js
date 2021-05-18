class TicketTable {
  constructor(tickets, containerID) {
    this.tickets = tickets;
    this.container = containerID;
    this.page = 1;
    this.rows = 25;
  }

  render() {
    // Render dynamic portion of the UI
    const table = document.createElement("table");
    const container = document.getElementById(this.container);

    // Clear container when rerending the button list
    container.innerHTML = "";
    container.append(table);

    // Calculate number of buttons per page
    let ticketPage = this.tickets.slice(
      (this.page - 1) * this.rows,
      this.rows * this.page
    );

    this.renderPagination();
    ticketPage.forEach(this.renderRow.bind(this));
  }

  renderRow(ticket) {
    // Build message buttons
    let button = document.createElement("button");
    let tag = document.createElement("div");
    button.innerText += ticket.subject;

    let newtag;

    if (ticket.tags.length > 0) {
      tag = ticket.tags[0].charAt(0);
      newtag = `<div class='tag tag-${tag}'>${tag}</div>`;
    } else {
      newtag = "";
    }

    //   case "s":
    //     newtag = `<div style="border: 1px solid red">${tag}</div>`;
    //   case "e":
    //     newtag = `<div style="border: 1px solid yellow">${tag}</div>`;
    //   case "i":
    //     newtag = `<div style="border: 1px solid blue">${tag}</div>`;
    //   case "n":
    //     newtag = `<div style="border: 1px solid black">${tag}</div>`;
    //   case "c":
    //     newtag = `<div style="border: 1px solid green">${tag}</div>`;
    //   case "d":
    //     newtag = `<div style="border: 1px solid pink">${tag}</div>`;
    //   case "d":
    //     newtag = `<div style="border: 1px solid purple">${tag}</div>`;
    // }

    button.innerHTML += newtag;
    button.className += "ticketButton";

    // Connect message buttons to
    button.addEventListener("click", (e) => {
      this.renderTicketView(ticket);
    });

    let row = document.createElement("tr");
    row.append(button);
    table.append(row);
  }

  renderTicketView(ticket) {
    // Clear message buttons from table
    document.getElementById("table").innerHTML = "";

    // Build back button
    let backButton = document.createElement("button");
    backButton.innerText = "back";
    backButton.setAttribute("id", "backButton");
    backButton.onclick = () => this.render();

    // Set up message text snippets
    let requester_id = document.createElement("h5");
    requester_id.innerText = `Requester ID: ${ticket.requester_id}`;

    let assignee_id = document.createElement("h5");
    assignee_id.innerText = `Assignee ID: ${ticket.assignee_id}`;

    let tags = document.createElement("h6");
    tags.innerText = ticket.tags.join(", ");

    let text = document.createElement("p");
    text.innerText = ticket.description;

    // Append text to dom
    const container = document.getElementById(this.container);
    container.append(backButton);
    container.append(requester_id);
    container.append(assignee_id);
    container.append(tags);
    container.append(text);
  }

  renderPagination() {
    let count = Math.ceil(this.tickets.length / this.rows);

    // Hide pre-loader on pagination render (maybe should be in it's own function)
    document.getElementById("loader").style.display = "none";

    // Build pagination buttons
    for (let index = 1; index <= count; index++) {
      const button = document.createElement("button");
      button.onclick = () => this.handlePaginationClick(index, this.tickets);
      button.setAttribute("class", "pageButton");
      button.innerText = index;
      table.append(button);
    }
  }

  handlePaginationClick = (index, tickets) => {
    document.getElementById("table").innerHTML = "";
    this.page = index;
    this.render(tickets);
  };
}
