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

* Operate a live production workload on bare-metal hardware
* Practice modern DevOps and SRE workflows
* Automate deployments and infrastructure operations
* Implement monitoring, observability, and alerting
* Document operational decisions and incident response
* Maintain a public demonstration of infrastructure ownership

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

The goal is not scale.

The goal is operational completeness.

---

## 🔄 Deployment Workflow

1. Code is pushed to the `main` branch.
2. GitHub Actions builds and validates the application.
3. Docker image is built and published to GHCR.
4. Kubernetes deployment is updated.
5. Traefik routes traffic to the latest deployment.
6. Platform health is verified through monitoring and health checks.

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

One of the primary goals of PiReborn is documenting the operational journey itself.

The repository includes:

* Platform state snapshots
* Incident reports
* Recovery procedures
* Infrastructure notes
* Automation scripts

The project intentionally preserves lessons learned, not just final outcomes.

---

## 📜 TR6K Realm

PiReborn also contains the TR6K Realm, an optional thematic layer built around retro-futuristic storytelling, visual experimentation, and project lore.

Features include:

* Custom artwork
* Audio integration
* Alternate project presentation
* Narrative-driven design concepts

While separate from the platform's technical objectives, the TR6K Realm reflects the creative side of building and maintaining personal infrastructure.

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
