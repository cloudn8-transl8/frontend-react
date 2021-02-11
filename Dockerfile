# pull official base image
FROM bayesimpact/react-base:latest as build

SHELL ["/bin/bash", "-c"] 

# set working directory
WORKDIR /usr/app/

COPY . ./

RUN npm ci --silent

RUN npm run build

# Production environment

FROM nginx:stable-alpine
COPY --from=build /usr/app/build /usr/share/nginx/html

COPY  scripts/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 80

# Set the default API_ENDPOINT
ENV API_ENDPOINT=http://localhost:3000 

ENTRYPOINT ["/entrypoint.sh"]
