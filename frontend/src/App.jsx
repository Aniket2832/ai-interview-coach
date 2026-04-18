import { useState } from "react"
import JobInput from "./components/JobInput"
import QuestionCard from "./components/QuestionCard"
import FeedbackCard from "./components/FeedbackCard"
import LandingPage from "./components/LandingPage"

export default function App() {
  const [page, setPage] = useState("landing")
  const [questions, setQuestions] = useState([])
  const [feedbacks, setFeedbacks] = useState({})
  const [loading, setLoading] = useState(false)

  const handleFeedback = (index, feedback) => {
    setFeedbacks(prev => ({ ...prev, [index]: feedback }))
  }

  const handleReset = () => {
    setQuestions([])
    setFeedbacks({})
    setPage("landing")
  }

  const answeredCount = Object.keys(feedbacks).length
  const allDone = questions.length > 0 && answeredCount === questions.length

  if (page === "landing") {
    return <LandingPage onStart={() => setPage("app")} />
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>

        {/* Top nav */}
        <div style={styles.nav}>
          <span style={styles.navLogo}>🎯 InterviewAI</span>
          <button style={styles.navBtn} onClick={handleReset}>← Back to Home</button>
        </div>

        {/* Progress bar */}
        {questions.length > 0 && (
          <div style={styles.progressWrap}>
            <div style={styles.progressInfo}>
              <span style={styles.progressText}>
                Progress: {answeredCount}/{questions.length} answered
              </span>
              <span style={styles.progressText}>{Math.round((answeredCount/questions.length)*100)}%</span>
            </div>
            <div style={styles.progressBar}>
              <div style={{
                ...styles.progressFill,
                width: `${(answeredCount/questions.length)*100}%`
              }}/>
            </div>
          </div>
        )}

        <JobInput
          onQuestionsGenerated={setQuestions}
          loading={loading}
          setLoading={setLoading}
        />

        {questions.length > 0 && (
          <div>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>📋 Your Interview Questions</h2>
              <button style={styles.resetBtn} onClick={handleReset}>🔄 Start Over</button>
            </div>

            {questions.map((q, i) => (
              <div key={i}>
                <QuestionCard question={q} index={i} onFeedback={handleFeedback} />
                {feedbacks[i] && (
                  <FeedbackCard feedback={feedbacks[i]} index={i} />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Summary card when all done */}
        {allDone && (
          <div style={styles.summaryCard}>
            <h2 style={styles.summaryTitle}>🏆 Session Complete!</h2>
            <p style={styles.summaryText}>
              You answered all {questions.length} questions. Review your feedback above,
              then practice again with a different job description!
            </p>
            <button style={styles.summaryBtn} onClick={handleReset}>
              🔄 Practice Again
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

const styles = {
  wrapper: { minHeight: "100vh", padding: "20px", background: "#0f0f1a" },
  container: { maxWidth: "780px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" },
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" },
  navLogo: { fontSize: "18px", fontWeight: "700", background: "linear-gradient(135deg, #667eea, #764ba2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  navBtn: { background: "transparent", border: "1px solid #2d2d44", color: "#94a3b8", padding: "6px 14px", borderRadius: "8px", fontSize: "13px", cursor: "pointer" },
  progressWrap: { background: "#1a1a2e", borderRadius: "12px", padding: "16px", border: "1px solid #2d2d44" },
  progressInfo: { display: "flex", justifyContent: "space-between", marginBottom: "8px" },
  progressText: { fontSize: "13px", color: "#94a3b8" },
  progressBar: { height: "6px", background: "#2d2d44", borderRadius: "99px", overflow: "hidden" },
  progressFill: { height: "100%", background: "linear-gradient(135deg, #667eea, #764ba2)", borderRadius: "99px", transition: "width 0.4s ease" },
  sectionHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" },
  sectionTitle: { fontSize: "18px", fontWeight: "600", color: "#e2e8f0" },
  resetBtn: { padding: "6px 14px", background: "transparent", border: "1px solid #2d2d44", color: "#94a3b8", borderRadius: "8px", fontSize: "13px", cursor: "pointer" },
  summaryCard: { background: "linear-gradient(135deg, #1a1a2e, #0f2027)", borderRadius: "16px", padding: "32px", border: "1px solid #10b981", textAlign: "center" },
  summaryTitle: { fontSize: "24px", marginBottom: "12px", color: "#10b981" },
  summaryText: { color: "#94a3b8", fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" },
  summaryBtn: { padding: "12px 28px", background: "linear-gradient(135deg, #667eea, #764ba2)", color: "white", borderRadius: "10px", fontSize: "15px", fontWeight: "600", border: "none", cursor: "pointer" }
}