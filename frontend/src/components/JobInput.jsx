import { useState } from "react"

export default function JobInput({ onQuestionsGenerated, loading, setLoading }) {
  const [jobDesc, setJobDesc] = useState("")

  const handleGenerate = async () => {
    if (!jobDesc.trim()) return
    setLoading(true)
    try {
      const res = await fetch("http://localhost:8000/generate-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ job_description: jobDesc })
      })
      const data = await res.json()
      onQuestionsGenerated(data.questions)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎯 AI Interview Coach</h1>
      <p style={styles.subtitle}>
        Paste a job description → Get AI-generated questions → Get scored feedback
      </p>

      <textarea
        style={styles.textarea}
        placeholder="Paste the job description here..."
        value={jobDesc}
        onChange={e => setJobDesc(e.target.value)}
        rows={8}
      />

      <button
        style={{ ...styles.button, opacity: loading ? 0.7 : 1 }}
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? "⏳ Generating questions..." : "✨ Generate Interview Questions"}
      </button>
    </div>
  )
}

const styles = {
  container: {
    background: "#1a1a2e",
    borderRadius: "16px",
    padding: "32px",
    border: "1px solid #2d2d44",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "8px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    color: "#94a3b8",
    marginBottom: "24px",
    fontSize: "14px",
  },
  textarea: {
    width: "100%",
    background: "#0f0f1a",
    border: "1px solid #2d2d44",
    borderRadius: "10px",
    padding: "16px",
    color: "#e2e8f0",
    fontSize: "14px",
    marginBottom: "16px",
    lineHeight: "1.6",
  },
  button: {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: "600",
    transition: "opacity 0.2s",
  }
}