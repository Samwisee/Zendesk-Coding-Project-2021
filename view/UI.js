class TicketTable {
  constructor(tickets, containerID) {
    this.tickets = tickets
    this.container = containerID 
    this.paginationState = {
      page: 1,
      rows: 25,
    }
  }

  render() {
    const table = document.createElement('table')
    const container = document.getElementById(this.container)
    container.innerHTML = '' 
    container.append(table)
    this.tickets.forEach(this.renderRow)
    this.tickets.forEach(this.renderPagination)
  }

  renderRow(ticket) {
    let row = document.createElement('tr')
    const button = document.createElement('button')
    button.innerText = ticket.subject
    row.append(button)
    table.append(row)
  }

  renderPagination() {
    let startPoint = (this.page - 1) * this.rows
    let endPoint = startPoint + this.rows
    let ticketPage = tickets.slice(startPoint, endPoint)
    let count = Math.ceil(tickets.length / this.rows)

    for (let index = 1; index <= count; index ++) {
      const button = document.createElement('button')
      button.onclick = ()=>handlePageClick(index, this.tickets)
      button.setAttribute('class', 'pageButton')
      button.innerText = index
      container.append(button)
    }  
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

//   // Build ticket buttons
//   for(ticketIndex of paginationData.tickets) {
//     let row = document.createElement('tr')
//     row.innerHTML = `<button
//                       value=${ticketIndex} 
//                       onClick="handleLinkClick(this.value)" 
//                       class="ticketButton"
//                       href="/tickets">
//                         ${ticketIndex.subject}
//                     </button>`
    
//     table.append(row)
//   }

//   console.log(tickets)
//   buildPageButtons(paginationData.count)
// }

// const handlePageClick = (index, tickets) => {
//   document.getElementById('table-body').innerHTML = ''
//   paginationState.page = index
//   buildTable(tickets)
// }
