# Use an official lightweight Node.js image.
# https://hub.docker.com/_/node
FROM node:latest

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
COPY package*.json ./

# Install production dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# Build the app
RUN npm run build

# Install a serve tool to serve your app on container
RUN npm install -g serve

# Run the app. CMD is required to run on Cloud Run
CMD ["serve", "-s", "dist", "-l", "8080"]
