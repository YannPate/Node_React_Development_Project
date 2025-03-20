# Node_React_Development_Project

# How to Launch All the app
## Open Docker desktop and execute this command 
   ```bash
   bash launch.sh
   ```

# How to only run the Backend Part

## Technologies
- **Node.js**
- **Docker Desktop**

1. Open a terminal and go to "backend".
2. Execute these command to start the Docker containers:
   ```bash
   docker build -t postgresconfig .
   docker run -d --name postgres123 -p 5432:5432 postgresconfig
   ```
3. Open another terminal, go again to "backend" and execute this command :
   ```bash
   node app.js
   ```

# How to only run Frontend Part

## Technologies 
- **TODO**

## How to Run the Backend
Follow these steps to execute the frontend:

1. Open a terminal and go to "frontendApp".
2. Install package angular CLI 
   ```bash
   npm install
   npm install -g @angular/cli
   ```