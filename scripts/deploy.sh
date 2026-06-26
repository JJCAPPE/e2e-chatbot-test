#!/bin/bash
set -euo pipefail

TARGET="${1:-dev}"
ENDPOINT="${DATABRICKS_SERVING_ENDPOINT:-bmed-move-agent}"

npm install
npm run build

databricks bundle validate -t "$TARGET" --var "serving_endpoint_name=$ENDPOINT"
databricks bundle deploy -t "$TARGET" --var "serving_endpoint_name=$ENDPOINT"
databricks bundle run bmed_move_interface -t "$TARGET" --var "serving_endpoint_name=$ENDPOINT"
