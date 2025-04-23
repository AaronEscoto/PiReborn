import './App.css';

export default function Home() {
  return (
    <div className="site-wrapper">
      {/* Header */}
      <header className="site-header">
        <div className="container">
          <div className="logo">aaronescoto.com</div>
          <nav className="main-nav">
            <a href="#pireborn">PiReborn</a>
            <a href="#tr6k">TR6K</a>
            <a href="/resume.pdf">Resume</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Aaron Escoto</h1>
          <p className="hero-subtitle">DevOps Engineer · SRE · Builder of Proofs and Projects</p>
          <div className="hero-links">
            <a href="https://github.com/aaronescoto" target="_blank">🐙 GitHub</a>
            <a href="https://linkedin.com/in/aaronescoto" target="_blank">💼 LinkedIn</a>
            <a href="/resume.pdf" target="_blank">📄 Resume</a>
          </div>
        </div>
      </section>

      {/* PiReborn Section */}
      <section id="pireborn" className="section light">
        <div className="container">
          <h2 className="section-title">PiReborn</h2>
          <p className="section-text">
            A bare-metal dual Raspberry Pi cluster running a full DevOps pipeline with Kubernetes (k3s), Helm, Traefik, Let's Encrypt, CI/CD via GitHub Actions, and monitoring via Prometheus & Grafana.
          </p>
          <div className="tech-scroll">
            <span>🐍 Python</span>
            <span>🐳 Docker</span>
            <span>⚙️ GitHub Actions</span>
            <span>📦 Helm</span>
            <span>🧭 Traefik</span>
            <span>📊 Grafana</span>
            <span>📈 Prometheus</span>
          </div>
        </div>
      </section>

      {/* TR6K Section */}
      <section id="tr6k" className="section dark">
        <div className="container">
          <h2 className="section-title">Enter the Realm of TR6K</h2>
          <p className="quote">“Ashbringer booted, so that others may boot.” — Prime Directive</p>
          <div className="section-list">
            <p>🗡️ Custom Ventoy USB theme</p>
            <p>📜 Sacred README.txt with mythos</p>
            <p>🔥 Dark phoenix visuals and boot sound</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Aaron Escoto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
