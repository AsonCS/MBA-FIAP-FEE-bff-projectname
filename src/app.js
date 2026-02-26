// Importa o pacote dotenv para carregar variáveis de ambiente do arquivo .env
require('dotenv').config();

// Importa o framework Express, que facilita a criação de servidores web em Node.js
const express = require('express');

// Cria uma instância do Express
const app = express();

// Importa o pacote cors para permitir requisições de diferentes origens
const cors = require('cors');

// Importa o roteador definido em 'routes/ask.js'
const askRoute = require('./routes/ask');

// Adiciona um middleware para interpretar requisições com corpo em JSON
app.use(express.json());

// Adiciona o middleware cors para permitir requisições de diferentes origens
const corsOptions = {
  origin: '*', // Permite todas as origens. Altere para um domínio específico, se necessário.
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
};

// Aplica o middleware CORS com as opções definidas acima
app.use(cors(corsOptions));

// Define a rota '/ask' que utiliza o roteador importado de 'routes/ask.js'
app.use('/ask', askRoute);

// Define uma rota GET em '/health' que retorna um status 200 e um JSON indicando que o serviço está ok
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Define a porta do servidor, usando a variável de ambiente PORT ou 3000 como padrão
const PORT = process.env.PORT || 3000;

// Inicia o servidor e exibe uma mensagem no console indicando em qual porta está rodando
app.listen(PORT, () => console.log(`BFF rodando na porta ${PORT}`));