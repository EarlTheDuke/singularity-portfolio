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
    console.log('Turn:', turn);
    console.log('Message length:', message?.length);
    console.log('Response length:', responseLength);
    console.log('Timestamp:', new Date().toISOString());
    
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
      payload = {
        model: "claude-sonnet-4-20250514",
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

    // Check if API key exists
    const requiredKey = model === 'grok' ? process.env.XAI_API_KEY : process.env.ANTHROPIC_API_KEY;
    console.log(`${model.toUpperCase()} API key exists:`, !!requiredKey);
    
    if (!requiredKey) {
      console.error(`${model.toUpperCase()} API key not found in environment variables`);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          success: false,
          error: `${model.toUpperCase()} API key not configured` 
        })
      };
    }

         // Enhanced debug logging for Grok issues
     if (model === 'grok') {
       console.log('=== GROK DEBUG ===');
       console.log('Turn:', turn);
       console.log('XAI API Key present:', !!process.env.XAI_API_KEY);
       console.log('XAI API Key prefix:', process.env.XAI_API_KEY ? process.env.XAI_API_KEY.substring(0, 10) + '...' : 'MISSING');
       console.log('Message preview:', message.substring(0, 200) + '...');
       console.log('Max tokens:', maxTokens);
       console.log('Full payload:', JSON.stringify(payload, null, 2));
       console.log('Request timestamp:', new Date().toISOString());
     }
    
    // Make API request with enhanced error handling
    let response;
    const startTime = Date.now();
    
    try {
      console.log(`Making API request to ${model.toUpperCase()} at ${apiUrl}`);
      response = await fetch(apiUrl, {
        method: 'POST',
        headers: apiHeaders,
        body: JSON.stringify(payload),
        timeout: 30000
      });
      
      const requestTime = Date.now() - startTime;
      console.log(`${model.toUpperCase()} API responded with status:`, response.status, `in ${requestTime}ms`);
      
    } catch (fetchError) {
      console.error(`${model.toUpperCase()} API Fetch Error:`, fetchError);
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ 
          success: false,
          error: `${model.toUpperCase()} API network error`,
          details: fetchError.message,
          model_used: payload.model,
          turn: turn,
          timestamp: new Date().toISOString()
        })
      };
    }

    // Enhanced error handling for non-OK responses
    if (!response.ok) {
      let errorDetails;
      let apiErrorData = null;
      
      try {
        const errorText = await response.text();
        console.error(`${model.toUpperCase()} API Error Details:`);
        console.error(`- Status: ${response.status} ${response.statusText}`);
        console.error(`- Turn: ${turn}`);
        console.error(`- Response Body:`, errorText);
        console.error(`- Request URL:`, apiUrl);
        console.error(`- Model:`, payload.model);
        console.error(`- Timestamp:`, new Date().toISOString());
        
        // Try to parse error details
        try {
          apiErrorData = JSON.parse(errorText);
          errorDetails = apiErrorData.error?.message || apiErrorData.detail || errorText;
        } catch (e) {
          errorDetails = errorText || `HTTP ${response.status} error`;
        }
        
      } catch (e) {
        errorDetails = `Unable to read error response (${response.status})`;
        console.error('Error reading API response:', e);
      }
      
      // Return the original API error status and details instead of throwing
      return {
        statusCode: 200, // Return 200 so client can handle the API error gracefully
        headers,
        body: JSON.stringify({ 
          success: false,
          error: `${model.toUpperCase()} API Error`,
          details: errorDetails,
          api_status: response.status,
          model_used: payload.model,
          turn: turn,
          timestamp: new Date().toISOString(),
          api_error_data: apiErrorData
        })
      };
    }

         // Parse response with error handling
     let data;
     try {
       const responseText = await response.text();
       console.log(`${model.toUpperCase()} raw response:`, responseText.substring(0, 500) + '...');
       
       data = JSON.parse(responseText);
       
       if (model === 'grok') {
         console.log(`${model.toUpperCase()} parsed response structure:`, {
           hasChoices: !!data.choices,
           choicesLength: data.choices?.length,
           hasMessage: !!data.choices?.[0]?.message,
           hasContent: !!data.choices?.[0]?.message?.content,
           contentPreview: data.choices?.[0]?.message?.content?.substring(0, 100) + '...'
         });
       }
     } catch (parseError) {
       console.error(`${model.toUpperCase()} response parsing error:`, parseError);
       console.error('Raw response that failed to parse:', responseText?.substring(0, 1000));
       return {
         statusCode: 200, // Return 200 with error details
         headers,
         body: JSON.stringify({ 
           success: false,
           error: `${model.toUpperCase()} response parsing failed`,
           details: parseError.message,
           turn: turn
         })
       };
     }
     
         // Extract response text based on API format
     let responseText;
     try {
       if (model === 'grok') {
         // More robust extraction for Grok
         console.log('Extracting Grok response...');
         
         if (!data.choices || !Array.isArray(data.choices) || data.choices.length === 0) {
           console.error('Grok API response missing choices array:', JSON.stringify(data, null, 2));
           return {
             statusCode: 200,
             headers,
             body: JSON.stringify({ 
               success: false,
               error: `Invalid Grok API response structure`,
               details: 'Response missing choices array',
               raw_response: data,
               turn: turn
             })
           };
         }
         
         const choice = data.choices[0];
         if (!choice.message || !choice.message.content) {
           console.error('Grok API response missing message content:', JSON.stringify(choice, null, 2));
           return {
             statusCode: 200,
             headers,
             body: JSON.stringify({ 
               success: false,
               error: `Invalid Grok API response structure`,
               details: 'Response missing message.content',
               raw_response: data,
               turn: turn
             })
           };
         }
         
         responseText = choice.message.content.trim();
         console.log('Grok response extracted successfully, length:', responseText.length);
         
       } else if (model === 'claude') {
         responseText = data.content?.[0]?.text?.trim();
       }

       if (!responseText) {
         console.error(`${model.toUpperCase()} extracted empty response text from:`, JSON.stringify(data, null, 2));
         return {
           statusCode: 200,
           headers,
           body: JSON.stringify({ 
             success: false,
             error: `Empty response text from ${model.toUpperCase()} API`,
             details: 'Response text was empty after extraction',
             raw_response: data,
             turn: turn
           })
         };
       }
     } catch (extractError) {
       console.error(`${model.toUpperCase()} response extraction error:`, extractError);
       console.error('Error stack:', extractError.stack);
       return {
         statusCode: 200,
         headers,
         body: JSON.stringify({ 
           success: false,
           error: `${model.toUpperCase()} response extraction failed`,
           details: extractError.message,
           stack: extractError.stack,
           turn: turn
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
        response: responseText,
        timestamp: new Date().toISOString()
      })
    };

       } catch (error) {
    console.error('=== PROXY FUNCTION FATAL ERROR ===');
    console.error('Error:', error);
    console.error('Error message:', error.message);
    console.error('Stack trace:', error.stack);
    console.error('Event body:', event.body);
    console.error('Timestamp:', new Date().toISOString());
    
    // Try to get model and turn if they exist
    let errorModel = 'unknown';
    let errorTurn = 'unknown';
    try {
      const parsedBody = JSON.parse(event.body);
      errorModel = parsedBody.model || 'unknown';
      errorTurn = parsedBody.turn || 'unknown';
    } catch (e) {
      // Ignore parsing errors for error logging
    }
    
    console.error('Model:', errorModel);
    console.error('Turn:', errorTurn);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false,
        error: 'Internal server error',
        details: error.message,
        stack: error.stack, // Always include stack for debugging
        timestamp: new Date().toISOString(),
        model: errorModel,
        turn: errorTurn
      })
    };
  }
}; 