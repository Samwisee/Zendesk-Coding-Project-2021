class Ticket {
  constructor(requester_id: number, assignee_id: number, description: string, tags: Array<string> ) {
    this.requester_id = requester_id
    this.assignee_id = assignee_id
    this.priority = priority
    this.description = description
    this.tags = tags
  }
}
