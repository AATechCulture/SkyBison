# Flight Search Script

This script is designed to interact with the Duffel API to search for flight offers based on specified criteria such as origin, destination, departure date, and passenger details.

## Features

- Search for flights using the Duffel API.
- Filter flights by origin, destination, and departure date.
- Support for multiple passengers.
- Retrieve detailed flight offer information including airline, departure and arrival times, flight number, gate, stops, and pricing.

## Prerequisites

Before you can run the script, you need to have Node.js installed on your system. You can download and install Node.js from [nodejs.org](https://nodejs.org/).

## Installation

1. Clone the repository or download the script to your local machine.
2. Navigate to the directory where the script is located.
3. Run `npm install` to install the required dependencies.

## Configuration

Replace the placeholder `duffel_test_9ixI6o25Ua7EvCZ1TStQnNonimlussC-J8w3pVuMRqI` with your actual Duffel API access token in the script.

```javascript
headers: { 
  // ... other headers ...
  'Authorization': 'Bearer YOUR_DUFFEL_ACCESS_TOKEN' // Replace with your actual token
},

Usage

The script can be used as a module in your Node.js application or run directly for testing purposes.

To search for flights, call the searchFlights function with the following parameters:

origin: The 3-letter IATA code for the origin airport.
destination: The 3-letter IATA code for the destination airport.
departureDate: The ISO 8601 date for departure.
passengers: An array of passenger objects.
Example:
    searchFlights(
    'NYC', // Origin
    'ATL', // Destination
    '2024-04-21', // Departure Date
    [ // Passengers
        { "type": "adult" },
        { "type": "adult" },
        { "age": 1 }
    ]
    );

Running the Script
To run the script and test the flight search functionality, execute the following command in the terminal:

node your-script-name.js

Replace your-script-name.js with the actual file name of the script.

Response
The script will output the flight options to the console. Each flight option will include:

Airline name
Departure time
Arrival time
Flight number
Departure airport
Arrival airport
Gate (if available)
Number of stops
Pricing details for different classes
Error Handling
The script includes basic error handling, which will log any errors encountered during the API request to the console.

License
Specify the license under which the script is released.

Disclaimer
This script uses the Duffel API, and you must comply with their terms of service. The author of this script is not affiliated with Duffel.

Support
For support, please contact the script author or submit an issue on the repository page.




