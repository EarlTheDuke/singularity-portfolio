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
    const { model, message, turn, responseLength, grokPrompt, claudePrompt } = JSON.parse(event.body);
    
    // Debug logging
    console.log('=== PROXY DEBUG ===');
    console.log('Model:', model);
    console.log('Message length:', message?.length);
    console.log('Response length:', responseLength);
    console.log('Grok prompt length:', grokPrompt?.length);
    console.log('Claude prompt length:', claudePrompt?.length);
    
    if (!model || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing model or message' })
      };
    }

    // Create length constraint text and token limits
    let lengthConstraint = '';
    let maxTokens = 500;
    
    switch (responseLength) {
      case 'short':
        lengthConstraint = 'IMPORTANT: Respond with exactly ONE sentence only. No more than one sentence.';
        maxTokens = 50;
        break;
      case 'medium':
        lengthConstraint = 'IMPORTANT: Keep your response to around 100 words maximum (about 2-3 sentences).';
        maxTokens = 150;
        break;
      case 'long':
        lengthConstraint = 'IMPORTANT: Keep your response to around 200 words maximum (about 1-2 paragraphs).';
        maxTokens = 300;
        break;
      case 'detailed':
        lengthConstraint = 'You may provide a detailed response as needed.';
        maxTokens = 800;
        break;
      default:
        lengthConstraint = 'Keep your response concise but meaningful (2-3 paragraphs max).';
        maxTokens = 500;
    }

    // Use custom prompts from user settings with better validation
    const customGrokPrompt = (grokPrompt && grokPrompt.trim()) || "You are Grok, an AI assistant created by xAI. Engage in thoughtful conversation, be witty when appropriate, and provide insightful responses.";
    const customClaudePrompt = (claudePrompt && claudePrompt.trim()) || "You are Claude, an AI assistant created by Anthropic. Respond thoughtfully to messages from other AIs. Build upon their ideas, offer different perspectives, or ask engaging follow-up questions.";
    
    // Additional debug logging
    console.log('Final Grok prompt:', customGrokPrompt.substring(0, 150) + '...');
    console.log('Final Claude prompt:', customClaudePrompt.substring(0, 150) + '...');

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
            content: `${customGrokPrompt} ${lengthConstraint}`
          },
          {
            role: "user", 
            content: message
          }
        ],
                          model: "grok-4",
        stream: false,
        temperature: 0.7,
        max_tokens: maxTokens
      };
    } else if (model === 'claude') {
      // Claude/Anthropic API configuration
      apiUrl = 'https://api.anthropic.com/v1/messages';
      apiHeaders = {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'Content-Type': 'application/json',
                          'anthropic-version': '2024-10-22'
      };
      payload = {
                          model: "claude-4-sonnet",
        max_tokens: maxTokens,
        temperature: 0.7,
        messages: [
          {
            role: "user",
            content: `${customClaudePrompt} ${lengthConstraint}\n\nMessage: ${message}`
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

    // Check if API key exists with detailed logging
    const requiredKey = model === 'grok' ? process.env.XAI_API_KEY : process.env.ANTHROPIC_API_KEY;
    console.log(`${model.toUpperCase()} API key exists:`, !!requiredKey);
    console.log(`${model.toUpperCase()} API key length:`, requiredKey ? requiredKey.length : 0);
    
    if (!requiredKey) {
      console.error(`${model.toUpperCase()} API key not found in environment variables`);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: `${model.toUpperCase()} API key not configured` })
      };
    }

         // Debug log the request being made
     console.log('=== API REQUEST DEBUG ===');
     console.log('URL:', apiUrl);
     console.log('Model being used:', payload.model);
     console.log('System/User prompt preview:', model === 'grok' ? payload.messages[0].content.substring(0, 100) + '...' : payload.messages[0].content.substring(0, 100) + '...');
     
     // Extra debug for Grok specifically
     if (model === 'grok') {
       console.log('=== GROK SPECIFIC DEBUG ===');
       console.log('XAI API Key present:', !!process.env.XAI_API_KEY);
       console.log('XAI API Key length:', process.env.XAI_API_KEY ? process.env.XAI_API_KEY.length : 0);
       console.log('Full Grok payload:', JSON.stringify(payload, null, 2));
       console.log('Full Grok headers:', JSON.stringify(apiHeaders, null, 2));
     }
    
    // Make API request
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: apiHeaders,
      body: JSON.stringify(payload),
      timeout: 30000
    });

    if (!response.ok) {
      let errorText;
      try {
        errorText = await response.text();
      } catch (e) {
        errorText = 'Unable to read error response';
      }
      
      console.error(`${model.toUpperCase()} API Error Details:`);
      console.error(`- Status: ${response.status}`);
      console.error(`- Status Text: ${response.statusText}`);
      console.error(`- Response Headers:`, response.headers);
      console.error(`- Error Body:`, errorText);
      console.error(`- Request URL:`, apiUrl);
      console.error(`- Request Payload:`, JSON.stringify(payload, null, 2));
      console.error(`- Request Headers:`, JSON.stringify(apiHeaders, null, 2));
      
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ 
          error: `${model.toUpperCase()} API Error: ${response.status}`,
          details: errorText,
          status: response.status,
          model_used: payload.model,
          api_url: apiUrl
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