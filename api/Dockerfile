# Use the official lightweight Node.js 10 image.
# https://hub.docker.com/_/node
FROM node:10-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

COPY .babelrc ./

RUN npm install

COPY ./src /usr/src/app/src

RUN npm run build

# Copy local code to the container image.
COPY ./build ./

# Remove dev packages
RUN npm prune --production

# Run the web service from /build
CMD [ "npm", "run", "serve" ]