# FIAP BFF – Configuração do New Relic

Este projeto faz parte de um tutorial prático de Backend For Frontend (BFF) utilizando Node.js e Express.

---

## O que foi feito nesta branch?

### Instalação e configuração do New Relic

Nesta branch, foi instalada e configurada a dependência **New Relic** para monitoramento de performance e erros da aplicação. O New Relic permite acompanhar métricas em tempo real, identificar gargalos, monitorar transações e detectar possíveis falhas no backend.

- **O que é o New Relic?**  
  New Relic é uma plataforma de observabilidade que fornece monitoramento de aplicações, infraestrutura e experiência do usuário, facilitando a identificação e resolução de problemas de performance.

- **Como instalar o New Relic?**
  ```bash
  npm install newrelic
  ```

- **Como foi configurado?**
  O New Relic foi importado logo no início do arquivo principal da aplicação (`app.js`), garantindo que o monitoramento seja iniciado assim que o servidor for executado:
  ```js
  require('newrelic');
  ```
  Além disso, é necessário criar um arquivo `newrelic.js` na raiz do projeto e configurar sua chave de licença e nome da aplicação conforme as instruções da [documentação oficial](https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/install-nodejs-agent/).

---

## Como executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Configure o arquivo `newrelic.js` com sua chave de licença e nome da aplicação.

3. Inicie a aplicação:
   ```bash
   node src/app.js
   ```

## O que mudou?

[Clique e veja o que foi feito nesta branch](https://github.com/jaisonschmidt/fiap-bff/compare/04-configure-rate-limit...05-configure-actions)

---

## Próximo passo

[➜ Configurar Deploy com Github Actions](../../tree/06-configure-actions)