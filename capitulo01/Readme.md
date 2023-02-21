# 📑Anotações do Capítulo 01

### O que é NodeJS ? 
> É uma plataforma open-source que permite  a execuçãoda linguagem javascript do lado do servidor

### Características do NodeJS ? 
* Baseado em eventos ( Event Loop ) - Call Stack
* Single - Thread
* Non-blocking I/O
* Módulos Próprios

### Conceitos sobre API ( Application Programming Interface ) Rest
> API :  

### O que é REST ( Representation State Transfer )
> É um modelo de arquitetura
* 6 Regras  
  * Client-Server 
  * StetaLess
  * Cache
  * Interface Uniforme
    * Identificação dos recursos
    * Representação dos recursos
    * Mensagens auto-descritivas 
    * HATEOAS ( Hypertext As The Engine Of Application State )
 * Camadas
 * Código Sob Demanda 

### Métodos de Requisições - HTTP Verbs
* GET ( Leitura )
* POST ( Criação )
* PUT ( Atualização )
* DELETE ( Deleção )
* PATCH ( Atualização parcial )

### HTTP Codes
* 1XX: Informativo - a solicitaçao foi aceita ou o processo continua em andamento
* 2XX: Confirmação
  * 200 - Requisição bem sucedida
  * 201 - Created - Geralmente usado para POST após uma inserção
* 3XX: Redirecionamento
  * 301 - Moved Permanently
  * 302 - Moved 
* 4XX: Erro do Cliente
  * 400 - Bad Request
  * 401 - Unauthorized
  * 403 - Forbidden
  * 404 - Not Found
  * 422 - Unprocessable Entity   
* 5XX: Erro no Servidor - o Servidor falhou ao concluir a solicitação
  * 500 - Internal Server Error
  * 502 - Bad Gateway

### Parâmetros das Requisições

> Header Params
```
authority: app.rocketseat.com.br
method: GET
path: /api/journey-nodes
scheme: https
referer: https://app.rocketseat.com.be/node
```
> Query Params
