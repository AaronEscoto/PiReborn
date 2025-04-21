
# 🚀 PiReborn: High-Availability Raspberry Pi Cluster + DevOps-Powered Web App

## **🌐 Project Overview**
**PiReborn** is a fully self-hosted DevOps proof-of-concept demonstrating a production-like environment deployed on a bare-metal Raspberry Pi cluster. It serves a live React webapp using GitHub Actions, Traefik, and Let's Encrypt — monitored, observable, and secured like any true SRE-grade platform.

---

## **🎯 Project Goals**
- Build a **High-Availability (HA)** k3s Kubernetes cluster using Raspberry Pi 4s.
- Serve a live **React + Vite** website via Traefik and automated TLS.
- Fully automate deployments with **GitHub Actions CI/CD**.
- Secure the stack with **Let's Encrypt**, Kubernetes Secrets, and RBAC.
- Monitor the environment with **Prometheus + Grafana**.
- Demonstrate full DevOps lifecycle: Build → Deploy → Observe.

---

## **🧱 Tech Stack**

| Layer             | Tech                                                                 |
|------------------|----------------------------------------------------------------------|
| **Cluster**       | 2x Raspberry Pi 4 (bare-metal) running k3s                          |
| **Frontend**      | React + Vite + TailwindCSS                                           |
| **CI/CD**         | GitHub Actions                                                       |
| **Ingress**       | Traefik (w/ Let's Encrypt HTTP01 Challenge via cert-manager)        |
| **Monitoring**    | Prometheus + Grafana                                                 |
| **Containerization** | Docker (built & pushed via GitHub Actions)                       |
| **Infrastructure as Code** | Terraform (planned)                                         |

---

## **📁 Directory Layout**

### React + Vite Web App
```plaintext
/src
  /components
  /pages
  App.jsx
  index.jsx
  vite.config.js
  tailwind.config.js
Dockerfile
package.json
.github/
  workflows/
    docker-build.yaml
README.md
```

### Kubernetes Deployment YAMLs
```plaintext
acme-challenge-ingress.yaml
cluster-issuer.yaml
cert-manager-ns.json
pireborn-deployment.yaml
pireborn-service.yaml
pireborn-ingress.yaml
pireborn-ingress-dev.yaml
```

---

## **📦 GitHub Actions CI/CD Pipeline**

1. Code is pushed to the `main` branch.
2. GitHub Actions builds the React app.
3. Docker image is built and pushed to **ghcr.io**.
4. (Planned) Helm chart or `kubectl` applies deployment on cluster.
5. Ingress + Traefik route external traffic to the newly updated app.

✅ TLS via Let's Encrypt  
✅ CI with GitHub Actions  
✅ Live Deployment via Docker + Kubernetes

---

## **📡 Monitoring & Observability (WIP)**

Planned integration of:
- **Prometheus**: Cluster and pod metrics
- **Grafana**: Live dashboards
- **Alertmanager**: Basic webhooks or future integration w/ Discord or email

---

## **🧭 Roadmap**

| Status | Task |
|--------|------|
| ✅     | Raspberry Pi cluster (tr6k-sentinel & tr6k-catalyst) bootstrapped with k3s |
| ✅     | Traefik + cert-manager ingress setup for HTTPS |
| ✅     | Let's Encrypt certificate successfully issued via DNS challenge |
| ✅     | GitHub Actions build + push working with GHCR |
| ✅     | Live React site served from cluster |
| ⏳     | Add Helm charts for automated deployment |
| ⏳     | Add Prometheus + Grafana for observability |
| ⏳     | Implement webhooks / alerting |
| ⏳     | Add Terraform IaC to define deployment manifests |
| ⏳     | Build secondary themed TR6K page (visual storytelling w/ parallax, VHS FX) |
| ⏳     | Integrate project description into site homepage ("What you're seeing...") |

---

## **📜 TR6K Thematic Add-on (Future Enhancement)**

We will include an alternate immersive universe — **TR6K Realm** — a retro-futuristic digital sanctum with:
- ASCII FX, flicker animations, and VHS overlays
- Phoenix & Ouroboros themed elements
- Canonical lore embedded within code & UI
- Parallax, glow text, synth musak

Accessible from main landing page as an “alternate mode.”

---

## **🗨️ Final Word**

> "**Yeah, my personal website runs on a self-built high-availability Kubernetes cluster on bare-metal Raspberry Pi 4s, fully automated with CI/CD pipelines and monitored with Grafana.**"  
> – You, casually, at every meetup 😎

_Last updated: 2025-04-21_
