# Innovation Club Member Poll

This is a static voting site for Innovation Club hosted on Netlify.
[![Netlify Status](https://api.netlify.com/api/v1/badges/81a8d94f-7eae-4e47-bea4-5f535fc0f9ac/deploy-status)](https://app.netlify.com/sites/amazing-douhua-d99576/deploys)

## Features
- Deep blue + neon cyan theme
- JSON-controlled form (question + options + activity toggle)
- Redirects to `closed.html` if `questions.json.active` is false
- Form submits using Formspree
- Watermark glow logo from `logo.png`
- Pages: `index.html`, `thankyou.html`, `closed.html`

## JSON Logic (questions.json)
```json
{
  "active": true,
  "question": "Who do you vote for as club president?",
  "options": ["Alice", "Bob", "Charlie"]
}
```
