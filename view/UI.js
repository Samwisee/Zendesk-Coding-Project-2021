// TODO change back to 25
const paginationState = {
  ticketArray: ticketsArray,
  page: 1,
  rows: 5,
}

function setPagination (ticketArray, page, rows) {
  // Set page start and end messages
  let startPoint = (page - 1) * rows
  let endPoint = startPoint + rows

  // Divide messages into pages
  let ticketPage = ticketArray.slice(startPoint, endPoint)
  let pages = Math.ceil(ticketArray.length / rows)

  return {
    ticketArray: ticketPage,
    pages: pages
  }
}

// Build pagination buttons
function buildPageButtons(pages) {
  const wrapper = document.getElementById('pagination')
  wrapper.innerHTML = ''

  for (let index = 1; index <= pages; index ++) {
    wrapper.innerHTML += `<button
                            value=${index} 
                            onClick="handlePageClick(this.value)" 
                            class="pageButton">
                            ${index}
                          </button>`
  }
}

function handleLinkClick (ticketDetails) {
  window.location = ticketDetails.url
  console.log(ticketDetails)
}

// Sets up table on page load and kicks everything
function buildTable (ticketsData) {
  const table = document.getElementById('table-body')

  let paginationData = setPagination(paginationState.ticketArray, paginationState.page, paginationState.rows)

  let ticketIndex = 0

  // Build ticket buttons
  for(ticketIndex of paginationData.ticketArray) {
    let row = document.createElement('tr')
    row.innerHTML = `<button
                      value=${ticketIndex} 
                      onClick="handleLinkClick(this.value)" 
                      class="pageButton"
                      href="">
                        ${ticketIndex.subject}
                        ${ticketIndex.priority}
                    </button>`
    
    table.append(row)
  }
  buildPageButtons(paginationData.pages)
}

function handlePageClick (index) {
  document.getElementById('table-body').innerHTML = ''
  paginationState.page = index
  buildTable()
}