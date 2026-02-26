// Importa o framework Express, que facilita a criação de servidores web em Node.js
const express = require('express');

// Cria uma instância do Express
const app = express();

// Adiciona um middleware para interpretar requisições com corpo em JSON
app.use(express.json());

// Define uma rota GET em '/health' que retorna um status 200 e um JSON indicando que o serviço está ok
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Define a porta do servidor, usando a variável de ambiente PORT ou 3000 como padrão
const PORT = process.env.PORT || 3000;

// Inicia o servidor e exibe uma mensagem no console indicando em qual porta está rodando
app.listen(PORT, () => console.log(`BFF rodando na porta ${PORT}`));