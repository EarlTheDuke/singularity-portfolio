#!/usr/bin/env python3
"""
Debug Script for xAI API Turn 3 Issues
Tests the exact scenario that fails in the web interface
"""

import requests
import os
import json
import time
from datetime import datetime

def test_xai_api_turn3():
    """Test xAI API with realistic Turn 3 scenario"""
    
    # Check for API key
    xai_api_key = os.getenv('XAI_API_KEY')
    if not xai_api_key:
        print("❌ XAI_API_KEY environment variable not set")
        print("   Set it with: export XAI_API_KEY='your-key-here'")
        return
    
    print("🚀 Testing xAI API Turn 3 Scenario")
    print("=" * 50)
    
    # Simulate typical conversation progression
    test_scenarios = [
        # Turn 1: Short initial topic (usually works)
        {
            "turn": 1,
            "message": "What are the most significant implications of artificial intelligence for human society?",
            "description": "Initial topic (short)"
        },
        
        # Turn 3: Simulated Claude response (the problematic case)
        {
            "turn": 3,
            "message": """The implications of AI for human society are profound and multifaceted. We're witnessing transformative changes across employment, with automation potentially displacing traditional jobs while creating new roles requiring human-AI collaboration. In healthcare, AI is revolutionizing diagnosis and treatment personalization, though raising questions about data privacy and algorithmic bias.

Perhaps most critically, we must address the governance challenge - ensuring AI systems remain aligned with human values as they become more autonomous. The next decade will likely see either unprecedented prosperity through human-AI synergy, or significant social disruption if we fail to manage this transition thoughtfully.

What aspects of AI governance do you think are most urgently needed to ensure positive outcomes?""",
            "description": "Realistic Claude response (long, complex)"
        },
        
        # Edge case: Very long message
        {
            "turn": 5,
            "message": "AI governance is indeed critical. " * 100,  # Repetitive long message
            "description": "Very long message (potential token limit issue)"
        }
    ]
    
    headers = {
        "Authorization": f"Bearer {xai_api_key}",
        "Content-Type": "application/json"
    }
    
    url = "https://api.x.ai/v1/chat/completions"
    
    for scenario in test_scenarios:
        print(f"\n🧪 Testing Turn {scenario['turn']}: {scenario['description']}")
        print(f"📝 Message length: {len(scenario['message'])} characters")
        print(f"⏰ Timestamp: {datetime.now().isoformat()}")
        
        payload = {
            "messages": [
                {
                    "role": "system",
                    "content": "You are Grok, an AI assistant created by xAI. Engage in thoughtful conversation, be witty when appropriate, and provide insightful responses. Keep responses concise but meaningful (2-3 paragraphs max)."
                },
                {
                    "role": "user",
                    "content": scenario['message']
                }
            ],
            "model": "grok-4-0709",
            "stream": False,
            "temperature": 0.7,
            "max_tokens": 500
        }
        
        try:
            start_time = time.time()
            print("   🔄 Making API request...")
            
            response = requests.post(url, headers=headers, json=payload, timeout=30)
            request_time = time.time() - start_time
            
            print(f"   ⚡ Response time: {request_time:.2f}s")
            print(f"   📊 HTTP Status: {response.status_code}")
            
            if response.ok:
                data = response.json()
                content = data.get('choices', [{}])[0].get('message', {}).get('content', '')
                print(f"   ✅ Success! Response length: {len(content)} characters")
                print(f"   📄 Response preview: {content[:150]}...")
                
                # Check for usage information
                if 'usage' in data:
                    usage = data['usage']
                    print(f"   🔢 Token usage: {usage.get('prompt_tokens', 0)} prompt + {usage.get('completion_tokens', 0)} completion = {usage.get('total_tokens', 0)} total")
                
            else:
                print(f"   ❌ FAILED with status {response.status_code}")
                print(f"   📄 Response headers: {dict(response.headers)}")
                
                try:
                    error_data = response.json()
                    print(f"   🔍 Error details: {json.dumps(error_data, indent=2)}")
                except:
                    print(f"   🔍 Raw error response: {response.text}")
                
                # This is the key scenario - log everything about Turn 3 failures
                if scenario['turn'] == 3:
                    print("\n🚨 TURN 3 FAILURE ANALYSIS:")
                    print(f"   - Status Code: {response.status_code}")
                    print(f"   - Request Time: {request_time:.2f}s")
                    print(f"   - Message Length: {len(scenario['message'])}")
                    print(f"   - Estimated Tokens: ~{len(scenario['message']) // 4}")
                    print(f"   - Server Response: {response.text[:500]}")
                    
                    # Save failure details
                    failure_log = {
                        "timestamp": datetime.now().isoformat(),
                        "turn": scenario['turn'],
                        "status_code": response.status_code,
                        "request_time": request_time,
                        "message_length": len(scenario['message']),
                        "estimated_tokens": len(scenario['message']) // 4,
                        "response_text": response.text,
                        "headers": dict(response.headers),
                        "request_payload": payload
                    }
                    
                    with open('turn3_failure_log.json', 'w') as f:
                        json.dump(failure_log, f, indent=2)
                    print(f"   💾 Failure details saved to turn3_failure_log.json")
        
        except requests.exceptions.Timeout:
            print(f"   ⏰ TIMEOUT after 30 seconds")
        except requests.exceptions.RequestException as e:
            print(f"   🌐 NETWORK ERROR: {e}")
        except Exception as e:
            print(f"   💥 UNEXPECTED ERROR: {e}")
        
        # Wait between tests to be respectful to API
        if scenario != test_scenarios[-1]:
            print("   ⏳ Waiting 3 seconds before next test...")
            time.sleep(3)
    
    print("\n" + "=" * 50)
    print("🔍 DEBUGGING RECOMMENDATIONS:")
    print("1. Check Netlify function logs after deploying the improved proxy")
    print("2. Verify your xAI API key has sufficient credits/limits")
    print("3. Test with shorter messages if Turn 3 consistently fails")
    print("4. Contact xAI support if 500 errors persist with API key details")
    print("\n✨ Test complete!")

if __name__ == "__main__":
    test_xai_api_turn3() 