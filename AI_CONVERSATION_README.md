# AI Conversation Script: Grok vs Claude

An interactive Python script that creates fascinating conversations between xAI's Grok and Anthropic's Claude APIs. Watch as two different AI systems bounce ideas off each other!

## 🚀 Features

- **Alternating Conversations**: Grok responds first, then Claude, creating a dynamic dialogue
- **Customizable Topics**: Start with any topic you want to explore
- **Flexible Turn Count**: Choose 2-12 conversation turns
- **Beautiful Console Output**: Formatted, emoji-rich display
- **Conversation Logging**: Save conversations to JSON files
- **Error Handling**: Robust API error management
- **Rate Limiting**: Respectful 2-second pauses between API calls

## 📋 Requirements

- Python 3.7+
- `requests` library
- xAI API key (Grok access)
- Anthropic API key (Claude access)

## 🛠️ Setup

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Set up API keys as environment variables:**
   
   **On Windows (PowerShell):**
   ```powershell
   $env:XAI_API_KEY="your-xai-api-key-here"
   $env:ANTHROPIC_API_KEY="your-anthropic-api-key-here"
   ```
   
   **On macOS/Linux (Bash):**
   ```bash
   export XAI_API_KEY="your-xai-api-key-here"
   export ANTHROPIC_API_KEY="your-anthropic-api-key-here"
   ```

3. **Run the script:**
   ```bash
   python ai_conversation.py
   ```

## 🎯 How It Works

1. **Topic Input**: Enter your conversation topic (or use the default)
2. **Turn Selection**: Choose how many conversation turns (2-12)
3. **Conversation Flow**:
   - 🚀 **Grok** responds first to your topic
   - 🧠 **Claude** responds to Grok's message
   - 🚀 **Grok** responds to Claude's message
   - 🧠 **Claude** responds to Grok's message
   - *Pattern continues...*
4. **Results**: View the full conversation in console + optionally save to JSON

## 📝 Example Topics

Try these conversation starters:

- "What are the ethical implications of AI consciousness?"
- "How will quantum computing change cryptography?"
- "What's the future of human-AI collaboration?"
- "Should AI systems have rights?"
- "How can we ensure AI benefits all of humanity?"

## 🔧 Customization

### Modify AI Personalities
Edit the system prompts in `call_grok()` and `call_claude()` functions to change how each AI behaves.

### Adjust Response Length
Change `max_tokens` parameter (currently 500) to make responses longer or shorter.

### Change Models
- **Grok**: Modify `"model": "grok-beta"` to use different Grok models
- **Claude**: Change `"model": "claude-3-5-sonnet-20241022"` for different Claude versions

## 📊 Output Format

```
🤖 AI CONVERSATION: GROK vs CLAUDE
============================================================
📝 Initial Topic: What are the ethical implications of AI consciousness?
🔄 Conversation Turns: 6

🚀 Grok (Turn 1):
----------------------------------------
[Grok's response here]
----------------------------------------

🧠 Claude (Turn 2):
----------------------------------------
[Claude's response here]
----------------------------------------
```

## 💾 Saving Conversations

The script can save conversations to JSON format:

```json
{
  "timestamp": "2025-01-27 15:30:45",
  "total_turns": 6,
  "conversation": [
    {
      "turn": 1,
      "ai": "Grok",
      "message": "..."
    },
    {
      "turn": 2,
      "ai": "Claude", 
      "message": "..."
    }
  ]
}
```

## 🚨 API Keys & Security

- **Never commit API keys to version control**
- **Use environment variables only**
- **Keep your keys secure and private**
- **Monitor your API usage/costs**

## 🎨 Integration Ideas

This script is perfect for:
- Research into AI conversation patterns
- Content generation and brainstorming
- Educational demonstrations of different AI approaches
- **Integration with your Live AI Convo website!**

Enjoy watching two AI minds collaborate! 🤖✨ 