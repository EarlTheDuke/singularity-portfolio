#!/usr/bin/env python3
"""
AI Conversation Script: Grok vs Claude
Alternates conversations between xAI's Grok and Anthropic's Claude
"""

import requests
import os
import json
import time
from typing import Optional, List, Dict

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
            "anthropic-version": "2023-06-01"  # Stable Claude API version
        }
        
        # Separate conversation histories for each AI
        self.grok_history: List[Dict] = []
        self.claude_history: List[Dict] = []
        self.conversation_history = []
        
        # Custom prompt settings
        self.grok_prompt = None
        self.claude_prompt = None
    
    def add_to_grok_history(self, role: str, content: str):
        """Add message to Grok's conversation history"""
        self.grok_history.append({
            "role": role,
            "content": content,
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S")
        })
    
    def add_to_claude_history(self, role: str, content: str):
        """Add message to Claude's conversation history"""
        self.claude_history.append({
            "role": role,
            "content": content,
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S")
        })
    
    def get_grok_messages(self) -> List[Dict]:
        """Get formatted messages for Grok API call"""
        # Use custom prompt if set, otherwise use default
        system_prompt = self.grok_prompt if self.grok_prompt else "You are Grok, an AI assistant created by xAI. Engage in thoughtful conversation, be witty when appropriate, and provide insightful responses. Keep responses concise but meaningful (2-3 paragraphs max). You are having a conversation with Claude, another AI assistant. Build upon previous exchanges and maintain context."
        
        messages = [
            {
                "role": "system",
                "content": system_prompt
            }
        ]
        
        # Add conversation history
        for entry in self.grok_history:
            messages.append({
                "role": entry["role"],
                "content": entry["content"]
            })
        
        return messages
    
    def get_claude_messages(self) -> List[Dict]:
        """Get formatted messages for Claude API call"""
        # Use custom prompt if set, otherwise use default
        system_prompt = self.claude_prompt if self.claude_prompt else "You are Claude, an AI assistant created by Anthropic. Respond thoughtfully to messages from another AI (Grok). Build upon their ideas, offer different perspectives, or ask engaging follow-up questions. Keep your response concise but insightful (2-3 paragraphs max). Maintain conversation context and flow."
        
        messages = [
            {
                "role": "user",
                "content": system_prompt
            }
        ]
        
        # Add conversation history
        for entry in self.claude_history:
            messages.append({
                "role": entry["role"],
                "content": entry["content"]
            })
        
        return messages
    
    def call_grok(self, message: str) -> Optional[str]:
        """Call xAI's Grok API with conversation history"""
        # Add the new message to Grok's history
        self.add_to_grok_history("user", message)
        
        # Get all messages including history
        messages = self.get_grok_messages()
        
        payload = {
            "messages": messages,
            "model": "grok-4-0709",
            "stream": False,
            "temperature": 0.7,
            "max_tokens": 500
        }
        
        try:
            response = requests.post(self.xai_url, headers=self.xai_headers, json=payload, timeout=30)
            response.raise_for_status()
            
            data = response.json()
            grok_response = data['choices'][0]['message']['content'].strip()
            
            # Add Grok's response to its history
            self.add_to_grok_history("assistant", grok_response)
            
            return grok_response
            
        except requests.exceptions.RequestException as e:
            print(f"❌ Grok API Error: {e}")
            return None
        except (KeyError, IndexError) as e:
            print(f"❌ Grok Response Format Error: {e}")
            return None
    
    def call_claude(self, message: str) -> Optional[str]:
        """Call Anthropic's Claude API with conversation history"""
        # Add the new message to Claude's history
        self.add_to_claude_history("user", message)
        
        # Get all messages including history
        messages = self.get_claude_messages()
        
        payload = {
            "model": "claude-sonnet-4-20250514",  # Correct Claude Sonnet 4 model format
            "max_tokens": 500,
            "temperature": 0.7,
            "messages": messages
        }
        
        try:
            response = requests.post(self.anthropic_url, headers=self.anthropic_headers, json=payload, timeout=30)
            response.raise_for_status()
            
            data = response.json()
            claude_response = data['content'][0]['text'].strip()
            
            # Add Claude's response to its history
            self.add_to_claude_history("assistant", claude_response)
            
            return claude_response
            
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
    
    def print_history_summary(self):
        """Print summary of conversation histories"""
        print(self.print_separator("CONVERSATION HISTORY SUMMARY"))
        print(f"🚀 Grok's conversation history: {len(self.grok_history)} messages")
        print(f"🧠 Claude's conversation history: {len(self.claude_history)} messages")
        
        if self.grok_history:
            print(f"\n🚀 Grok's last message: {self.grok_history[-1]['content'][:100]}...")
        if self.claude_history:
            print(f"\n🧠 Claude's last message: {self.claude_history[-1]['content'][:100]}...")
    
    def run_conversation(self, initial_topic: str, max_turns: int = 6):
        """Run the alternating conversation"""
        print(self.print_separator("AI CONVERSATION: GROK vs CLAUDE"))
        print(f"\n📝 Initial Topic: {initial_topic}")
        print(f"🔄 Conversation Turns: {max_turns}")
        
        # Record the prompts used for this conversation
        conversation_prompts = {
            "grok_prompt": self.grok_prompt,
            "claude_prompt": self.claude_prompt
        }
        
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
                        "message": response,
                        "prompts_used": conversation_prompts
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
                        "message": response,
                        "prompts_used": conversation_prompts
                    })
                else:
                    print(f"❌ Failed to get response from Claude on turn {turn}")
                    break
            
            turn += 1
            
            # Brief pause between calls to be respectful to APIs
            if i < max_turns - 1:
                time.sleep(2)
        
        self.print_summary()
        self.print_history_summary()
    
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
        """Save conversation to JSON file with separate histories"""
        conversation_data = {
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
            "total_turns": len(self.conversation_history),
            "conversation": self.conversation_history,
            "grok_history": self.grok_history,
            "claude_history": self.claude_history,
            "settings": {
                "grok_prompt": self.grok_prompt,
                "claude_prompt": self.claude_prompt
            }
        }
        
        try:
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(conversation_data, f, indent=2, ensure_ascii=False)
            print(f"💾 Conversation saved to {filename}")
        except Exception as e:
            print(f"❌ Failed to save conversation: {e}")
    
    def clear_histories(self):
        """Clear all conversation histories"""
        self.grok_history.clear()
        self.claude_history.clear()
        self.conversation_history.clear()
        print("🧹 All conversation histories cleared")
    
    def set_grok_prompt(self, prompt: str):
        """Set custom prompt for Grok"""
        self.grok_prompt = prompt
        print("🚀 Grok prompt updated")
    
    def set_claude_prompt(self, prompt: str):
        """Set custom prompt for Claude"""
        self.claude_prompt = prompt
        print("🧠 Claude prompt updated")
    
    def get_grok_prompt(self) -> str:
        """Get current Grok prompt"""
        return self.grok_prompt
    
    def get_claude_prompt(self) -> str:
        """Get current Claude prompt"""
        return self.claude_prompt
    
    def clear_prompts(self):
        """Clear custom prompts (reset to defaults)"""
        self.grok_prompt = None
        self.claude_prompt = None
        print("🧹 Custom prompts cleared (using defaults)")
    
    def clear_grok_prompt(self):
        """Clear Grok prompt (reset to default)"""
        self.grok_prompt = None
        print("🚀 Grok prompt cleared (using default)")
    
    def clear_claude_prompt(self):
        """Clear Claude prompt (reset to default)"""
        self.claude_prompt = None
        print("🧠 Claude prompt cleared (using default)")

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
        
        while True:
            print("\n🤖 AI Conversation Menu:")
            print("1. Start new conversation")
            print("2. View conversation histories")
            print("3. Clear all histories")
            print("4. Settings")
            print("5. Exit")
            
            choice = input("\nSelect option (1-5): ").strip()
            
            if choice == "1":
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
                
            elif choice == "2":
                print("\n📊 Conversation History Statistics:")
                print(f"🚀 Grok's history: {len(ai_convo.grok_history)} messages")
                print(f"🧠 Claude's history: {len(ai_convo.claude_history)} messages")
                print(f"📝 Total conversation turns: {len(ai_convo.conversation_history)}")
                
                if ai_convo.grok_history or ai_convo.claude_history:
                    print("\n📋 View detailed histories? (y/n)")
                    view_choice = input("> ").strip().lower()
                    
                    if view_choice in ['y', 'yes']:
                        if ai_convo.grok_history:
                            print("\n🚀 Grok's Conversation History:")
                            for i, entry in enumerate(ai_convo.grok_history, 1):
                                print(f"{i}. [{entry['role']}] {entry['content'][:100]}...")
                        
                        if ai_convo.claude_history:
                            print("\n🧠 Claude's Conversation History:")
                            for i, entry in enumerate(ai_convo.claude_history, 1):
                                print(f"{i}. [{entry['role']}] {entry['content'][:100]}...")
                        
                        # Show prompts used in conversation
                        if ai_convo.conversation_history:
                            print("\n📋 Conversation Turns with Prompts Used:")
                            for entry in ai_convo.conversation_history:
                                print(f"Turn {entry['turn']} - {entry['ai']}: {entry['message'][:80]}...")
                                if 'prompts_used' in entry:
                                    prompts = entry['prompts_used']
                                    if prompts['grok_prompt']:
                                        print(f"  🚀 Grok Prompt: {prompts['grok_prompt'][:60]}...")
                                    if prompts['claude_prompt']:
                                        print(f"  🧠 Claude Prompt: {prompts['claude_prompt'][:60]}...")
                                    print()
                else:
                    print("📭 No conversation history available.")
                
            elif choice == "3":
                print("\n⚠️ Are you sure you want to clear all conversation histories? (y/n)")
                clear_choice = input("> ").strip().lower()
                
                if clear_choice in ['y', 'yes']:
                    ai_convo.clear_histories()
                else:
                    print("❌ Operation cancelled.")
                
            elif choice == "4":
                print("\n🤖 Settings:")
                print("1. View current Grok prompt")
                print("2. View current Claude prompt")
                print("3. Set Grok prompt")
                print("4. Set Claude prompt")
                print("5. Clear Grok prompt")
                print("6. Clear Claude prompt")
                print("7. Clear all prompts")
                print("8. Back to main menu")
                
                settings_choice = input("\nSelect a setting (1-8): ").strip()
                
                if settings_choice == "1":
                    print(f"\n🚀 Current Grok prompt: {ai_convo.get_grok_prompt()}")
                elif settings_choice == "2":
                    print(f"\n🧠 Current Claude prompt: {ai_convo.get_claude_prompt()}")
                elif settings_choice == "3":
                    new_prompt = input("\nEnter new Grok prompt: ").strip()
                    ai_convo.set_grok_prompt(new_prompt)
                elif settings_choice == "4":
                    new_prompt = input("\nEnter new Claude prompt: ").strip()
                    ai_convo.set_claude_prompt(new_prompt)
                elif settings_choice == "5":
                    ai_convo.clear_grok_prompt()
                elif settings_choice == "6":
                    ai_convo.clear_claude_prompt()
                elif settings_choice == "7":
                    ai_convo.clear_prompts()
                elif settings_choice == "8":
                    pass # Back to main menu
                else:
                    print("❌ Invalid setting choice.")
                
            elif choice == "5":
                print("\n👋 Goodbye!")
                break
                
            else:
                print("❌ Invalid choice. Please select 1-5.")
        
    except KeyboardInterrupt:
        print("\n⚠️ Conversation interrupted by user")
    except Exception as e:
        print(f"❌ Unexpected error: {e}")

if __name__ == "__main__":
    main() 