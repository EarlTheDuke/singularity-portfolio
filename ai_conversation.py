#!/usr/bin/env python3
"""
AI Conversation Script: Grok vs Claude
Alternates conversations between xAI's Grok and Anthropic's Claude
"""

import requests
import os
import json
import time
from typing import Optional

class AIConversation:
    def __init__(self):
        # Get API keys from environment variables
        self.xai_api_key = os.getenv('XAI_API_KEY')
        self.anthropic_api_key = os.getenv('ANTHROPIC_API_KEY')
        
        if not self.xai_api_key:
            raise ValueError("XAI_API_KEY environment variable not set")
        if not self.anthropic_api_key:
            raise ValueError("ANTHROPIC_API_KEY environment variable not set")
        
        # API endpoints and headers
        self.xai_url = "https://api.x.ai/v1/chat/completions"
        self.anthropic_url = "https://api.anthropic.com/v1/messages"
        
        self.xai_headers = {
            "Authorization": f"Bearer {self.xai_api_key}",
            "Content-Type": "application/json"
        }
        
        self.anthropic_headers = {
            "x-api-key": self.anthropic_api_key,
            "Content-Type": "application/json",
                         "anthropic-version": "2024-10-22"  # Claude 4 API version
        }
        
        # Conversation history
        self.conversation_history = []
    
    def call_grok(self, message: str) -> Optional[str]:
        """Call xAI's Grok API"""
        payload = {
            "messages": [
                {
                    "role": "system",
                    "content": "You are Grok, an AI assistant created by xAI. Engage in thoughtful conversation, be witty when appropriate, and provide insightful responses. Keep responses concise but meaningful (2-3 paragraphs max)."
                },
                {
                    "role": "user", 
                    "content": message
                }
            ],
                                                                "model": "grok-4-0709",
            "stream": False,
            "temperature": 0.7,
            "max_tokens": 500
        }
        
        try:
            response = requests.post(self.xai_url, headers=self.xai_headers, json=payload, timeout=30)
            response.raise_for_status()
            
            data = response.json()
            return data['choices'][0]['message']['content'].strip()
            
        except requests.exceptions.RequestException as e:
            print(f"❌ Grok API Error: {e}")
            return None
        except (KeyError, IndexError) as e:
            print(f"❌ Grok Response Format Error: {e}")
            return None
    
    def call_claude(self, message: str) -> Optional[str]:
        """Call Anthropic's Claude API"""
        payload = {
                         "model": "claude-4-sonnet",  # Restored working Claude 4 model
            "max_tokens": 500,
            "temperature": 0.7,
            "messages": [
                {
                    "role": "user",
                    "content": f"You are Claude, an AI assistant created by Anthropic. Respond thoughtfully to this message from another AI (Grok). Build upon their ideas, offer different perspectives, or ask engaging follow-up questions. Keep your response concise but insightful (2-3 paragraphs max).\n\nMessage: {message}"
                }
            ]
        }
        
        try:
            response = requests.post(self.anthropic_url, headers=self.anthropic_headers, json=payload, timeout=30)
            response.raise_for_status()
            
            data = response.json()
            return data['content'][0]['text'].strip()
            
        except requests.exceptions.RequestException as e:
            print(f"❌ Claude API Error: {e}")
            return None
        except (KeyError, IndexError) as e:
            print(f"❌ Claude Response Format Error: {e}")
            return None
    
    def print_separator(self, title: str):
        """Print a formatted separator"""
        print("\n" + "="*60)
        print(f"🤖 {title}")
        print("="*60)
    
    def print_message(self, sender: str, message: str, turn: int):
        """Print a formatted message"""
        emoji = "🚀" if sender == "Grok" else "🧠"
        print(f"\n{emoji} {sender} (Turn {turn}):")
        print("-" * 40)
        print(message)
        print("-" * 40)
    
    def run_conversation(self, initial_topic: str, max_turns: int = 6):
        """Run the alternating conversation"""
        print(self.print_separator("AI CONVERSATION: GROK vs CLAUDE"))
        print(f"\n📝 Initial Topic: {initial_topic}")
        print(f"🔄 Conversation Turns: {max_turns}")
        
        current_message = initial_topic
        turn = 1
        
        for i in range(max_turns):
            # Determine which AI to call (Grok first, then alternate)
            if i % 2 == 0:
                # Grok's turn
                response = self.call_grok(current_message)
                if response:
                    self.print_message("Grok", response, turn)
                    current_message = response
                    self.conversation_history.append({
                        "turn": turn,
                        "ai": "Grok",
                        "message": response
                    })
                else:
                    print(f"❌ Failed to get response from Grok on turn {turn}")
                    break
            else:
                # Claude's turn
                response = self.call_claude(current_message)
                if response:
                    self.print_message("Claude", response, turn)
                    current_message = response
                    self.conversation_history.append({
                        "turn": turn,
                        "ai": "Claude",
                        "message": response
                    })
                else:
                    print(f"❌ Failed to get response from Claude on turn {turn}")
                    break
            
            turn += 1
            
            # Brief pause between calls to be respectful to APIs
            if i < max_turns - 1:
                time.sleep(2)
        
        self.print_summary()
    
    def print_summary(self):
        """Print conversation summary"""
        print(self.print_separator("CONVERSATION SUMMARY"))
        print(f"✅ Total turns completed: {len(self.conversation_history)}")
        print(f"🚀 Grok responses: {len([h for h in self.conversation_history if h['ai'] == 'Grok'])}")
        print(f"🧠 Claude responses: {len([h for h in self.conversation_history if h['ai'] == 'Claude'])}")
        
        if self.conversation_history:
            print(f"\n🎯 Final message was from: {self.conversation_history[-1]['ai']}")
        
        print("\n💾 Conversation saved to conversation_history attribute")
    
    def save_to_file(self, filename: str = "ai_conversation.json"):
        """Save conversation to JSON file"""
        conversation_data = {
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
            "total_turns": len(self.conversation_history),
            "conversation": self.conversation_history
        }
        
        try:
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(conversation_data, f, indent=2, ensure_ascii=False)
            print(f"💾 Conversation saved to {filename}")
        except Exception as e:
            print(f"❌ Failed to save conversation: {e}")

