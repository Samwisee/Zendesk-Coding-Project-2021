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
    this.renderPagination()
    ticketPage.forEach(this.renderRow.bind(this))
    const buttons = document.getElementsByClassName('active')

  }
  
  renderRow(ticket) {
    let button = document.createElement('button')
    button.innerText = ticket.subject
    button.className += 'active'
    button.className += ' ticketButton' 
    
    button.addEventListener('click', (e) => {
      this.renderTicketView(ticket)
    })

    let row = document.createElement('tr')

    row.append(button)
    table.append(row)
  }

  renderTicketView(ticket) {
    document.getElementById('table').innerHTML = ''
    let backButton = document.createElement('button')
    backButton.innerText = 'back'
    backButton.setAttribute('id', 'backButton')
    backButton.onclick = () => this.render()

    let text = document.createElement('p')
    text.innerText = ticket.description
    
    const container = document.getElementById(this.container)
    container.append(backButton)
    container.append(text)
  }

  renderPagination() {
    // Set page start and end messages
    let startPoint = (this.page - 1) * this.rows
    let endPoint = startPoint + this.rows

    // Divide messages into pages
    let ticketPage = this.tickets.slice(startPoint, endPoint)
    let count = Math.ceil(this.tickets.length / this.rows)

    // Hide pre-loader on render
    document.getElementById('loader').style.display = 'none'

    for (let index = 1; index <= count; index ++) {
      const button = document.createElement('button')
      button.onclick = () => this.handlePaginationClick(index, this.tickets)
      button.setAttribute('class', 'pageButton')
      button.innerText = index
      table.append(button)
    }  
  }

  handlePaginationClick = (index, tickets) => {
    document.getElementById('table').innerHTML = ''
    this.page = index
    this.render(tickets)
  }
}
