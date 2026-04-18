export default function LandingPage({ onStart }) {
  return (
    <div style={styles.wrapper}>

      {/* Navbar */}
      <nav style={styles.nav}>
        <span style={styles.logo}>🎯 InterviewAI</span>
        <button style={styles.navCta} onClick={onStart}>Start Free →</button>
      </nav>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.badge}>✨ Powered by Groq + LLaMA 3</div>
        <h1 style={styles.heroTitle}>
          Ace your next<br />
          <span style={styles.gradient}>tech interview</span>
        </h1>
        <p style={styles.heroSub}>
          Paste any job description → get AI-generated interview questions
          tailored to the role → submit your answers → get instant scored feedback.
          Practice smarter, not harder.
        </p>
        <div style={styles.heroBtns}>
          <button style={styles.primaryBtn} onClick={onStart}>
            🚀 Start Practicing Free
          </button>
          <a href="https://github.com" style={styles.secondaryBtn}>
            ⭐ View on GitHub
          </a>
        </div>

        {/* Stats row */}
        <div style={styles.statsRow}>
          {[
            { number: "5", label: "Questions per session" },
            { number: "AI", label: "Powered feedback" },
            { number: "Free", label: "No signup needed" },
          ].map((s, i) => (
            <div key={i} style={styles.statBox}>
              <span style={styles.statNum}>{s.number}</span>
              <span style={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>How it works</h2>
        <div style={styles.stepsRow}>
          {[
            { icon: "📋", step: "01", title: "Paste job description", desc: "Copy any JD from LinkedIn, Naukri or company sites and paste it in." },
            { icon: "🤖", step: "02", title: "AI generates questions", desc: "Get 5 role-specific interview questions mixing technical and behavioural." },
            { icon: "📝", step: "03", title: "Answer and get scored", desc: "Type your answers and receive instant AI feedback with a score out of 10." },
          ].map((s, i) => (
            <div key={i} style={styles.stepCard}>
              <div style={styles.stepIcon}>{s.icon}</div>
              <div style={styles.stepNum}>{s.step}</div>
              <h3 style={styles.stepTitle}>{s.title}</h3>
              <p style={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why InterviewAI?</h2>
        <div style={styles.featuresGrid}>
          {[
            { icon: "⚡", title: "Instant feedback", desc: "Get scored answers in seconds, not days." },
            { icon: "🎯", title: "Role-specific", desc: "Questions tailored to the exact job you're applying for." },
            { icon: "🔄", title: "Practice unlimited", desc: "Try different JDs as many times as you want." },
            { icon: "📊", title: "Track progress", desc: "See your score improve with every session." },
            { icon: "🆓", title: "Completely free", desc: "No signup, no credit card, no limits." },
            { icon: "🧠", title: "LLM powered", desc: "Built on Groq + LLaMA 3 for fast, intelligent responses." },
          ].map((f, i) => (
            <div key={i} style={styles.featureCard}>
              <span style={styles.featureIcon}>{f.icon}</span>
              <h4 style={styles.featureTitle}>{f.title}</h4>
              <p style={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to land your next job?</h2>
        <p style={styles.ctaSub}>Start practicing with real interview questions in under 30 seconds.</p>
        <button style={styles.primaryBtn} onClick={onStart}>
          🚀 Start Practicing Now — It's Free
        </button>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <span>Built with React + FastAPI + Groq AI</span>
        <span>Made for learning AI development 🤖</span>
      </footer>

    </div>
  )
}

const styles = {
  wrapper: { minHeight: "100vh", background: "#0f0f1a", color: "#e2e8f0" },
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: "1px solid #1a1a2e" },
  logo: { fontSize: "20px", fontWeight: "700", background: "linear-gradient(135deg, #667eea, #764ba2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  navCta: { padding: "8px 20px", background: "linear-gradient(135deg, #667eea, #764ba2)", color: "white", borderRadius: "8px", fontSize: "14px", fontWeight: "600", border: "none", cursor: "pointer" },
  hero: { textAlign: "center", padding: "80px 20px 60px", maxWidth: "700px", margin: "0 auto" },
  badge: { display: "inline-block", background: "#1a1a2e", border: "1px solid #2d2d44", borderRadius: "99px", padding: "6px 16px", fontSize: "13px", color: "#94a3b8", marginBottom: "24px" },
  heroTitle: { fontSize: "52px", fontWeight: "800", lineHeight: "1.1", marginBottom: "20px", color: "#e2e8f0" },
  gradient: { background: "linear-gradient(135deg, #667eea, #764ba2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  heroSub: { fontSize: "16px", color: "#94a3b8", lineHeight: "1.7", marginBottom: "36px", maxWidth: "520px", margin: "0 auto 36px" },
  heroBtns: { display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" },
  primaryBtn: { padding: "14px 28px", background: "linear-gradient(135deg, #667eea, #764ba2)", color: "white", borderRadius: "10px", fontSize: "15px", fontWeight: "600", border: "none", cursor: "pointer" },
  secondaryBtn: { padding: "14px 28px", background: "transparent", border: "1px solid #2d2d44", color: "#94a3b8", borderRadius: "10px", fontSize: "15px", fontWeight: "600", textDecoration: "none", display: "inline-block" },
  statsRow: { display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" },
  statBox: { display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" },
  statNum: { fontSize: "28px", fontWeight: "800", background: "linear-gradient(135deg, #667eea, #764ba2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  statLabel: { fontSize: "13px", color: "#94a3b8" },
  section: { maxWidth: "900px", margin: "0 auto", padding: "60px 20px" },
  sectionTitle: { fontSize: "28px", fontWeight: "700", textAlign: "center", marginBottom: "40px", color: "#e2e8f0" },
  stepsRow: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" },
  stepCard: { background: "#1a1a2e", borderRadius: "14px", padding: "28px", border: "1px solid #2d2d44", textAlign: "center" },
  stepIcon: { fontSize: "32px", marginBottom: "12px" },
  stepNum: { fontSize: "12px", color: "#667eea", fontWeight: "700", marginBottom: "8px", letterSpacing: "2px" },
  stepTitle: { fontSize: "16px", fontWeight: "600", marginBottom: "8px", color: "#e2e8f0" },
  stepDesc: { fontSize: "13px", color: "#94a3b8", lineHeight: "1.6" },
  featuresGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" },
  featureCard: { background: "#1a1a2e", borderRadius: "12px", padding: "20px", border: "1px solid #2d2d44" },
  featureIcon: { fontSize: "24px", marginBottom: "10px", display: "block" },
  featureTitle: { fontSize: "15px", fontWeight: "600", marginBottom: "6px", color: "#e2e8f0" },
  featureDesc: { fontSize: "13px", color: "#94a3b8", lineHeight: "1.5" },
  ctaSection: { textAlign: "center", padding: "60px 20px", background: "#1a1a2e", borderTop: "1px solid #2d2d44", borderBottom: "1px solid #2d2d44" },
  ctaTitle: { fontSize: "32px", fontWeight: "700", marginBottom: "12px", color: "#e2e8f0" },
  ctaSub: { color: "#94a3b8", marginBottom: "28px", fontSize: "15px" },
  footer: { display: "flex", justifyContent: "space-between", padding: "24px 40px", color: "#4a4a6a", fontSize: "13px", flexWrap: "wrap", gap: "8px" }
}