const express = require('express');
const router = express.Router();
const { askOpenAI } = require('../services/openaiService');

router.get('/', async (req, res) => {
  try {
    const result = await askOpenAI();
    res.json(JSON.parse(result.answer));
  } catch (err) {
    res.status(500).json({ error: 'Erro ao consultar o OpenAI' });
  }
});

module.exports = router;