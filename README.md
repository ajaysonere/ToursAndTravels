# ToursAndTravels Web App

This is a web application for Tours and Travels, designed to provide information about travel destinations, book tours, and manage travel-related activities.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- View a list of available travel destinations.
- Detailed information about each destination, including descriptions, photos, and pricing.
- User authentication and authorization for booking tours.
- User-friendly booking System.
- User dashboard to manage booked tours

## Technologies Used

- **Frontend:**
  - React.js for building the user interface.
  - HTML, CSS, and JavaScript for frontend development.
  - Redux for state management.
  - Fetch/Axios for making HTTP requests to the backend.

- **Backend:**
  - Node.js and Express.js for building the server.
  - MongoDB for the database.
  - JSON Web Tokens (JWT) for authentication.

## Installation

To run the ToursAndTravels web app on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/ajaysonere/ToursAndTravels.git
   cd ToursAndTravels
2. Install Frontend Dependencies:
   ```bash
      cd frontend
      npm install  
3. Install backend dependencies:
   ```bash
       cd ../backend
       npm install  

## Configuration

Before running the application, you need to set up some configuration settings in the backend:

1. Create a .env file in the backend directory and configure the following environment variables:
   ```bash
   
        PORT=3800
        MONGODB_URL='YOUR_MONGODB_CONNECTION_STRING'
        JWT_SECRET_KEY='YOUR_SECRET_KEY'(It can whatever you want)
   
2. Replace 'YOUR_MONGODB_CONNECTION_STRING' and 'YOUR_SECRET_KEY' with your MongoDB database connection string and a secret key for JWT.

## Usage

To start the application, follow these steps:

1. Start the backend server:
   ```bash
     cd backend
     node index.js
   
2. Start the Frontend development server:
   ```bash
    cd frontend
    npm start
   
3. Access the application in your web browser at http://localhost:3000.

4. Explore the web app's features and functionalities to browse travel destinations, book tours, and manage your travel activities.
