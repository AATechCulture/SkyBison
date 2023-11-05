'''
This file is the main file for the API that is used to communicate between the front end and the back end.
This API will take in request from the front-end, and then send the request to the back-end.
The back-end will then process the request and perform it's designated task or actions.

'''

from fastapi import FastAPI, File, UploadFile, HTTPException, Query, Body, Request
from pydantic import BaseModel
from typing import Optional, List
from Class_Types.types import UserAccount, FlightBookingRequest, FlightBookingResponse
import requests, json, httpx


app = FastAPI() # Create the FastAPI object

backend_server_url = "<insert url here>" # URL of the backend server

mock_user_data = {
    "user123": {"username": "user123", "name": "John Doe", "email": "john@example.com"},
    # Add more mock user data as needed
}

httpx_client = httpx.AsyncClient()

# Define a cache for storing responses (you can use an appropriate caching library)
response_cache = {}

@app.on_event("shutdown") #on the event shutdown or close
async def close_httpx_client():
    await httpx_client.aclose()

@app.get("/fetch-user-account")
async def fetch_user_account(
    username: str = Query(..., description="AA Advantage Number")
):
    try:
        if username in mock_user_data:
            # Check if the response is already cached
            if username in response_cache:
                return response_cache[username]

            # Make an HTTP GET request to the backend server using the async client
            async with httpx_client.get(
                f"{backend_server_url}/fetch-user-account",
                params={"username": username},
            ) as response:
                # Check if the request to the backend server was successful
                if response.status_code == 200:
                    # Parse and return the response JSON
                    user_account_info = response.json()
                    # Cache the response for future use
                    response_cache[username] = user_account_info
                    return user_account_info
                elif response.status_code == 404:
                    raise HTTPException(status_code=404, detail="User account not found")
                else:
                    raise HTTPException(
                        status_code=500, detail="Internal Server Error"
                    )
        else:
            raise HTTPException(status_code=404, detail="User account not found")

    except httpx.RequestError as e:
        # Handle network-related errors
        raise HTTPException(
            status_code=500, detail=f"Backend Server Error: {str(e)}"
        )

    except Exception as e:
        # Handle other unexpected errors
        raise HTTPException(
            status_code=500, detail=f"Internal Server Error: {str(e)}"
        )


#Front-end to back-end API endpoint to book flight
@app.post("/book-flights")
async def book_flights(username: str = Query(..., description="AA Advantage Number"), airline: str = Query(..., description="Airline")):
    try:
        response = requests.post(backend_server_url + "/book-flights", params={"username": username, "airline": airline})
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=f"Backend Server Error: {str(e)}")

#Front-end to back-end API endpoint to fetch flights
@app.get("/search")
async def search_flights(username: str = Query(..., description="AA Advantage number"),
                         departure_airport: str = Query(..., description="Departure airport"),
                         destination_airport: str = Query(..., description="Destination"),
                         travel_date = Query(..., description="Travel date")):
    try:
        #Construct the request payload with the search parameters
        search_params = {
            "username": username,
            "departure_airport": departure_airport,
            "destination_airport": destination_airport,
            "travel_date": travel_date,
        }

        #Make an HTTP GET request to the backend server
        response = requests.get(f"{backend_server_url}/search",params=search_params)

        #check if the request to the backend server is successful
        if response.status_code == 200:
            flight_search_results = response.json()
            return flight_search_results
        else:
            raise HTTPException(status_code=5000, detail="flight search failed")


    except requests.exceptions.RequestException as e:
        #handle network-related exceptions
        raise HTTPException(status_code=500, detail=f"Backend Server Error: {str(e)}")
    except Exception as e:
        #handle other occurenccess of exceptions
        raise HTTPException(status_code=500, detail=f"InternalServer Error: {str(e)}")
    

#Front-end to back-end API endpoint to fetch bag status
@app.get("/fetch-bag-status")
async def fetch_bag_status(username: str = Query(..., description="AA Advantage Number"),
                           bag_id: str = Query(..., description="Bag ID")):
    try:
        #Construct the query parameters for the GET request
        bag_status_params = {
            "username": username,
            "bag_id": bag_id,
        }

        #Make an HTTP GET request to the backend server to fetch bag status
        response = requests.get(f"{backend_server_url}/fetch-bag-status", params=bag_status_params)

        #check if the request to the backend server is successful
        if response.status_code == 200:
            #parse and return the bag status infromation received from the backend server
            bag_status_info = response.json()
            return bag_status_info
        else:
            #handling the errors from backend server
            raise HTTPException(status_code=500, detail="bag status retrieval failed")
    except requests.exceptions.RequestException as e:
        #Handle network-related errors
        raise HTTPException(status_code=500, detail="Backend server is unavailable")
    except Exception as e:
        #handle other unexepected errors
        raise HTTPException(status_code=500, detail="Internal Server Error")

