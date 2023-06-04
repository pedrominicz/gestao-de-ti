'use strict'

const table = document.getElementById('table')

for (let i = 1; i <= 9; ++i) {
  const row = table.insertRow()

  const insertColumn = (item) => {
    row.insertCell().appendChild(document.createTextNode(`${item}`))
  }

  insertColumn(i)
  insertColumn('14 dias')
  insertColumn('R$ 1,500.00')
  insertColumn('R$ 3,000.00')
  insertColumn('R$ 1,500.00')
  insertColumn('R$ 6,000.00')
}

const row = table.insertRow()

const insertColumn = (item) => {
  const strong = document.createElement('strong')
  strong.appendChild(document.createTextNode(`${item}`))

  row.insertCell().appendChild(strong)
}

insertColumn('Total')
insertColumn('126 dias')
insertColumn('R$ 13,500.00')
insertColumn('R$ 27,000.00')
insertColumn('R$ 13,500.00')
insertColumn('R$ 54,000.00')
