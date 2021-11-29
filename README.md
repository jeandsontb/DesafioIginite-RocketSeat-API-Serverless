<h1 align="center">Serverless</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">

<br>

# 💻 Sobre o desafio

Nesse desafio foi cobrado para recriar uma parte da API de *todos* que foi desenvolvida no desafio [Conceitos do Node.js](https://www.notion.so/Desafio-01-Conceitos-do-Node-js-59ccb235aecd43a6a06bf09a24e7ede8) mas dessa vez deverá ser usado o framework [Serverless](https://www.serverless.com/).

Cada funcionalidade deverá ser criada em um arquivo de função separada de acordo com o que foi visto nesse último módulo.
As rotas que deverão existir são:

**POST -** `/todos/{userid}`

**GET-** `/todos/{userid}`

### Sobre as rotas

- **POST -** `/todos/{userid}`
    
    Essa rota deve receber o `id` de um usuário pelo `pathParameters` (você pode criar esse id manualmente apenas para preencher o campo) e os seguintes campos no corpo da requisição: `title` e `deadline`, onde `deadline` é a data limite para o *todo*.
    
    O *todo* deverá ser salvo com os seguintes campos no DynamoDB:
    
    ```json
    { 
    	id: 'uuid', // id gerado para garantir um único todo com o mesmo id
    	user_id: 'uuid' // id do usuário recebido no pathParameters
    	title: 'Nome da tarefa',
    	done: false, // inicie sempre como false
    	deadline: new Date(deadline)
    }
    ```
    
- **GET-** `/todos/{userid}`
    
    Essa rota deve receber o `id` de um usuário pelo `pathParameters` (o mesmo id que foi usado para criar algum *todo*).
    
    A rota deve retornar os *todos* que possuírem o `user_id` igual ao `id` recebido pelos parâmetros.


## 🚀 Como executar

- Clone o repositório

### Para rodar localmente

- Rode `yarn` para instalar as dependências
- Rode `yarn dynamo:install` para criar o banco em ambiente local.
- Rode `yarn dynamo:start` para iniciar o banco de dados em ambiente local.
- Rode o `yarn dev` para iniciar a aplicação em ambiente local.


## 📄 Licença

Esse projeto está sob a licença MIT.

---

Feito por Jeandson em treinamento do ignite - Rocketseat 👋🏻