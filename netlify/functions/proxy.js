const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    const { model, message, turn } = JSON.parse(event.body);
    
    if (!model || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing model or message' })
      };
    }

    let apiUrl, apiHeaders, payload;

    if (model === 'grok') {
      // Grok/xAI API configuration
      apiUrl = 'https://api.x.ai/v1/chat/completions';
      apiHeaders = {
        'Authorization': `Bearer ${process.env.XAI_API_KEY}`,
        'Content-Type': 'application/json'
      };
      payload = {
        messages: [
          {
            role: "system",
            content: "You are Grok, an AI assistant created by xAI. Engage in thoughtful conversation, be witty when appropriate, and provide insightful responses. Keep responses concise but meaningful (2-3 paragraphs max)."
          },
          {
            role: "user", 
            content: message
          }
        ],
        model: "grok-2-1212",
        stream: false,
        temperature: 0.7,
        max_tokens: 500
      };
    } else if (model === 'claude') {
      // Claude/Anthropic API configuration
      apiUrl = 'https://api.anthropic.com/v1/messages';
      apiHeaders = {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01'
      };
      payload = {
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 500,
        temperature: 0.7,
        messages: [
          {
            role: "user",
            content: `You are Claude, an AI assistant created by Anthropic. Respond thoughtfully to this message from another AI (Grok). Build upon their ideas, offer different perspectives, or ask engaging follow-up questions. Keep your response concise but insightful (2-3 paragraphs max).\n\nMessage: ${message}`
          }
        ]
      };
    } else {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid model. Use "grok" or "claude"' })
      };
    }

    // Check if API key exists
    const requiredKey = model === 'grok' ? process.env.XAI_API_KEY : process.env.ANTHROPIC_API_KEY;
    if (!requiredKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: `${model.toUpperCase()} API key not configured` })
      };
    }

    // Make API request
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: apiHeaders,
      body: JSON.stringify(payload),
      timeout: 30000
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`${model.toUpperCase()} API Error:`, response.status, errorText);
      console.error(`Request payload:`, JSON.stringify(payload, null, 2));
      console.error(`API Headers:`, JSON.stringify(apiHeaders, null, 2));
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ 
          error: `${model.toUpperCase()} API Error: ${response.status}`,
          details: errorText,
          status: response.status
        })
      };
    }

    const data = await response.json();
    
    // Extract response text based on API format
    let responseText;
    if (model === 'grok') {
      responseText = data.choices?.[0]?.message?.content?.trim();
    } else if (model === 'claude') {
      responseText = data.content?.[0]?.text?.trim();
    }

    if (!responseText) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'No response text received from API' })
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true,
        model,
        turn,
        response: responseText 
      })
    };

  } catch (error) {
    console.error('Proxy function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        details: error.message 
      })
    };
  }
}; 