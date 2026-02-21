# 🇮🇳 Indian Languages API

A simple REST API providing information about India's 22 scheduled languages.

## 🔗 Live API
https://indian-languages-api.onrender.com/api/languages

## 📌 Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/languages` | Get all 22 languages |
| GET | `/api/languages/:id` | Get language by ID |
| GET | `/api/languages?search=hindi` | Search by name |
| GET | `/api/languages?sort=asc` | Sort alphabetically |

## 📦 Sample Response
```json
{
  "success": true,
  "count": 22,
  "data": [
    {
      "id": 1,
      "name": "Hindi",
      "script": "Devanagari",
      "region": "North India",
      "speakers_million": 600
    }
  ]
}
```