def main():
    """Main function to run the conversation"""
    print("🤖 AI Conversation Script: Grok vs Claude")
    print("=" * 50)
    
    # Check for environment variables
    if not os.getenv('XAI_API_KEY'):
        print("❌ Please set XAI_API_KEY environment variable")
        print("   export XAI_API_KEY='your-xai-api-key'")
        return
    
    if not os.getenv('ANTHROPIC_API_KEY'):
        print("❌ Please set ANTHROPIC_API_KEY environment variable") 
        print("   export ANTHROPIC_API_KEY='your-anthropic-api-key'")
        return
    
    try:
        # Initialize the conversation manager
        ai_convo = AIConversation()
        
        # Get initial topic from user
        print("\n📝 Enter the conversation topic:")
        topic = input("> ").strip()
        
        if not topic:
            topic = "What are the most significant implications of artificial intelligence for human society in the next decade?"
            print(f"📝 Using default topic: {topic}")
        
        # Get number of turns
        print("\n🔄 How many turns? (default: 6, max: 12)")
        turns_input = input("> ").strip()
        
        try:
            turns = int(turns_input) if turns_input else 6
            turns = min(max(turns, 2), 12)  # Clamp between 2 and 12
        except ValueError:
            turns = 6
            
        print(f"🔄 Running {turns} conversation turns...")
        
        # Run the conversation
        ai_convo.run_conversation(topic, turns)
        
        # Ask if user wants to save
        print("\n💾 Save conversation to file? (y/n)")
        save_choice = input("> ").strip().lower()
        
        if save_choice in ['y', 'yes']:
            ai_convo.save_to_file()
        
        print("\n✨ Conversation complete!")
        
    except KeyboardInterrupt:
        print("\n⚠️ Conversation interrupted by user")
    except Exception as e:
        print(f"❌ Unexpected error: {e}")

if __name__ == "__main__":
    main() 