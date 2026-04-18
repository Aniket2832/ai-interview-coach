# 🎯 AI Interview Coach

An AI-powered interview preparation tool built with React, FastAPI, and Groq LLaMA 3.

## What it does
- Paste any job description → AI generates 5 role-specific interview questions
- Answer each question → AI scores your answer out of 10
- Get detailed feedback: strengths, improvements, and ideal answer hints

## Tech Stack
- **Frontend:** React + Vite
- **Backend:** Python + FastAPI
- **AI:** Groq API (LLaMA 3.3 70B)
- **Styling:** Custom CSS with dark theme

## Getting Started

### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install fastapi uvicorn groq python-dotenv
```
Create a `.env` file in `/backend`:
```
GROQ_API_KEY=your_groq_api_key
```
```bash
uvicorn main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`

## Demo
![AI Interview Coach](https://via.placeholder.com/800x400?text=AI+Interview+Coach+Demo)