# Use the official Node.js image as the base image
FROM node:18

# Set the working directory for the subsequent instructions
WORKDIR /usr/src/app

# Copy the package and package-lock.json if available
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]
