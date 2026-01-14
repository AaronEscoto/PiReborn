import './App.css';
import teaserVideo from '../assets/teaser_tr6k.mp4';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TR6K from './TR6K';

function AppContent() {
  return (
    <div className="site-wrapper">

      {/* Hero Section */}
      <section className="hero-section snap-section">
        <div className="container">
          <h1 className="hero-title">Aaron Escoto</h1>
          <p className="hero-subtitle-loc">
            <i className="fas fa-map-marker-alt icon-white"></i>
            Silicon Valley, CA
          </p>
          <p className="hero-subtitle">
            <i className="fas fa-code icon-white"></i>
            DevSecOps | Veteran, US Army
          </p>
          <div className="social-icons">
            <a href="https://github.com/aaronescoto" className="github" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" alt="GitHub" />
            </a>
            <a href="https://linkedin.com/in/aaronescoto" className="linkedin" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="/resume.pdf" className="resume" target="_blank" rel="noopener noreferrer">
              <img src="/res.svg" alt="Resume" />
            </a>
          </div>
        </div>
      </section>

      <section className="descend">
        <a href="#pireborn" className="scroll-down">
          <img src="/button_cleaned.svg" alt="Scroll Down" />
        </a>
      </section>

      {/* PiReborn Section */}
      <section id="pireborn" className="section light snap-section">
        <div className="container">
          <h1 className="section-title center">This website is hosted on...</h1>
          <p className="section-text">
            <strong>PiReborn – A Live DevOps Proof-of-Concept: </strong>
            A fully operational pipeline running on a modest bare-metal 2xRaspberry Pi cluster, showcasing automated deployment, monitoring, and modern infrastructure best practices.
          </p>
          <h2 className="subsection-title">The Stack</h2>
          <div className="stack-wrapper">
            <ul className="stack-list">
              <li><strong>Infrastructure:</strong> 2x Raspberry Pi 4, bare-metal</li>
              <li><strong>Kubernetes:</strong> k3s, lightweight and battle-tested</li>
              <li><strong>Networking & Ingress:</strong> Traefik with automatic TLS via Let's Encrypt</li>
              <li><strong>Frontend:</strong> React + Vite webapp</li>
              <li><strong>CI/CD:</strong> GitHub Actions deploy on commit</li>
              <li><strong>Monitoring:</strong> Prometheus & Grafana</li>
              <li><strong>Security:</strong> RBAC, TLS by default</li>
              <li><strong>Alerting:</strong> Webhooks to external endpoints (Discord, Slack, etc.)</li>
              <li><strong>Infrastructure as Code:</strong> Terraform (optional, but included for completeness)</li>
            </ul>
            <div className="monk-inline">
              <img src="/monks.png" alt="The Watchers" />
              <p className="monk-caption">“The Pis, silent and unwavering, tamed the k3s cluster… and in doing so, tamed our hearts.”<br />
                — an ancient DevOps proverb, probably.</p>
            </div>
          </div>

          <div className="carousel-wrapper">
            <div className="carousel-track">
              <span><img src="/docker.svg" alt="Docker" className="tech-icon" /></span>
              <span><img src="/helm.svg" alt="Helm" className="tech-icon" /></span>
              <span><img src="/raspberrypi.svg" alt="Raspberry Pi" className="tech-icon" /></span>
              <span><img src="/kubernetes.svg" alt="Kubernetes" className="tech-icon" /></span>
              <span><img src="/react.svg" alt="React" className="tech-icon spin" /></span>
              <span><img src="/vite.svg" alt="Vite" className="tech-icon" /></span>
              <span><img src="/githubactions.svg" alt="GitHub Actions" className="tech-icon" /></span>
              <span><img src="/prometheus.svg" alt="Prometheus" className="tech-icon" /></span>
              <span><img src="/grafana.svg" alt="Grafana" className="tech-icon" /></span>
              <span><img src="/letsencrypt.svg" alt="Let’s Encrypt" className="tech-icon" /></span>
              <span><img src="/terraform.svg" alt="Terraform" className="tech-icon" /></span>
              {/* duplicate once for smooth loop */}
              <span><img src="/docker.svg" alt="Docker" className="tech-icon" /></span>
              <span><img src="/helm.svg" alt="Helm" className="tech-icon" /></span>
              <span><img src="/raspberrypi.svg" alt="Raspberry Pi" className="tech-icon" /></span>
              <span><img src="/kubernetes.svg" alt="Kubernetes" className="tech-icon" /></span>
              <span><img src="/react.svg" alt="React" className="tech-icon spin" /></span>
              <span><img src="/vite.svg" alt="Vite" className="tech-icon" /></span>
              <span><img src="/githubactions.svg" alt="GitHub Actions" className="tech-icon" /></span>
              <span><img src="/prometheus.svg" alt="Prometheus" className="tech-icon" /></span>
              <span><img src="/grafana.svg" alt="Grafana" className="tech-icon" /></span>
              <span><img src="/letsencrypt.svg" alt="Let’s Encrypt" className="tech-icon" /></span>
              <span><img src="/terraform.svg" alt="Terraform" className="tech-icon" /></span>
            </div>
          </div>

          <h2 className="subsection-title">The Why</h2>
          <p className="section-text">
            Because saying <strong>"I know DevOps"</strong> is easy.<br />
            <strong>Showing</strong> it—live, automated, and running on your own hardware—means something.
          </p>
          <p className="section-text">
            PiReborn isn’t just a tech stack—it’s a showcase of real-world DevOps practices:
          </p>
          <ul className="section-list">
            <li><strong>GitOps-style deployment pipelines</strong></li>
            <li><strong>Automated certificate management</strong></li>
            <li><strong>Declarative infrastructure and manifests</strong></li>
            <li><strong>Observability baked in</strong></li>
            <li><strong>Low-resource HA experimentation</strong></li>
            <li><strong>Security-first networking</strong></li>
          </ul>
        </div>
        <section className="descend">
          <a href="#tr6k" className="scroll-down">
            <img src="/button_cleaned.svg" alt="Scroll Down" />
          </a>
        </section>
      </section>

      {/* TR6K Section */}
      <section id="tr6k" className="section dark snap-section full-viewport">
        <div className="container">
          <h2 className="section-title">Enter the Realm of TR6K </h2>
          <h2 className="section-title"> UNDER CONSTRUCTION </h2>
          <div className="tr6k-video-wrapper mt-6 flex flex-col items-center">
            <Link to="/tr6k">
              <video
                src={teaserVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-[480px] rounded-xl shadow-lg border border-white/10 mb-6"

              />
            </Link>
          </div>
          <p className="quote">“Ashbringer booted, so that others may boot.”</p>
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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/tr6k" element={<TR6K />} />
      </Routes>
    </Router>
  );
}
