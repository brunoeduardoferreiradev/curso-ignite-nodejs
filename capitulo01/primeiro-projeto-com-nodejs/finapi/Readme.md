# 💵 - FinAPI - Financeira

## 🛠 Ferramentas 

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

## 📚 Bibliotecas / Frameworks
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![UUID](https://img.shields.io/badge/-UUID-green?style=for-the-badge&logo=uuid)

## Requisitos
* [X] Deve ser possível criar uma conta
   * [X] Não deve ser possível cadastrar uma conta com CPF já existente
* [X] Deve ser possível buscar o extrato bancário do cliente
   * [X] Não deve ser possível buscar extrato em uma conta não existente
* [X] Deve ser possível realizar um depósito
   * [X] Não deve ser possível fazer depósito em uma conta não existente
* [X] Deve ser possível realizar um saque
   * [X] Não deve ser possível fazer saque em uma conta não existente
   * [X] Não deve ser possível fazer saque quando o saldo for insuficiente
* [X] Deve ser possível buscar o extrato bancário do cliente por data
* [X] Deve ser possível atualizar dados da conta do cliente
* [X] Deve ser possível obter dados da conta do cliente
* [X] Deve ser possível deletar uma conta
   * [X] Não deve ser possível excluir uma conta não existente
* [X] Deve ser possível retornar o balance

## 🌐 Arquivo Insomnia com os Endpoints
- [FinAPI - Insomnia JSON](https://github.com/brunoeduardoferreiradev/curso-ignite-nodejs/tree/main/capitulo01/primeiro-projeto-com-nodejs/finapi/insomnia-file)

<br/>

## 📌 Endpoints


> BaseURL : http://localhost:3333

|Verbo      | Endpoint        | Descrição                                                                       |
|-----------|-----------------|---------------------------------------------------------------------------------|
|**GET**    | /account        |  Endpoint para trazer os dados da conta de um usuário informando o cpf do mesmo |
|**PUT**    | /account        |  Endpoint para atualização do nome do usuário da Conta                          |
|**POST**   | /account        |  Endpoint para Criar uma conta quando passamos um cpf e um nome de usuário      |
|**DELETE** | /account        |  Endpoint para efetuar a exclusão da conta de um usuário                        |
|**GET**    | /statement      |  Endpoint traz o extrato do usuario                                             |
|**GET**    | /statement/date |  Endpoint traz o extrato do usuário por data                                    |
|**POST**   | /deposit        |  Endpoint que cria um depósito na conta do usuário                              |
|**POST**   | /withdraw       |  Endpoint que faz um saque na conta do usuario                                  |
|**GET**    | /balance        |  Endpoint que traz o valor do saldo da conta do usuário                         |
