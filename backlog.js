'use strict'

const backlog = [
  ['1', '2', '3', '4'],
  ['2', '2', '3', '4'],
  ['3', '2', '3', '4'],
  ['4', '2', '3', '4'],
]

const table = document.getElementById('table')

function add_backlog_item(item, user_story, priority, sprint) {
  const row = table.insertRow()

  const cell_item       = row.insertCell()
  const cell_user_story = row.insertCell()
  const cell_priority   = row.insertCell()
  const cell_sprint     = row.insertCell()

  const text_item       = document.createTextNode(item)
  const text_user_story = document.createTextNode(user_story)
  const text_priority   = document.createTextNode(priority)
  const text_sprint     = document.createTextNode(sprint)

  cell_item.appendChild(text_item)
  cell_user_story.appendChild(text_user_story)
  cell_priority.appendChild(text_priority)
  cell_sprint.appendChild(text_sprint)
}

for (const element of backlog) {
  add_backlog_item(element[0], element[1], element[2], element[3])
}
