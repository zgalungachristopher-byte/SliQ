import './App.css'

export default function App() {
  return (
    <div className="page">
      <nav className="nav">
        <div className="logo">SliQ <span>AI</span></div>
        <button className="login-btn">Login</button>
      </nav>

      <section className="hero">
        <div className="badge">✦ AI-Powered Study Tool</div>
        <h1>Drop Your Notes.<br />We Handle The Rest.</h1>
        <p>Upload your lecture notes. Get smart summaries, flashcards, and quizzes — instantly.</p>
        <div className="hero-buttons">
          <button className="cta-btn">Get Early Access</button>
          <button className="secondary-btn">See How It Works</button>
        </div>
      </section>

      <section className="features">
        <h2>Everything You Need To Study Smarter</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📄</div>
            <h3>PDF & Audio Upload</h3>
            <p>Drop any lecture PDF or audio recording. SliQ AI breaks it down instantly.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>Smart Notes</h3>
            <p>Get clean, structured summaries of any topic — no matter the subject.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎴</div>
            <h3>Flashcards & Quizzes</h3>
            <p>One click turns your notes into flashcards and 5-question AI quizzes.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>WhatsApp Delivery</h3>
            <p>Schedule your summaries to drop on your WhatsApp at any time you choose.</p>
          </div>
        </div>
      </section>

      <section className="pricing">
        <h2>Simple Pricing</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Free</h3>
            <div className="price">$0<span>/mo</span></div>
            <ul>
              <li>3 PDFs per month</li>
              <li>20 chat messages</li>
              <li>Basic notes</li>
              <li>Pomodoro timer</li>
              <li>Focus audio</li>
            </ul>
            <button className="cta-btn">Get Started</button>
          </div>
          <div className="pricing-card featured">
            <div className="popular-badge">Most Popular</div>
            <h3>Pro</h3>
            <div className="price">$4.99<span>/mo</span></div>
            <ul>
              <li>20 PDFs per month</li>
              <li>Unlimited chat</li>
              <li>Premium notes</li>
              <li>Flashcards & quizzes</li>
              <li>5 WhatsApp deliveries</li>
            </ul>
            <button className="cta-btn">Get Pro</button>
          </div>
          <div className="pricing-card">
            <h3>Advanced</h3>
            <div className="price">$7.99<span>/mo</span></div>
            <ul>
              <li>Unlimited uploads</li>
              <li>Deep-dive analysis</li>
              <li>Unlimited WhatsApp</li>
              <li>Direct vault querying</li>
              <li>Priority AI engine</li>
            </ul>
            <button className="cta-btn">Go Advanced</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="logo">SliQ <span>AI</span></div>
        <p>© 2026 SliQ AI. All rights reserved.</p>
      </footer>
    </div>
  )
}
