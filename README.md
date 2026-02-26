# FIAP BFF – Integração com OpenAI

Este projeto faz parte de um tutorial prático de Backend For Frontend (BFF) utilizando Node.js e Express. Nesta branch, foram implementadas as seguintes funcionalidades:

---

## O que foi feito nesta branch?

### 1. Criação da rota `/ask` integrando com a OpenAI

Foi criada uma rota chamada `/ask` que recebe perguntas do usuário e retorna respostas geradas pela API da OpenAI. Essa rota serve como ponte entre o frontend e a inteligência artificial da OpenAI.

### 2. Criação de um service para integração com a OpenAI

Para realizar a comunicação com a OpenAI, foi criado um service utilizando o pacote **axios**.

- **O que é o axios?**  
  Axios é uma biblioteca para fazer requisições HTTP de forma simples e eficiente em aplicações Node.js e no navegador.

- **Como instalar o axios?**
  ```bash
  npm install axios
  ```

### 3. Utilização do dotenv para variáveis de ambiente

O projeto utiliza o pacote **dotenv** para gerenciar variáveis sensíveis, como a chave da API da OpenAI, sem expô-las no código-fonte.

- **O que é o dotenv?**  
  Dotenv é uma biblioteca que carrega variáveis de ambiente de um arquivo `.env` para o `process.env` do Node.js, facilitando a configuração de ambientes de desenvolvimento e produção.

- **Como instalar o dotenv?**
  ```bash
  npm install dotenv
  ```

### 4. Como gerar uma chave de API na OpenAI

Para utilizar a API da OpenAI, é necessário criar uma chave de API:

1. Acesse o site da [OpenAI](https://platform.openai.com/).
2. Faça login ou crie uma conta.
3. No painel, vá até a seção "API Keys" ou "Chaves de API".
4. Clique em "Create new secret key" para gerar uma nova chave.
5. Copie a chave gerada e adicione ao arquivo `.env` do projeto:
   ```
   OPENAI_API_KEY=sua_chave_aqui
   ```

---

## Como executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Crie um arquivo `.env` na raiz do projeto e adicione sua chave da OpenAI:
   ```
   OPENAI_API_KEY=sua_chave_aqui
   ```

3. Inicie a aplicação:
   ```bash
   node src/app.js
   ```

4. Faça requisições para a rota `/ask` para interagir com a OpenAI.

## O que mudou?

[Clique e veja o que foi feito nesta branch](https://github.com/jaisonschmidt/fiap-bff/compare/01-configure-basic-project...02-integrate-with-openai)

---

## Próximo passo

[➜ Configuração de CORS](../../tree/03-configure-cors)