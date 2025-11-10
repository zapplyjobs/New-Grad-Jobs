#!/bin/bash

echo "=========================================="
echo "Discord Duplicate Cleanup Runner"
echo "=========================================="
echo ""
echo "This will delete all bot posts from the last 6 hours"
echo "across all configured Discord channels."
echo ""
read -p "Are you sure you want to continue? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
  echo "Cleanup cancelled."
  exit 0
fi

echo ""
echo "Starting cleanup..."
node .github/scripts/cleanup-duplicate-posts.js
