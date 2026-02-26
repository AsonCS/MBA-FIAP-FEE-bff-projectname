const axios = require('axios');
const OpenAI = require('openai');
const genai = require('@google/genai');

async function askGemini() {
  if (true) {
    const message = [
      {
        "word": "Baffle",
        "description": "To confuse someone completely.",
        "useCase": "The complex puzzle completely baffled the students."
      },
      {
        "word": "Ubiquitous",
        "description": "Seeming to be everywhere at the same time.",
        "useCase": "Smartphones have become ubiquitous in modern society."
      },
      {
        "word": "Resilient",
        "description": "Able to withstand or recover quickly from difficult conditions.",
        "useCase": "The economy is remarkably resilient despite the recent crisis."
      },
      {
        "word": "Eloquence",
        "description": "Fluent or persuasive speaking or writing.",
        "useCase": "Her eloquence moved the entire audience to tears."
      },
      {
        "word": "Inquisitive",
        "description": "Having or showing an interest in learning things; curious.",
        "useCase": "The inquisitive child asked many questions about how the world works."
      }
    ]
    return {
      answer: JSON.stringify(message),
      timestamp: new Date().toISOString()
    }
  }

  const ai = new genai.GoogleGenAI({});

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: 'Elabore 5 palavras distintas e seus respectivos significados e um exemplo de uso. Retorne um JSON no formato [{word, description, useCase}]. Não adicione quebras de linhas.',
    config: {
      systemInstruction: "Responda somente questões relacionadas ao ensino de inglês.",
    },
  });

  const message = response.text;

  return {
    answer: message,
    timestamp: new Date().toISOString()
  };
}

async function askOpenAiWithClient() {
  const client = new OpenAI();

  const response = await client.responses.create({
    model: "gpt-5.2",
    input: [
      {
        role: 'system',
        content: 'Responda somente questões relacionadas ao ensino de inglês.'
      },
      {
        role: 'user',
        content: 'Elabore 5 palavras distintas e seus respectivos significados e um exemplo de uso. Retorne um JSON no formato [{word, description, useCase}]. Não adicione quebras de linhas.'
      }
    ]
  });

  const message = response.output_text;

  return {
    answer: message,
    timestamp: new Date().toISOString()
  };
}

async function askOpenAiWithAxios() {
  const prompt = `Elabore 5 palavras distintas e seus respectivos significados e um exemplo de uso. Retorne um JSON no formato [{word, description, useCase}]. Não adicione quebras de linhas.`;

  const response = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'Responda somente questões relacionadas ao ensino de inglês.' },
      { role: 'user', content: prompt }
    ]
  }, {
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    }
  });

  const message = response.data.choices[0].message.content.trim();

  return {
    answer: message,
    timestamp: new Date().toISOString()
  };
}

module.exports = { askGemini, askOpenAiWithAxios, askOpenAiWithClient };