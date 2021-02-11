# pull official base image
FROM node:latest as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN apt-get update && apt-get install -y --no-install-recommends apt-utils


COPY envfile ./
RUN source envfile
RUN echo $API_ENDPOINT

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm ci --silent
RUN npm install react-scripts@4.0.2 -g --silent

COPY . ./

RUN chmod +x scripts/create_config_file.sh
RUN scripts/create_config_file.sh

RUN npm run build

# Production environment

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
