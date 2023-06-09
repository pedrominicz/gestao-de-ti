### Gestão de TI

#### Visão do produto ou serviço de TI a ser trabalhado

O produto é interno à nossa própria empresa.

Nossa empresa desenvolve sistemas para gestão de faturas e controle de gastos empregados nos setores de consumo de água, gás natural e eletricidade. Dispositivos são instalados na propriedade dos clientes para coleta de dados. Os dados são analisados e ficam à disposição do cliente.

O setor de tecnologia da empresa é dividido em três times. O time de hardware desenvolve os dispositivos para coleta de dados. O time do front-end mantém uma interface web que os clientes acessam. Estas interfaces mostram as informações e análises de formas não triviais com gráficos, etc., ou seja, elas precisam correlacionar vários dados do banco de dados. Entre outras coisas, o time de back-end é responsável por criar endpoints que fazem as queries necessárias para as análises mostradas no front-end. Isto não é ideal, pois demanda tempo do time de back-end e atrapalha o trabalho do time de front-end que precisa constantemente esperar pelo desenvolvimento de novos endpoints.

O time de front-end quer usar GraphQL para fazer queries no banco de dados. Uma API GraphQL permitirá que a query seja especificada no front-end eliminando a necessidade de constantemente criar novos endpoints. Com isso, o time de front-end será mais independente do time de back-end, aumentando sua eficiência.

O escopo consistem em:

1. Disponibilizar todos os dados atualmente providos pelo back-end através da API GraphQL
2. Garantir a segurança da API
    1. Sistema de autenticação para acesso à API
    2. A API não deve expor dados protegidos do banco de dados
3. A API GraphQL deve ser tão eficiente quando os endpoints atuais

A estratégia para atingir estes objetivos seguirá o seguinte plano:

1. Conversar com o time de front-end e listar quais dados do banco o front-end necessita
2. Formular uma estratégia de implementação e o design inicial da API
3. Desenvolver o suficiente da API GraphQL e migrar um recurso específico do front-end para a nova API
    1. Inicialmente, garantir que o recurso selecionado funciona com a nova API, sem se preocupar com segurança ou eficiência
    2. Em seguida, garantir que o recurso funciona com autenticação
    3. Finalmente, garantir que o recurso é tão eficiente na nova API quanto no antigo endpoint
    4. Ouvir o feedback do time de front-end
4. Utilizar conhecimento adquirido no item anterior para revisar o design da API, caso necessário
5. Expandir a API para que todos os dados necessários estejam disponíveis

Como a nova API é completamente independente dos endpoints atuais, é possível manter os endpoints funcionando enquanto testamos a nova API. Sendo assim, é possível fazer o teste do item 3 nos servidores de homologação sem perturbar outras atividades que possam estar acontecendo no momento. O "recurso específico" pode ser uma página do web app ou até mesmo um único gráfico.

A versão final da API deve ser entregue sexta-feira dia 9 de junho de 2023.

#### Sprints

**Sprint 1** (6/2 à 17/2)

- Configurar a biblioteca de GraphQL com o back-end atual
- Conectar a biblioteca GraphQL ao banco de dados
- Criar endpoint da API GraphQL no back-end

**Sprint 2** (20/2 à 3/3)

- Modelar a tabela OSEntrada
- Modelar a tabela OSExecucao
- Modelar a tabela OSSaida
- Modelar a tabela UC
- Modelar a tabela UCStatus

**Sprint 3** (6/3 à 17/3)

- Criar sistema de autenticação para acessos à API
- Atualizar as queries existentes para utilizar autenticação
- Modelar a tabela Departamentos
- Modelar a tabela Credenciais

**Sprint 4** (20/3 à 31/3)

- Modelar a tabela Comando
- Modelar a tabela Conta
- Modelar a tabela Roteador
- Modelar a tabela Ordens
- Modelar a tabela Restricoes

**Sprint 5** (3/4 à 14/4)

- Modelar a tabela Alarme
- Modelar a tabela Leitura
- Modelar a tabela Produtos
- Mediar acesso ao banco de dados através de DataLoaders

**Sprint 6** (17/4 à 28/4)

- Modelar a tabela Progresso
- Modelar a tabela Regiões
- Portar as queries existences para utilizar DataLoaders

**Sprint 7** (1/5 à 12/5)

- Modelar a tabela Valvula
- Modelar a tabela Andar
- Modelar a tabela Medidor
- Modelar a tabela Canais
- Modelar a tabela Regras

**Sprint 8** (15/5 à 26/5)

- Modelar a tabela Net
- Modelar a tabela Usuario
- Modelar a tabela SignIn
- Modelar a tabela Estado
- Modelar a tabela Cidade

**Sprint 9** (29/5 à 9/6)

- Modelar a tabela Alertas
- Modelar a tabela Atividades
- Modelar a tabela Temporizadores
- Modelar a tabela Promoções
- Testar a API
