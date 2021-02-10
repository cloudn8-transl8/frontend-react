#!/bin/bash -e

# Recreate config file
rm -rf public/env-config.js
touch public/env-config.js

if test -z "$API_ENDPOINT" 
then
    echo "ERROR injecting environment variables to React app: \$API_ENDPOINT environment variable must be set."
    exit 1
fi

# Add assignment 
echo "window._env_ = {" >> public/env-config.js
echo "API_ENDPOINT: \"$API_ENDPOINT\"," >> public/env-config.js
echo "}" >> public/env-config.js
