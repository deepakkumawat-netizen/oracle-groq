const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Groq client (FREE API)
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// ── Health Check ──
app.get("/", (req, res) => {
  res.json({
    status: "ORACLE Backend Running ✅",
    engine: "Groq (Free) — llama-3.3-70b-versatile",
    version: "1.0.0",
  });
});

// ── Chat Endpoint ──
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "messages array is required" });
  }

  if (!process.env.GROQ_API_KEY) {
    return res.status(500).json({ error: "GROQ_API_KEY not set in .env file" });
  }

  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile", // Best free model on Groq
      max_tokens: 300,
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content: `You are ORACLE, an intelligent and articulate voice assistant.
You answer any question thoughtfully, clearly, and concisely.
Since your responses will be read aloud, write in a conversational tone.
Never use bullet points, markdown, asterisks, or special characters.
Keep answers under 4 sentences unless the topic genuinely needs more detail.`,
        },
        ...messages,
      ],
    });

    const reply = response.choices[0]?.message?.content || "I could not generate a response.";
    res.json({ reply });

  } catch (err) {
    console.error("Groq API error:", err.message);
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`\n🔮 ORACLE Backend (Groq FREE) running at http://localhost:${PORT}`);
  console.log(`   Model: llama-3.3-70b-versatile`);
  console.log(`   Free limit: 14,400 requests/day\n`);
});
