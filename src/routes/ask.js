const express = require('express');
const router = express.Router();
const { askGemini } = require('../services/openaiService');
const newrelic = require('newrelic');

router.get('/', async (req, res) => {
  try {
    const result = await askGemini();
    res.json(JSON.parse(result.answer));
  } catch (err) {
    // Log customizado para o New Relic
    // console.error(err)
    newrelic.noticeError(err, {
      customMessage: 'OpenAiCommunicationError',
      endpoint: '/ask',
      timestamp: new Date().toISOString(),
    });
    res.status(500).json({ error: 'Erro ao consultar o OpenAI' });
  }
});

module.exports = router;