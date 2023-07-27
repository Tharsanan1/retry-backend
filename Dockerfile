# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY server.js .

# Expose the port that the Node.js app listens on
EXPOSE 3000

# Start the Node.js app
CMD ["node", "server.js"]
