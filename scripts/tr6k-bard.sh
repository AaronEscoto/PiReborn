#!/bin/bash

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Domain to check
domain="dev.aaronescoto.com"

# Problems array
problems=()

# Timestamp
echo -e "${CYAN}📅 Health Check Timestamp: $(date)${NC}"
echo -e "${CYAN}🔎 Starting Kubernetes Cluster Health Check...${NC}\n"

# Nodes Check
echo -e "${CYAN}🖥️  Checking Nodes:${NC}"
kubectl get nodes -o wide || problems+=("❌ Failed to retrieve nodes")

# Pods Check
echo -e "\n${CYAN}📦 Checking Pods:${NC}"
pods_output=$(kubectl get pods -A)

# Display pods
echo "$pods_output"

# Check pods readiness
bad_pods=$(echo "$pods_output" | awk 'NR>1 {
  split($3, ready, "/");
  if (ready[1] != ready[2]) {
    print $1 "/" $2 " is not ready (" $3 ")";
  }
}')

if [[ -z "$bad_pods" ]]; then
    echo -e "${GREEN}✅ All pods are running and ready.${NC}"
else
    echo -e "${RED}❌ Some pods are not fully ready:${NC}"
    echo "$bad_pods"
    problems+=("❌ One or more pods not fully ready")
fi

# Deployments Check
echo -e "\n${CYAN}🛡️  Checking Deployments:${NC}"
kubectl get deployments -A || problems+=("❌ Failed to retrieve deployments")

# Services Check
echo -e "\n${CYAN}🛠️  Checking Services:${NC}"
kubectl get svc -A || problems+=("❌ Failed to retrieve services")

# Ingress Check
echo -e "\n${CYAN}📈 Checking Ingresses:${NC}"
kubectl get ingress -A || problems+=("❌ Failed to retrieve ingresses")

# Certificates Check
echo -e "\n${CYAN}🔐 Checking Certificates (if cert-manager installed):${NC}"
kubectl get certificates -A || echo -e "${YELLOW}⚠️  No certificates found.${NC}"

# Recent Events Check
echo -e "\n${CYAN}⚠️  Recent Events (last 50 lines):${NC}"
kubectl get events --all-namespaces --sort-by='.lastTimestamp' | tail -n 50 || echo -e "${YELLOW}⚠️  No events found.${NC}"

# External Connectivity
echo -e "\n${CYAN}🌐 Checking External Connectivity ($domain):${NC}"

# Check port 443
if nc -zvw5 $domain 443 >/dev/null 2>&1; then
    echo -e "${GREEN}✅ Port 443 reachable (nc successful)${NC}"
else
    echo -e "${RED}❌ Port 443 unreachable${NC}"
    problems+=("❌ Port 443 unreachable on $domain")
fi

# Check HTTP 200
http_code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 https://$domain)
if [ "$http_code" -eq 200 ]; then
    echo -e "${GREEN}✅ HTTP check successful (Status: 200)${NC}"
else
    echo -e "${RED}❌ HTTP check failed! Status code: $http_code${NC}"
    problems+=("❌ External HTTP check failed (Status: $http_code)")
fi

# Final Summary
echo -e "\n"

if [ ${#problems[@]} -eq 0 ]; then
    echo -e "${GREEN}✅ Kubernetes Health Check Complete. No problems detected.${NC}"
else
    echo -e "${RED}❌ Problems detected:${NC}"
    for prob in "${problems[@]}"; do
        echo -e "${RED}- $prob${NC}"
    done
fi
