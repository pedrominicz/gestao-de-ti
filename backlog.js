'use strict'

const backlog = [
  ['Configurar a biblioteca de GraphQL com o back-end atual', 3, 'Alta',  1],
  ['Conectar a biblioteca GraphQL ao banco de dados',         3, 'Alta',  1],
  ['Criar endpoint da API GraphQL no back-end',               3, 'Alta',  1],
  ['Modelar a tabela OSEntrada',                              3, 'Média', 2],
  ['Modelar a tabela OSExecucao',                             3, 'Média', 2],
  ['Modelar a tabela OSSaida',                                3, 'Média', 2],
  ['Modelar a tabela UC',                                     3, 'Média', 2],
  ['Modelar a tabela UCStatus',                               3, 'Média', 2],
  ['Criar sistema de autenticação para acessos à API',        1, 'Alta',  3],
  ['Modelar a tabela Departamentos',                          4, 'Média', 3],
  ['Modelar a tabela Credenciais',                            4, 'Média', 3],
  ['Modelar a tabela Comando',                                4, 'Média', 4],
  ['Modelar a tabela Conta',                                  4, 'Média', 4],
  ['Modelar a tabela Roteador',                               4, 'Média', 4],
  ['Modelar a tabela Ordens',                                 4, 'Média', 4],
  ['Modelar a tabela Restricoes',                             4, 'Média', 4],
  ['Modelar a tabela Alarme',                                 5, 'Média', 5],
  ['Modelar a tabela Leitura',                                5, 'Média', 5],
  ['Modelar a tabela Produtos',                               5, 'Média', 5],
  ['Mediar acesso ao banco de dados através de DataLoaders',  2, 'Alta',  5],
  ['Modelar a tabela Progresso',                              5, 'Média', 6],
  ['Modelar a tabela Regiões',                                5, 'Média', 6],
  ['Modelar a tabela Valvula',                                6, 'Média', 7],
  ['Modelar a tabela Andar',                                  6, 'Média', 7],
  ['Modelar a tabela Medidor',                                6, 'Média', 7],
  ['Modelar a tabela Canais',                                 6, 'Média', 7],
  ['Modelar a tabela Regras',                                 6, 'Média', 7],
  ['Modelar a tabela Net',                                    7, 'Média', 8],
  ['Modelar a tabela Usuario',                                7, 'Média', 8],
  ['Modelar a tabela SignIn',                                 7, 'Média', 8],
  ['Modelar a tabela Estado',                                 7, 'Média', 8],
  ['Modelar a tabela Cidade',                                 7, 'Média', 8],
  ['Modelar a tabela Alertas',                                8, 'Média', 9],
  ['Modelar a tabela Atividades',                             8, 'Média', 9],
  ['Modelar a tabela Temporizadores',                         8, 'Média', 9],
  ['Modelar a tabela Promoções',                              8, 'Média', 9],
  ['Testar a API',                                            9, 'Alta',  9],
]

const table = document.getElementById('table')

function add_backlog_item(item, user_story, priority, sprint) {
  const row = table.insertRow()

  const text_item     = document.createTextNode(item)
  const text_priority = document.createTextNode(priority)

  const text_user_story = document.createTextNode(`User Story ${user_story}`)
  const link_user_story = document.createElement('a')
  link_user_story.appendChild(text_user_story)
  link_user_story.href = `story.html#story-${user_story}`

  const text_sprint = document.createTextNode(`Sprint ${sprint}`)
  const link_sprint = document.createElement('a')
  link_sprint.appendChild(text_sprint)
  link_sprint.href = `roadmap.html#sprint-${sprint}`

  row.insertCell().appendChild(text_item)
  row.insertCell().appendChild(link_user_story)
  row.insertCell().appendChild(text_priority)
  row.insertCell().appendChild(link_sprint)
}

for (const element of backlog) {
  add_backlog_item(element[0], element[1], element[2], element[3])
}
