from typing import List
from pydantic import BaseModel
from pymongo import MongoClient
from pymongo_get_database import get_database #grabs the MongoDB database
import json
from Flight_Engine_API import FlightEngineFunctions

from data import generate_account

# Initialize MongoDB connection
client = MongoClient('mongodb+srv://<username>:<password>@flightdata.vsg9uxo.mongodb.net/')
#db = get_database()
db = client['mydatabase']

# Define collections
accounts = db['accounts']
trips = db['trips']
flights = db['flights']

# Insert data into the accounts collection
accounts_data = [
    {
        'aa_number': 'X989UT2',
        'name' : 'Ryan Taylor',
        'password' : 'password456',
        'email' : 'email.example.com',
        'number' : '777-777-7777',
        'preferred_airport' : 'DCA',
        'cards' : [],
        'reward_miles' : 0,
        'loyalty_points': 0,
    }
]
for _ in range(40):
    accounts_data.append(generate_account())

accounts.insert_many(accounts_data)

# Insert data into the trips collection
trips_data = [
    {
        'trip_id': 1,
        'aa_number': 'AA123',
        'destination': 'Paris',
        'flights': [],
        'departure_date': '2023-11-10',
        'return_date': '2023-11-15',
        'booking_status': 'Confirmed',
    }
]

trips.insert_many(trips_data)
print("done")

flights_data = [
    {
        'flight_id': 'F001',
        'max_passenger_count': 150,
        'departure_time': '2023-11-10T10:00:00',
        'arrival_time': '2023-11-10T12:00:00',
        'trip_id': 1,
        'status': "On Time"
    },
    # Add more flight data as needed
]
flight_object = FlightEngineFunctions.FlightEngine()
data = flight_object.find_next_availible_flight("DFW", "PHL")
formatted_json = json.dumps(data, indent=4)
print(formatted_json)
flights.insert_many(data)
client.close()

print("Database populated with accounts, associated cards, and trips.")
