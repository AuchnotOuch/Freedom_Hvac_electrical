#!/bin/bash

# Stop the script if any command fails
set -e

# Navigate to frontend directory and build it
echo "Building frontend..."
cd premium-package-frontend
npm install
npm run build

# Navigate back to root and move the build folder to the backend
cd ..
# Navigate to backend directory and install dependencies
echo "Installing backend dependencies..."
cd premium-package-backend
npm install

echo "Build and installation complete."
