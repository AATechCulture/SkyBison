American QuikBook Application
Overview

This application serves as a backend server for processing and handling requests to and from APIs, as well as queries to the MongoDB database. It includes functionalities such as populating the database with user accounts, associated cards, and trips, as well as handling user login requests.
Setup
Requirements

    Node.js
    MongoDB
    Express.js

Database Population

To populate the database with sample data, run the database_population.py script. This script initializes a MongoDB connection, inserts data into the accounts, trips, and flights collections, and then closes the connection.

bash

python database_population.py

Backend Server

The backend server is implemented using Express.js and connects to the MongoDB database to handle requests. To start the server, run the following command:

bash

node server.js

The server will start and listen on port 8080.
Endpoints
Login

    Route: /login
    Method: POST
    Request Body:
        aa_number: American Airlines number
        last_name: User's last name
        password: User's password

This endpoint validates the provided credentials against the database. If the credentials are valid, it returns a success message along with the user information. Otherwise, it returns an error message.

Example Request:

json

{
    "aa_number": "AA123",
    "last_name": "Doe",
    "password": "password123"
}

Example Response (Success):

json

{
    "message": "Login successful",
    "user": {
        // User information
    }
}

Example Response (Error):

json

{
    "message": "Invalid username or password"
}

Default Route

    Route: /
    Method: GET

This route provides a simple welcome message to indicate that the server is running.
Note

Make sure that MongoDB is running locally on port 27017.