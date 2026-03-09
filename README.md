# 🔮 ORACLE — Voice Agent (Groq FREE API)

## Project Structure
```
oracle-groq/
├── backend/
│   ├── server.js       ← Express API server (uses Groq)
│   ├── package.json    ← Dependencies
│   └── .env            ← Your FREE Groq API key
└── frontend/
    └── index.html      ← Voice Agent UI
```

---

## 🆓 Get Your FREE Groq API Key (2 minutes)

1. Go to 👉 https://console.groq.com
2. Click **Sign Up** (free, no credit card needed)
3. Go to **API Keys** → click **Create API Key**
4. Copy the key (starts with `gsk_...`)
5. Open `backend/.env` and paste it:
   ```
   GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxx
   ```

---

## ⚙️ Setup & Run

### Step 1 — Install dependencies
```bash
cd backend
npm install
```

### Step 2 — Start backend
```bash
npm start
```
You'll see:
```
🔮 ORACLE Backend (Groq FREE) running at http://localhost:3001
   Model: llama-3.3-70b-versatile
   Free limit: 14,400 requests/day
```

### Step 3 — Open frontend
Open `frontend/index.html` in **Google Chrome** or **Microsoft Edge**

✅ Green pill = **Backend Online & Groq Ready!**

---

## 🎙️ How to Use
1. Click the **glowing orb**
2. Allow microphone when browser asks
3. **Speak your question**
4. Oracle thinks → speaks the answer aloud instantly ⚡

---

## 🆓 Groq Free Limits
| Plan | Requests/min | Requests/day | Cost |
|------|-------------|--------------|------|
| Free | 30 | 14,400 | $0 |

## 🔌 API
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Health check |
| POST | /api/chat | Send message → get AI reply |
