# FIAP BFF – Configuração de CORS

Este projeto faz parte de um tutorial prático de Backend For Frontend (BFF) utilizando Node.js e Express.

---

## O que foi feito nesta branch?

### 1. Instalação e configuração do CORS

Foi instalado e configurado o pacote **cors** para permitir que a API aceite requisições de diferentes origens, facilitando a integração com frontends hospedados em domínios distintos.

- **O que é CORS?**  
  CORS (Cross-Origin Resource Sharing) é um mecanismo de segurança dos navegadores que controla como recursos de uma aplicação web podem ser requisitados a partir de outro domínio. Ao configurar o CORS no backend, você define quais origens podem acessar a API, quais métodos HTTP são permitidos e quais cabeçalhos podem ser utilizados, tornando a comunicação entre frontend e backend mais segura e controlada.

- **Como instalar o cors?**
  ```bash
  npm install cors
  ```

- **Como foi configurado?**  
  O middleware `cors` foi adicionado ao projeto com opções que permitem todas as origens (`origin: '*'`), além de métodos e cabeçalhos específicos:
  ```js
  const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  app.use(cors(corsOptions));
  ```

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

[Clique e veja o que foi feito nesta branch](https://github.com/jaisonschmidt/fiap-bff/compare/02-integrate-with-openai...03-configure-cors)

---
## Próximo passo

[➜ Configurar Rate limit](../../tree/04-configure-rate-limit)