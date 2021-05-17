class TicketTable {
  constructor(tickets, containerID) {
    this.tickets = tickets
    this.container = containerID 
    this.page = 1
    this.rows = 25  
  }

  render() {
    const table = document.createElement('table')
    const container = document.getElementById(this.container)
    container.innerHTML = '' 
    container.append(table)
    let ticketPage = this.tickets.slice((this.page - 1) * this.rows, this.rows * this.page)
    console.log(ticketPage)
    ticketPage.forEach(this.renderRow)
    this.renderPagination()
  }

  renderRow(ticket) {
    let row = document.createElement('tr')
    const button = document.createElement('button')
    button.innerText = ticket.subject
    button.className = 'active'
    button.onclick = () => this.renderTicketView
    row.append(button)
    table.append(row)
  }

  renderTicketView() {
    const buttons = document.getElementsByClassName('active')
    buttons.className = 'hidden'
  }

  renderPagination() {
    // Set page start and end messages
    let startPoint = (this.page - 1) * this.rows
    let endPoint = startPoint + this.rows

    // Divide messages into pages
    let ticketPage = this.tickets.slice(startPoint, endPoint)
    let count = Math.ceil(this.tickets.length / this.rows)

    console.log('hi')

    for (let index = 1; index <= count; index ++) {
      const button = document.createElement('button')
      button.onclick = () => this.handlePageClick(index, this.tickets)
      button.setAttribute('class', 'pageButton')
      button.innerText = index
      table.append(button)
    }  
  }

  handlePageClick = (index, tickets) => {
    document.getElementById('table').innerHTML = ''
    this.page = index
    this.render(tickets)
  }
}

// const setPagination = (tickets, page, rows) => {
//   // Set page start and end messages
//   let startPoint = (page - 1) * rows
//   let endPoint = startPoint + rows

//   // Divide messages into pages
//   let ticketPage = tickets.slice(startPoint, endPoint)
//   let count = Math.ceil(tickets.length / rows)

//   return {
//     tickets: ticketPage,
//     count: count
//   }
// }

// // Build pagination buttons
// const buildPageButtons = (count, tickets) => {
//   const wrapper = document.getElementById('pagination')
//   wrapper.innerHTML = ''

//   for (let index = 1; index <= count; index ++) {
//     const button = document.createElement('button')
//     button.onclick = ()=>handlePageClick(index, tickets)
//     button.setAttribute('class', 'pageButton')
//     button.innerText = index
//     wrapper.append(button)
//   }   
// }

// const handleLinkClick = (ticketDetails) => {
//   window.location = ticketDetails.url
// }

// // Sets up table on page load and kicks everything
// const buildTable = (tickets) => {
//   const table = document.getElementById('table-body')

//   let paginationData = setPagination(tickets, paginationState.page, paginationState.rows)

//   let ticketIndex = 0


//   console.log(tickets)
//   buildPageButtons(paginationData.count)
// }

