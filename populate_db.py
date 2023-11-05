from typing import List
from pydantic import BaseModel
from pymongo import MongoClient
import json
from Flight_Engine_API import FlightEngineFunctions

from db_connection import accounts, trips, flights
from data import generate_account

# Initialize MongoDB connection
client = MongoClient('mongodb+srv://ryanectaylor:Rt79NxRGbQA5Xw3w@flightdata.vsg9uxo.mongodb.net/')
db = client['QuikBook-DataBase']

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

flight_object = FlightEngineFunctions.FlightEngine()
data = flight_object.get_flights_on_date("2023-11-05")
flights.insert_many(data)
client.close()
