#!/bin/bash

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${CYAN}🔎 Starting Kubernetes Cluster Health Check...${NC}"
problems=()

echo -e "\n🖥️  ${CYAN}Checking Nodes:${NC}"
kubectl get nodes
if [ $? -ne 0 ]; then
  problems+=("Failed to get nodes")
fi

echo -e "\n📦 ${CYAN}Checking Pods:${NC}"
kubectl get pods -A
if [ $? -ne 0 ]; then
  problems+=("Failed to get pods")
fi

echo -e "\n🛡️  ${CYAN}Checking Deployments:${NC}"
kubectl get deployments -A
if [ $? -ne 0 ]; then
  problems+=("Failed to get deployments")
fi

echo -e "\n🛠️  ${CYAN}Checking Services:${NC}"
kubectl get svc -A
if [ $? -ne 0 ]; then
  problems+=("Failed to get services")
fi

echo -e "\n📈 ${CYAN}Checking Ingresses:${NC}"
kubectl get ingress -A
if [ $? -ne 0 ]; then
  problems+=("Failed to get ingresses")
fi

echo -e "\n🔐 ${CYAN}Checking Certificates (if cert-manager installed):${NC}"
kubectl get certificates.cert-manager.io -A 2>/dev/null
if [ $? -ne 0 ]; then
  echo -e "${YELLOW}Certificates not found or cert-manager not installed.${NC}"
fi

echo -e "\n⚠️  ${CYAN}Recent Events (last 50 lines):${NC}"
kubectl get events -A --sort-by='.lastTimestamp' | tail -n 50 || {
  echo -e "${YELLOW}No events found or unable to retrieve events.${NC}"
  problems+=("No events or error retrieving events")
}

# Summary
if [ ${#problems[@]} -eq 0 ]; then
  echo -e "\n${GREEN}✅ Kubernetes Health Check Complete. No problems detected.${NC}"
else
  echo -e "\n${RED}❌ Problems Found:${NC}"
  for problem in "${problems[@]}"; do
    echo -e "${RED}- ${problem}${NC}"
  done
fi
