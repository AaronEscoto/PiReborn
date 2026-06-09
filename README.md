# PiReborn
## Bare Metal Native Solutions For The Average Joe

*Iterate. Burn. Return*

🐍 → 🐦‍🔥 → 🐍

---

## 🌐 Overview

PiReborn is a live proof-of-concept of modern DevOps and Site Reliability Engineering practices, hosted on self-managed Raspberry Pi hardware and operated as a production platform.

The workload is intentionally simple.
The platform is intentionally real.

The project demonstrates the complete operational lifecycle:

> **Build → Deploy → Observe → Improve**

---

## 🎯 Objectives

* Emulate a production environment on bare-metal hardware
* Keep current with all the things

---

## 🧱 Technology Stack

| Layer            | Technology                   |
| ---------------- | ---------------------------- |
| Compute          | Raspberry Pi 4 (Bare Metal)  |
| Orchestration    | k3s Kubernetes               |
| Frontend         | React + Vite                 |
| Containerization | Docker                       |
| CI/CD            | GitHub Actions               |
| Ingress          | Traefik                      |
| TLS              | cert-manager + Let's Encrypt |
| DNS              | Namecheap Dynamic DNS        |
| Monitoring       | Prometheus + Grafana         |
| Packaging        | Helm                         |
| Source Control   | GitHub                       |

---

## 🏗️ Architecture

PiReborn runs on a self-managed Raspberry Pi cluster using k3s.

The platform includes:

* Automated container builds through GitHub Actions
* Container image publishing through GitHub Container Registry (GHCR)
* Helm-based application deployment
* Automated TLS certificate management
* Dynamic DNS updates for residential ISP changes
* Health monitoring and operational visibility
* Documentation of incidents, recovery procedures, and platform changes

---

## 🔄 Deployment Workflow

1. Code is pushed to the `main` branch.
2. GitHub Actions builds and validates the application.
3. Docker image is built and published to GHCR.
4. Kubernetes deployment is updated.
5. Traefik routes traffic to the latest deployment.
6. Platform health is verified through monitoring, health checks, and Discord webhooks.

---

## 📊 Observability

PiReborn incorporates monitoring and operational tooling commonly found in larger production environments.

Current capabilities include:

* Prometheus metrics collection
* Grafana dashboards
* Kubernetes health visibility
* Platform health checks
* Operational logging
* Incident documentation and post-mortems

---

## 📚 Operational Documentation

The repository includes:

* Platform state snapshots
* Incident reports
* Recovery procedures
* Infrastructure notes
* Automation scripts

---

## 📜 TR6K Realm

PiReborn also contains the TR6K Realm, an optional thematic layer built around retro-futuristic storytelling, visual experimentation, and project lore.

Features include:

* Custom artwork
* Audio integration
* Alternate project presentation
* Narrative-driven design concepts

---

## 🚧 Current Status

### ✅ Operational

* Kubernetes cluster running
* Automated CI/CD pipeline operational
* HTTPS/TLS fully automated
* Dynamic DNS automation active
* Monitoring and observability deployed
* Production workload live

### 🔧 Ongoing Improvements

* Platform hardening
* Additional automation
* Infrastructure cleanup and refinement
* Continued operational documentation

---

## 🗨️ Final Thoughts

The workload is intentionally simple.
The platform is intentionally real.

Every improvement, outage, deployment, and recovery contributed to the same lesson:

> Reliable systems are not built once.
> They are continuously maintained, observed, and improved.

PiReborn exists as a reminder that meaningful infrastructure does not require a datacenter, a large budget, or a massive team.

Sometimes it fits on a desk.

---

🐍 → 🐦‍🔥 → 🐍

**Iterate. Burn. Return.**
