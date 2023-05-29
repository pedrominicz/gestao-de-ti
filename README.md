### Gestão de TI

#### [Project Model Canvas](https://pedrominicz.github.io/gestao-de-ti/canvas.html)

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

- Pesquisar tecnologias
    + GraphQL
    + Graphene
    + Flask
    + SQLAlchemy
- Conversar com o time de front-end
    + Quais tabelas precisam ser expostas pela API?

**Sprint 2** (20/2 à 3/3)

- Versão de teste da API
    + Modelar as tabelas OS execução, OS saída e OS entrada
    + Modelar as tabelas UC e UC status

**Sprint 3** (6/3 à 17/3)

- Versão de teste da API
    + Autenticação usando JSON Web Token
    + Documentar as tabelas OS execução, OS saída e OS entrada

**Sprint 4** (20/3 à 31/3)

- Começar a versão final da API
    + Modelar as tabelas Comando, Conta e Roteador
    + Documentar as tabelas UC e UC status

**Sprint 5** (3/4 à 14/4)

- Modelar as tabelas Alarme e Leitura
- Documentar as tabelas Comando, Conta e Roteador
- Pesquisar sobre problema de performance

**Sprint 6** (17/4 à 28/4)

- Documentar as tabelas Alarme e Leitura
- Modelar as tabelas Filial e Bloco
- Refatorar o projeto para utilizar `DataLoader`s (1/2)

**Sprint 7** (1/5 à 12/5)

- Modelar as tabelas Válvula, Andar Medidor
- Refatorar o projeto para utilizar `DataLoader`s (2/2)

**Sprint 8** (15/5 à 26/5)

- Modelar as tabelas Net, Usuário e Sign In
- Modelar as tabelas Estado, Cidade e Filial

**Sprint 9** (29/5 à 9/6)

- Documentar as tabelas Net, Usuário e Sign In
- Testar a API
