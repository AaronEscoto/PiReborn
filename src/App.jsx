import './App.css';

export default function Home() {
  return (
    <div className="site-wrapper">
      {/* Header */}
      <header className="site-header">
        <div className="container">
          <div className="logo">Aaronescoto.com</div>
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
          <p className="hero-subtitle">DevSecOps Engineer | Veteran</p>
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
          <h2 className="section-title">What You are seeing live on this site right now...</h2>
          <p className="section-text">
            <strong>PiReborn - A Live DevOps Proof-of-Concept:</strong> A fully operational DevOps proof-of-concept running on a bare-metal dual Raspberry Pi cluster, showcasing automated deployment, monitoring, and modern infrastructure best practices.
          </p>
          <h2 className="subsection-title">The Stack</h2>
          <ul className="section-list">
            <li><strong>Infrastructure:</strong> 2x Raspberry Pi 4, bare-metal</li>
            <li><strong>Kubernetes:</strong> k3s, lightweight and battle-tested</li>
            <li><strong>Networking & Ingress:</strong> Traefik with automatic TLS via Let's Encrypt</li>
            <li><strong>Frontend:</strong> React + Vite webapp</li>
            <li><strong>CI/CD:</strong> GitHub Actions deploy on commit</li>
            <li><strong>Monitoring:</strong> Prometheus & Grafana</li>
            <li><strong>Security:</strong> NetworkPolicies, RBAC, TLS by default</li>
            <li><strong>Alerting:</strong> Webhooks to external endpoints (Discord, Slack, etc.)</li>
            <li><strong>Infrastructure as Code:</strong> Terraform (optional, but included for completeness)</li>
          </ul>
          <div className="carousel-track">
            <span>🐍 Python</span>
            <span>🐳 Docker</span>
            <span>📦 Helm</span>
            <span>🍓 Raspberry Pi</span>
            <span>☸️ Kubernetes</span>
            <span>⚛️ React</span>
            <span>⚡ Vite</span>
            <span>🛠️ GitHub Actions</span>
            <span>📈 Prometheus</span>
            <span>📊 Grafana</span>
            <span>🌐 Terraform</span>

            {/* duplicate set for looping */}
            <span>🐍 Python</span>
            <span>🐳 Docker</span>
            <span>📦 Helm</span>
            <span>🍓 Raspberry Pi</span>
            <span>☸️ Kubernetes</span>
            <span>⚛️ React</span>
            <span>⚡ Vite</span>
            <span>🛠️ GitHub Actions</span>
            <span>📈 Prometheus</span>
            <span>📊 Grafana</span>
            <span>🌐 Terraform</span>
          </div>
          <h2 className="subsection-title">The Why</h2>
          <p className="section-text">
            Because saying <strong>"I know DevOps"</strong> is easy.<br />
            <strong>Showing</strong> it—live, automated, and running on your own hardware—means something.
          </p>

          <p className="section-text">
            <strong>PiReborn is alive.</strong><br />
            <strong>And it’s just getting started.</strong>
          </p>

          <p className="section-text">
            PiReborn isn’t just a tech stack — it’s a showcase of real-world DevOps practices:
          </p>

          <ul className="section-list">
            <li><strong>GitOps-style deployment pipelines</strong></li>
            <li><strong>Automated certificate management</strong></li>
            <li><strong>Declarative infrastructure and manifests</strong></li>
            <li><strong>Observability baked in</strong></li>
            <li><strong>Low-resource HA experimentation</strong></li>
          </ul>

          <blockquote className="quote">
            “The Pis, silent and unwavering, tamed the k3s cluster… and in doing so, tamed our hearts.”<br />
            — an ancient DevOps proverb, probably.
          </blockquote>

        </div>
      </section>

      {/* TR6K Section */}
      <section id="tr6k" className="section dark">
        <div className="container">
          <h1 className="section-title">UNDER CONSTRUCTION</h1>
          <h2 className="section-title">Enter the Realm of TR6K</h2>
          <p className="quote">“Ashbringer booted, so that others may boot.” — Prime Directive</p>
          <div className="section-list">
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
