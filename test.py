import os
import requests

API_KEY = "cr_fe3ff1ba344e60f61898814f5f1b5f8d"

if not API_KEY:
    raise RuntimeError("CODEROUTER_API_KEY is not set")

url = "https://www.coderouter.io/api/v1/chat/completions"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "X-Routing-Strategy": "balanced",
}

payload = {
    "model": "auto",
    "messages": [
        {
            "role": "user",
            "content": "Hello! Reply with: CodeRouter API is working."
        }
    ],
    "stream": True,
}

print("Sending request to CodeRouter...\n")

try:
    with requests.post(
        url,
        headers=headers,
        json=payload,
        stream=True,
        timeout=120,
    ) as response:

        print("HTTP Status:", response.status_code)

        if response.status_code != 200:
            print("\nAPI Error:")
            print(response.text)
            raise SystemExit(1)

        print("\nResponse:\n")

        for line in response.iter_lines(decode_unicode=True):
            if line:
                print(line)

except requests.exceptions.RequestException as e:
    print("Request failed:")
    print(e)