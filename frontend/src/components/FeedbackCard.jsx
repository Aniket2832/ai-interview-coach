export default function FeedbackCard({ feedback, index }) {
  const lines = feedback.split("\n").filter(l => l.trim())

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>💬 Feedback for Q{index + 1}</h3>
      {lines.map((line, i) => {
        const isLabel = line.includes(":") &&
          ["Score", "Strengths", "Improvements", "Ideal Answer Hint"]
            .some(label => line.startsWith(label))

        return (
          <p key={i} style={isLabel ? styles.label : styles.text}>
            {line}
          </p>
        )
      })}
    </div>
  )
}

const styles = {
  card: {
    background: "#0f2027",
    borderRadius: "12px",
    padding: "24px",
    border: "1px solid #1a4a3a",
    marginBottom: "16px",
    borderLeft: "4px solid #10b981",
  },
  title: {
    color: "#10b981",
    marginBottom: "16px",
    fontSize: "16px",
  },
  label: {
    color: "#10b981",
    fontWeight: "600",
    marginBottom: "6px",
    fontSize: "14px",
  },
  text: {
    color: "#94a3b8",
    marginBottom: "8px",
    fontSize: "14px",
    lineHeight: "1.6",
    paddingLeft: "12px",
  }
}