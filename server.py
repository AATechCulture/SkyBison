"""
This file contains the backend server for processing and handling requests to and from APIs, as well as queries to the database.

Functions:

"""

from fastapi import FastAPI, Query, HTTPException
from concurrent.futures import ThreadPoolExecutor
import requests, json, time, os, sys, asyncio, uvicorn
import sqlite3

# Create the FastAPI object
app = FastAPI()

#URLS FOR ACCESS
database_url = "<insert database url>"
external_apis_url = ["<insert external apis url>"]

#database intialization for SQlite
database_connection = sqlite3.connect("database.db")

##database implementation here
#TODO(RYAN)

def get_user_trip_data(username):
    pass


#Fucntion to make concurrent request to multiple flight retrieval APIs

# Function to fetch flight data from a single API
def fetch_flight_data_concurrently(username, initial_airport, destination_airport, travel_date, external_apis_url):
    params = {
        "departure": initial_airport,
        "arrival": destination_airport,
        "date": travel_date,
        "username": username,
    }

    with ThreadPoolExecutor(max_workers=len(external_apis_url)) as executor:
        results = list(executor.map(lambda url: requests.get(url, params=params).json(), external_apis_url))
    return results

#Endpoint to fetch flight data with user-specific data
@app.get("/fetch-flight-data")
async def fetch_flight_data(
    username: str = Query(..., description="AA Advantage Number"),
    departure: str = Query(..., description="Departure Airport"),
    arrival: str = Query(..., description="Arrival Airport"),
    travel_data: str = Query (... , description="Travel Date"),
):
    """
    This function will fetch flight data from the database and return it to the user.
    """

    #Checking to see if the user exists in the database and has booked trips in the database
    user_trip_data = get_user_trip_data(username)

    if user_trip_data:
        # User has booked trips; use the last trip's data
        initial_airport, destination_airport, travel_date = user_trip_data
    
    new_flight_data = fetch_flight_data_concurrently(username, initial_airport, destination_airport, travel_date)
