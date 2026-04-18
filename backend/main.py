from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from groq import Groq
from dotenv import load_dotenv
import os

# Load your .env file so we can read GROQ_API_KEY
load_dotenv()

# Create the FastAPI app — same as const app = express() in Node
app = FastAPI()

# Allow React frontend (running on port 5173) to talk to this backend
# Same concept as cors() in Express
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Connect to Groq using your API key from .env
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

# This defines what shape of data our endpoints will accept
# Same as req.body in Express — but Python validates it automatically
class JobInput(BaseModel):
    job_description: str

class AnswerInput(BaseModel):
    question: str
    answer: str

# ─── ROUTE 1: Generate interview questions ───────────────────────────
# Same as app.post("/generate-questions", (req, res) => { ... }) in Express
@app.post("/generate-questions")
async def generate_questions(body: JobInput):

    # This is your first prompt! We tell the AI exactly what to do.
    prompt = f"""
    You are an expert technical interviewer.
    Based on the following job description, generate exactly 5 interview questions.
    Mix technical and behavioural questions relevant to the role.
    Return ONLY a numbered list of 5 questions, nothing else.

    Job Description:
    {body.job_description}
    """

    # Call Groq API — this is like fetch() but for AI
    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",   # free, fast model on Groq
        messages=[
            {"role": "user", "content": prompt}
        ],
        temperature=0.7,  # 0 = very focused, 1 = more creative
        max_tokens=500
    )

    # Extract the text from the response
    raw_text = response.choices[0].message.content

    # Split the numbered list into individual questions
    lines = raw_text.strip().split("\n")
    questions = [line.strip() for line in lines if line.strip()]

    return {"questions": questions}


# ─── ROUTE 2: Evaluate a user's answer ───────────────────────────────
@app.post("/evaluate-answer")
async def evaluate_answer(body: AnswerInput):

    prompt = f"""
    You are a senior technical interviewer giving honest, constructive feedback.

    Interview Question: {body.question}
    Candidate's Answer: {body.answer}

    Evaluate this answer and respond in this exact format:
    Score: X/10
    Strengths: (what they did well)
    Improvements: (what they should add or fix)
    Ideal Answer Hint: (a brief pointer toward the ideal answer)
    """

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "user", "content": prompt}
        ],
        temperature=0.5,
        max_tokens=400
    )

    feedback = response.choices[0].message.content
    return {"feedback": feedback}


# ─── Health check route (just to confirm server is running) ──────────
@app.get("/")
async def root():
    return {"message": "AI Interview Coach API is running!"}