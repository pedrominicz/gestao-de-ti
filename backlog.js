'use strict'

const backlog = [
  ['Configurar a biblioteca de GraphQL com o back-end atual',    3, 'Alta',  'TODO'],
  ['Conectar a biblioteca GraphQL ao banco de dados',            3, 'Alta',  'TODO'],
  ['Criar endpoint da API GraphQL no back-end',                  3, 'Alta',  'TODO'],
  ['Modelar a tabela OSEntrada',                                 3, 'Média', 'TODO'],
  ['Modelar a tabela OSExecucao',                                3, 'Média', 'TODO'],
  ['Modelar a tabela OSSaida',                                   3, 'Média', 'TODO'],
  ['Modelar a tabela UC',                                        3, 'Média', 'TODO'],
  ['Modelar a tabela UCStatus',                                  3, 'Média', 'TODO'],
  ['Criar sistema de autenticação para acessos à API',           1, 'Alta',  'TODO'],
  ['Modelar a tabela Departamentos',                             3, 'Média', 'TODO'],
  ['Modelar a tabela Credenciais',                               3, 'Média', 'TODO'],
  ['Modelar a tabela Comando',                                   3, 'Média', 'TODO'],
  ['Modelar a tabela Conta',                                     3, 'Média', 'TODO'],
  ['Modelar a tabela Roteador',                                  3, 'Média', 'TODO'],
  ['Modelar a tabela Ordens',                                    3, 'Média', 'TODO'],
  ['Modelar a tabela Restricoes',                                3, 'Média', 'TODO'],
  ['Modelar a tabela Alarme',                                    3, 'Média', 'TODO'],
  ['Modelar a tabela Leitura',                                   3, 'Média', 'TODO'],
  ['Modelar a tabela Produtos',                                  3, 'Média', 'TODO'],
  ['Mediar acesso ao banco de dados através de DataLoaders',     2, 'Alta',  'TODO'],
  ['Modelar a tabela Progresso',                                 3, 'Média', 'TODO'],
  ['Modelar a tabela Regiões',                                   3, 'Média', 'TODO'],
  ['Modelar a tabela Valvula',                                   3, 'Média', 'TODO'],
  ['Modelar a tabela Andar',                                     3, 'Média', 'TODO'],
  ['Modelar a tabela Medidor',                                   3, 'Média', 'TODO'],
  ['Modelar a tabela Canais',                                    3, 'Média', 'TODO'],
  ['Modelar a tabela Regras',                                    3, 'Média', 'TODO'],
  ['Modelar a tabela Net',                                       3, 'Média', 'TODO'],
  ['Modelar a tabela Usuario',                                   3, 'Média', 'TODO'],
  ['Modelar a tabela SignIn',                                    3, 'Média', 'TODO'],
  ['Modelar a tabela Estado',                                    3, 'Média', 'TODO'],
  ['Modelar a tabela Cidade',                                    3, 'Média', 'TODO'],
  ['Modelar a tabela Alertas',                                   3, 'Média', 'TODO'],
  ['Modelar a tabela Atividades',                                3, 'Média', 'TODO'],
  ['Modelar a tabela Temporizadores',                            3, 'Média', 'TODO'],
  ['Modelar a tabela Promoções',                                 3, 'Média', 'TODO'],
  ['Testar a API',                                               3, 'Alta',  'TODO'],
]

const table = document.getElementById('table')

function add_backlog_item(item, user_story, priority, sprint) {
  const row = table.insertRow()

  const cell_item       = row.insertCell()
  const cell_user_story = row.insertCell()
  const cell_priority   = row.insertCell()
  const cell_sprint     = row.insertCell()

  const text_item     = document.createTextNode(item)
  const text_priority = document.createTextNode(priority)
  const text_sprint   = document.createTextNode(sprint)

  const text_user_story = document.createTextNode(`User Story ${user_story}`)
  const link_user_story = document.createElement('a')
  link_user_story.appendChild(text_user_story)
  link_user_story.href = `story.html#story-${user_story}`

  cell_item.appendChild(text_item)
  cell_user_story.appendChild(link_user_story)
  cell_priority.appendChild(text_priority)
  cell_sprint.appendChild(text_sprint)
}

for (const element of backlog) {
  add_backlog_item(element[0], element[1], element[2], element[3])
}
