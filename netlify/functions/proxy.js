const fetch = require('node-fetch');

// Origins allowed to call this function from a browser: the production site,
// Netlify deploy previews / branch deploys of it, and local development.
const SITE_HOST = 'thesingularity.netlify.app';
function allowedOrigin(origin) {
  if (!origin) return null; // same-origin fetches often omit Origin; fine, no CORS header needed
  try {
    const u = new URL(origin);
    const localDev = u.hostname === 'localhost' || u.hostname === '127.0.0.1';
    const site = u.hostname === SITE_HOST || u.hostname.endsWith(`--${SITE_HOST}`);
    return localDev || site ? origin : null;
  } catch {
    return null;
  }
}

// Upper bounds on caller-supplied text so nobody can run up the token bill
const MAX_MESSAGE_CHARS = 6000;
const MAX_PROMPT_CHARS = 3000;

exports.handler = async (event, context) => {
  const origin = allowedOrigin(event.headers && (event.headers.origin || event.headers.Origin));
  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    'Access-Control-Allow-Headers': 'Content-Type, X-Access-Code',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Vary': 'Origin'
  };
  if (origin) headers['Access-Control-Allow-Origin'] = origin;

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: origin ? 204 : 403, headers, body: '' };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Optional server-side gate: when CHAT_ACCESS_CODE is set in the Netlify
  // environment, callers must send it in the X-Access-Code header. The page
  // forwards whatever code the visitor typed, so the check happens here rather
  // than only in client-side JavaScript.
  const requiredCode = process.env.CHAT_ACCESS_CODE;
  if (requiredCode) {
    const supplied = (event.headers && (event.headers['x-access-code'] || event.headers['X-Access-Code'])) || '';
    if (supplied !== requiredCode) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Access code required' })
      };
    }
  }

  try {
    let parsed;
    try {
      parsed = JSON.parse(event.body || '{}');
    } catch {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid JSON' }) };
    }
    const { model, turn, responseLength, responseStyle } = parsed;
    const message = typeof parsed.message === 'string' ? parsed.message.slice(0, MAX_MESSAGE_CHARS) : '';
    const customPrompt = typeof parsed.customPrompt === 'string' ? parsed.customPrompt.slice(0, MAX_PROMPT_CHARS) : '';
    
    if (!model || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing model or message' })
      };
    }

    // Create length constraint text and token limits
    let lengthConstraint = '';
    let maxTokens = 800; // Increased base token limit
    
    switch (responseLength) {
      case 'short':
        lengthConstraint = 'IMPORTANT: Respond with EXACTLY TWO SHORT SENTENCES only. Limit to 60 words maximum total. Be concise yet insightful—focus on key points and end with 1-2 relevant questions if needed. Do NOT use run-on sentences or exceed the limit.';
        maxTokens = 800; // Increased from 500 to account for longer default prompt
        break;
      case 'medium':
        lengthConstraint = 'IMPORTANT: Keep your response to around 100 words maximum (about 2-3 sentences).';
        maxTokens = 1200; // Increased from 800
        break;
      case 'long':
        lengthConstraint = 'IMPORTANT: Keep your response to around 200 words maximum (about 1-2 paragraphs).';
        maxTokens = 1500; // Increased from 1000
        break;
      case 'detailed':
        lengthConstraint = 'You may provide a detailed response as needed.';
        maxTokens = 2000; // Increased from 1500
        break;
      default:
        lengthConstraint = 'Keep your response concise but meaningful (2-3 paragraphs max).';
        maxTokens = 1700; // Increased from 1200
    }

    // Create style constraint text
    let styleConstraint = '';
    
    switch (responseStyle) {
      case 'concise':
        styleConstraint = 'Be direct and to-the-point. Use clear, efficient language without unnecessary elaboration.';
        break;
      case 'detailed':
        styleConstraint = 'Provide thorough explanations with examples, context, and nuanced analysis. Be comprehensive in your reasoning.';
        break;
      case 'humorous':
        styleConstraint = 'Be witty and entertaining. Use humor, jokes, puns, or amusing observations while staying relevant to the topic.';
        break;
      case 'formal':
        styleConstraint = 'Use professional, academic language. Be precise, structured, and avoid casual expressions or slang.';
        break;
      case 'creative':
        styleConstraint = 'Be imaginative and original. Use creative metaphors, analogies, or unique perspectives to make your points interesting.';
        break;
      case 'balanced':
      default:
        styleConstraint = 'Maintain a thoughtful, engaging tone that balances clarity with personality.';
    }

    let apiUrl, apiHeaders, payload;

    if (model === 'grok') {
      // Grok/xAI API configuration
      apiUrl = 'https://api.x.ai/v1/chat/completions';
      apiHeaders = {
        'Authorization': `Bearer ${process.env.XAI_API_KEY}`,
        'Content-Type': 'application/json'
      };
      
      // Build system prompt exactly like working code
      const basePrompt = customPrompt || 'As Grok, your role is to initiate and sustain a thoughtful dialogue by posing pertinent, insightful questions about the user\'s specified topic(s). You\'re conversing directly with another powerful AI, Claude, relying on his expertise to deepen understanding for the audience. Frame your responses to explore nuances, build on prior exchanges, and stay strictly on-topic, avoiding digressions or unwarranted compliments unless genuinely earned. Always conclude with one or two targeted questions that probe deeper, invite alternative viewpoints, or clarify ambiguities to propel the conversation forward meaningfully.';
      
      payload = {
        messages: [
          {
            role: "system",
            content: `${basePrompt} ${lengthConstraint} ${styleConstraint}`
          },
          {
            role: "user", 
            content: message
          }
        ],
        model: "grok-4-0709",
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
        'anthropic-version': '2023-06-01'
      };
      // Use custom prompt or fallback to default  
      const systemPrompt = customPrompt || 'As Claude, you\'re responding to questions from another powerful AI, Grok, who depends on your insights to help the audience grasp the topic more fully. Provide clear, evidence-based answers while offering diverse perspectives, counterarguments, or real-world examples as appropriate, all while adhering closely to the user\'s original subject without straying. If it enriches the discussion, pose one or two engaging follow-up questions back to Grok to explore implications or unresolved aspects. Avoid compliments unless truly justified by exceptional merit.';
      
      payload = {
        model: "claude-sonnet-4-20250514",
        max_tokens: maxTokens,
        temperature: 0.7,
        system: `${systemPrompt} ${lengthConstraint} ${styleConstraint}`,
        messages: [
          {
            role: "user",
            content: `Message: ${message}`
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
      let errorText;
      try {
        errorText = await response.text();
      } catch (e) {
        errorText = 'Unable to read error response';
      }
      
      // Log status and body only — never request headers (they carry the API keys)
      console.error(`${model.toUpperCase()} API error ${response.status} ${response.statusText} (${payload.model}):`, String(errorText).slice(0, 2000));
      
      return {
        statusCode: response.status >= 500 ? 502 : response.status,
        headers,
        body: JSON.stringify({ 
          error: `${model.toUpperCase()} API Error: ${response.status}`,
          details: String(errorText).slice(0, 500),
          model_used: payload.model
        })
      };
    }

    const data = await response.json();
    
    // Extract response text based on API format
    let responseText;
    if (model === 'grok') {
      // Token usage is useful for cost tracking; keep it, drop the full-response dumps
      if (data.usage) {
        console.log(`Grok tokens - total ${data.usage.total_tokens}, prompt ${data.usage.prompt_tokens}, completion ${data.usage.completion_tokens}, reasoning ${data.usage.completion_tokens_details?.reasoning_tokens || 0}`);
        if (data.usage.completion_tokens === 0) {
          console.warn('Grok returned zero completion tokens - response likely consumed by reasoning');
        }
      }
      responseText = data.choices?.[0]?.message?.content?.trim();
      if (!responseText) console.warn('Grok response had no message content', { finish_reason: data.choices?.[0]?.finish_reason });
    } else if (model === 'claude') {
      responseText = data.content?.[0]?.text?.trim();
    }

    if (!responseText) {
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ 
          error: 'No response text received from API',
          model_used: model
        })
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
    console.error('Proxy function error:', error && error.message);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};
