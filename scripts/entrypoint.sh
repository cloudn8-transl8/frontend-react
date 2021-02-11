#!/bin/sh

# Recreate config file
rm -rf /usr/share/nginx/html/env-config.js

if test -z "$API_ENDPOINT" 
then
    echo "ERROR injecting environment variables to React app: \$API_ENDPOINT environment variable must be set."
    exit 1
fi
echo "API ENDPOINT IN ENTRYPOINT"
echo $API_ENDPOINT

# Add assignment 
cat <<EOF > /usr/share/nginx/html/env-config.js
window._env_ = {
  API_ENDPOINT: "${API_ENDPOINT}"
}
EOF

nginx -g "daemon off;"
