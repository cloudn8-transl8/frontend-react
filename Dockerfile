# pull official base image
FROM node:latest as build

SHELL ["/bin/bash", "-c"] 

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN apt-get update && apt-get install -y --no-install-recommends apt-utils

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm ci --silent
RUN npm install react-scripts@4.0.2 -g

COPY . ./

RUN npm run build

# Production environment

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

COPY  scripts/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 80

# Set the default API_ENDPOINT
ENV API_ENDPOINT=http://localhost:3000 

ENTRYPOINT ["/entrypoint.sh"]
