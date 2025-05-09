# Innovation Club Member Poll

This is a static voting site for Innovation Club hosted on Netlify.

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
