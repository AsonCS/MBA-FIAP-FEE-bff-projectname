# FIAP BFF

Este projeto é um Backend For Frontend (BFF) simples desenvolvido em Node.js utilizando o framework Express.

## O que a aplicação faz?

Atualmente, a aplicação expõe uma única rota de verificação de saúde (health check):

- **GET `/health`**  
  Retorna um JSON indicando que o serviço está funcionando corretamente:
  ```json
  { "status": "ok" }
  ```

## O que são middlewares no Node.js?

Middlewares são funções executadas durante o ciclo de processamento de uma requisição no Express. Eles podem acessar e modificar o objeto de requisição (`req`) e resposta (`res`), além de decidir se a requisição deve continuar para o próximo middleware ou encerrar o ciclo. São utilizados para tarefas como autenticação, tratamento de erros, parsing de dados e muito mais. No exemplo deste projeto, o middleware `express.json()` é utilizado para permitir que o servidor interprete automaticamente requisições com corpo em JSON.

- [Documentação oficial do Express](https://expressjs.com/pt-br/)
- [Sobre middlewares no Express](https://expressjs.com/pt-br/guide/using-middleware.html)

## Como funciona?

- O servidor Express é inicializado e configurado para aceitar requisições com corpo em JSON.
- A rota `/health` pode ser utilizada para monitoramento, verificando se o serviço está ativo.
- O servidor escuta na porta definida pela variável de ambiente `PORT` ou, caso não esteja definida, na porta `3000`.

## Como executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie a aplicação:
   ```bash
   node src/app.js
   ```

3. Acesse a rota de health check:
   ```
   http://localhost:3000/health
   ```

## O que mudou?

[Clique e veja o que foi feito nesta branch](https://github.com/jaisonschmidt/fiap-bff/compare/main...01-configure-basic-project)

---
## Próximo passo

[➜ Integrando com OpenAI](../../tree/02-integrate-with-openai)