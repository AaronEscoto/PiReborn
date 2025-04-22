import reactLogo from './assets/react.svg'
import './index.css' // Make sure this exists and includes the CSS below

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#111827',
      color: 'white',
      fontFamily: 'sans-serif',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <header style={{ marginBottom: '2rem' }}>
        <img src={reactLogo} className="react-logo" alt="React logo" />
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '1rem' }}>
           PiReborn: A Live DevOps Proof-of-Concept
        </h1>
        <p style={{ color: '#ccc', maxWidth: '700px', margin: '1rem auto' }}>
          Welcome to the live deployment of <strong>PiReborn</strong>.<br />
          What you are seeing now is more than just a static site—it's a living, breathing DevOps proof-of-concept, built from the silicon up.
        </p>
      </header>

      <main style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'left' }}>
        <section>
          <h2>🧱 <strong>The Stack</strong></h2>
          <ul>
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
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>⚙️ <strong>The Mission</strong></h2>
          <p>
            PiReborn isn’t just a tech stack — it’s a showcase of real-world DevOps practices:
          </p>
          <ul>
            <li>GitOps-style deployment pipelines</li>
            <li>Automated certificate management</li>
            <li>Declarative infrastructure and manifests</li>
            <li>Observability baked in</li>
            <li>Low-resource HA experimentation</li>
          </ul>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>✨ <strong>The Why</strong></h2>
          <p>
            Because saying "I know DevOps" is easy. <br />
            Showing it—live, automated, and running on your own hardware—means something.
          </p>
          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
            PiReborn is alive. <br /> And it’s just getting started.
          </p>
          <blockquote style={{ color: '#888', marginTop: '1rem' }}>
            “The Pis, silent and unwavering, tamed the k3s cluster… and in doing so, tamed our hearts.”<br />
            — an ancient DevOps proverb, probably.
          </blockquote>
        </section>
      </main>
    </div>
  )
}

export default App
