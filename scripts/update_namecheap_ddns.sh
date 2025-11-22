#!/usr/bin/env bash

# Dynamic DNS updater for Namecheap
DOMAIN="aaronescoto.com"
HOST="@"
PASSWORD="19c02b40ff5b44efa8462a1211b21566"

# Get current public IP
CURRENT_IP="$(curl -4 -s ifconfig.me)"

# Validate IP format
if ! echo "$CURRENT_IP" | grep -Eq '^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$'; then
  echo "[$(date)] Invalid IP detected: $CURRENT_IP" >&2
  exit 1
fi

# Construct Namecheap Dynamic DNS update URL
UPDATE_URL="https://dynamicdns.park-your-domain.com/update?host=${HOST}&domain=${DOMAIN}&password=${PASSWORD}&ip=${CURRENT_IP}"

# Call the API
RESPONSE="$(curl -s "$UPDATE_URL")"

# Log output
LOGFILE="/var/log/namecheap-ddns.log"
echo "[$(date)] IP=${CURRENT_IP} Response=${RESPONSE}" >> "$LOGFILE"

