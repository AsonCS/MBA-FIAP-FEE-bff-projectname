# FIAP BFF – Configuração de Rate Limit

Este projeto faz parte de um tutorial prático de Backend For Frontend (BFF) utilizando Node.js e Express.

---

## O que foi feito nesta branch?

### 1. Instalação do express-rate-limit

Foi instalada a dependência **express-rate-limit** para proteger a API contra abusos e ataques de força bruta, limitando o número de requisições que cada IP pode fazer em um determinado período de tempo.

- **O que é express-rate-limit?**  
  É um middleware para aplicações Express que permite limitar o número de requisições recebidas de um mesmo IP em um intervalo de tempo, ajudando a evitar sobrecarga e uso indevido da API.

- **Como instalar o express-rate-limit?**
  ```bash
  npm install express-rate-limit
  ```

### 2. Configuração e uso do rate limit

O rate limit foi configurado para permitir no máximo 20 requisições por IP a cada 15 minutos. Caso o limite seja atingido, a API retorna uma mensagem de erro informando que houve muitas requisições.

- **Como foi configurado?**
  ```js
  const rateLimit = require('express-rate-limit');

  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 20, // Limite de 20 requisições por IP
    message: { error: 'Muitas requisições. Tente novamente mais tarde.' },
  });

  app.use(limiter); // Aplica o rate limit globalmente
  ```

Com essa configuração, todas as rotas da aplicação ficam protegidas contra excesso de requisições vindas do mesmo IP.

---

## Como executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie a aplicação:
   ```bash
   node src/app.js
   ```

## O que mudou?

[Clique e veja o que foi feito nesta branch](https://github.com/jaisonschmidt/fiap-bff/compare/03-configure-cors...04-configure-rate-limit)

---

## Próximo passo

[➜ Configurar New Relic](../../tree/05-configure-newrelic)