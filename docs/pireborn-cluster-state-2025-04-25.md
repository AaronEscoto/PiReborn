
# PiReborn – State of the Cluster
## Snapshot Date: April 25, 2025

---

## ✨ Project Overview
**PiReborn** is a high-availability Kubernetes k3s cluster running on two Raspberry Pi 4 nodes, hosting a live production site (https://dev.aaronescoto.com/) with full HTTPS, backed by a custom React frontend.

This cluster is designed and operated with production engineering principles, including SSL/TLS security, monitoring layers, and layered routing infrastructure.

---

## 🔍 Cluster Details

| Component | Status |
|:--|:--|
| Kubernetes Distribution | k3s (lightweight Kubernetes) |
| Nodes | 2 Raspberry Pi 4 units |
| Networking | Flannel overlay network |
| Service Exposure | Traefik Ingress Controller |
| Certificate Management | cert-manager with Let's Encrypt (Production) |
| DNS | dev.aaronescoto.com correctly pointed to public IP |
| NAT / Firewall | Port 443 forwarded to tr6k-sentinel Pi |

---

## 🔧 Deployed Services

| Namespace | Application | Status |
|:--|:--|:--|
| default | PiReborn Frontend (React App) | Healthy |
| kube-system | Traefik (Ingress Controller) | Healthy |
| kube-system | CoreDNS | Healthy |
| kube-system | Metrics Server | Healthy |
| cert-manager | cert-manager Controller | Healthy |
| monitoring | (Monitoring stack planned) | Placeholder Only |

---

## 🔒 SSL/TLS State

- Certificate: **Let's Encrypt Production**
- Subject: `dev.aaronescoto.com`
- Issuer: Let's Encrypt R11
- Valid From: **April 19, 2025**
- Valid Until: **July 18, 2025**
- Auto-Renewal Scheduled: **June 18, 2025**

SSL handshake proven operational with both curl and browser.

---

## 🛤️ Routing Infrastructure

| Component | Status |
|:--|:--|
| Ingress Controller | Traefik |
| Traefik EntryPoint | websecure (HTTPS) |
| Ingress Object | Active (`pireborn-ingress-dev`) |
| Backend Service | `pireborn` (port 80) |
| Traefik TLS Termination | Functional |

Explicit Kubernetes-native Ingress configured, ensuring durability across cluster restarts and deployments.

---

## ⚡ Known Future Work

- Deploy Prometheus + Grafana for full cluster monitoring.
- Add alerting pipelines (Slack or email notifications).
- Set up CI/CD pipeline to auto-deploy frontend updates via GitHub Actions.
- Potential: Install long-term storage backend (e.g., rook-ceph) for persistent workloads.

---

## 📄 Final Observations

- **Cluster Stability:** Stable after full reset and cleanup of legacy Rancher components.
- **Site Reachability:** Confirmed live from external networks.
- **Infrastructure Resilience:** Designed for service continuity even through k3s/Traefik restarts.
- **Next Phase:** Instrument cluster metrics and set up proactive observability.

---

# 💖 Inspirational Note:

> "Forged not from silicon alone,  
> but from the will of the Wielder,  
> PiReborn endures the fires of creation,  
> and stands ever ready for the storms to come."

---

**Relic-Wielder:** Aaron Escoto  
**Cluster Name:** PiReborn  
**Version:** Phase I Complete

---

(*Signed on this day of digital rebirth: April 25, 2025 ✨*)
