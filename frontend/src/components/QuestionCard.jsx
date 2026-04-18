import { useState } from "react"

export default function QuestionCard({ question, index, onFeedback }) {
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!answer.trim()) return
    setLoading(true)
    try {
      const res = await fetch("http://localhost:8000/evaluate-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, answer })
      })
      const data = await res.json()
      onFeedback(index, data.feedback)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={styles.card}>
      <div style={styles.questionHeader}>
        <span style={styles.badge}>Q{index + 1}</span>
        <p style={styles.question}>{question}</p>
      </div>

      <textarea
        style={styles.textarea}
        placeholder="Type your answer here..."
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        rows={4}
      />

      <button
        style={{ ...styles.button, opacity: loading ? 0.7 : 1 }}
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "⏳ Evaluating..." : "📝 Submit Answer"}
      </button>
    </div>
  )
}

const styles = {
  card: {
    background: "#1a1a2e",
    borderRadius: "12px",
    padding: "24px",
    border: "1px solid #2d2d44",
    marginBottom: "16px",
  },
  questionHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    marginBottom: "16px",
  },
  badge: {
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    borderRadius: "8px",
    padding: "4px 10px",
    fontSize: "13px",
    fontWeight: "700",
    whiteSpace: "nowrap",
  },
  question: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#e2e8f0",
  },
  textarea: {
    width: "100%",
    background: "#0f0f1a",
    border: "1px solid #2d2d44",
    borderRadius: "8px",
    padding: "12px",
    color: "#e2e8f0",
    fontSize: "14px",
    marginBottom: "12px",
    lineHeight: "1.6",
    resize: "none",
    outline: "none",
  },
  button: {
    padding: "10px 20px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
  }
}