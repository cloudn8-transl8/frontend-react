#!/bin/bash -e

cat <<EOF > ./k8sconfig/kustomization.yaml
---
resources:
- app.yaml
- canary.yaml
- dashboard.yaml
- service-router.yaml

images:
- name: nicholasjackson/translate-web
  newTag: ${CIRCLE_SHA1}
EOF
