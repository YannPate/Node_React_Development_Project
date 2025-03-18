#!/bin/bash
# Navigate to the backend directory
echo "Changing to the backend directory..."
cd C:/Users/yannp/Documents/GitHub/Node_React_Development_Project/backend/ || { echo "Could not find the backend directory."; exit 1; }

# Start the Docker containers
echo "Launching Docker containers using docker-compose..."
docker build -t postgresconfig . # -d flag runs containers in detached mode
docker run -d --name postgres123 -p 5432:5432 postgresconfig

# Verify if Docker containers started successfully
if [ $? -eq 0 ]; then
    echo "Docker containers started successfully."
else
    echo "Error starting Docker containers."
    exit 1
fi

# Wait for a short period to ensure the services are initialized (optional)
echo "Waiting for services to be ready..."
sleep 5

# Start the Node.js backend server
echo "Launching Node.js server..."
node app.js & # Run in the background

# Verify if the Node.js application started successfully
if [ $? -eq 0 ]; then
    echo "Node.js server started successfully."
else
    echo "Error starting the Node.js server."
    exit 1
fi

# Navigate to the frontend directory
echo "Changing to the frontend directory..."
cd ../frontend/frontendApp || { echo "Could not find the frontend directory."; exit 1; }

# Start the Angular application
echo "Launching Angular app with 'ng serve'..."
ng serve --open

# Verify if the Angular app started successfully
if [ $? -eq 0 ]; then
    echo "Angular application started successfully."
else
    echo "Error starting Angular application."
    exit 1
fi
