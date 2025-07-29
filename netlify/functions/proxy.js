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
    const { model, message, turn, responseLength, responseStyle, customPrompt } = JSON.parse(event.body);
    
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
      console.log('Grok API Response:', JSON.stringify(data, null, 2));
      
      // Enhanced token usage debugging
      if (data.usage) {
        console.log(`🚀 Grok Token Usage - Total: ${data.usage.total_tokens}, Prompt: ${data.usage.prompt_tokens}, Completion: ${data.usage.completion_tokens}`);
        if (data.usage.completion_tokens_details) {
          console.log(`🧠 Reasoning tokens: ${data.usage.completion_tokens_details.reasoning_tokens || 0}`);
        }
        if (data.usage.completion_tokens === 0) {
          console.warn('⚠️ ZERO COMPLETION TOKENS - Response likely cut off due to reasoning overhead!');
        }
      }
      
      responseText = data.choices?.[0]?.message?.content?.trim();
      if (!responseText) {
        console.log('Grok response parsing failed. Full data:', data);
        console.log('Choices array:', data.choices);
        console.log('First choice:', data.choices?.[0]);
        console.log('Message:', data.choices?.[0]?.message);
        console.log('Content:', data.choices?.[0]?.message?.content);
      } else {
        console.log(`✅ Grok response length: ${responseText.length} characters`);
      }
    } else if (model === 'claude') {
      responseText = data.content?.[0]?.text?.trim();
    }

    if (!responseText) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'No response text received from API',
          debug_data: model === 'grok' ? data : 'N/A',
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
}; // CRITICAL FIXES: Claude system parameter + Grok 500 tokens for two-sentence responses 
