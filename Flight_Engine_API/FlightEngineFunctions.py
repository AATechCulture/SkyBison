import requests
import json
import datetime
import pytz

BASEURL="http://localhost:4000"
DATE = datetime.datetime.now().date() #TODO: Change this based on the system day

class FlightEngine:

    def __init__(self):
        self.baseURL = BASEURL
    
    def get_flights_on_date(self, date):
        '''
        Gets all the flights on the date
        date : the system date in standard format (xxxx-xx-xx)
        '''
        url = f"{self.baseURL}/flights?date={date}"
        try:
            response = requests.get(url)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            raise Exception(f"Failed to retrieve flights for the date{date}: {e}")
        
    def get_users_flight_details(self, date, flight_number):
        '''
        Gets users flight info based on the flight number
        flight_number : user's flight number
        '''
        url = f"{self.baseURL}/flights?date={date}&flightNumber={flight_number}"
        try:
            response = requests.get(url)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            raise Exception(f"Failed to retrieve flights for the date{date}: {e}")
    
    def find_next_availible_flight(self, origin, destination):
        '''
        Finds next available flights based on departing and destination airports
        '''
        url = f"{self.baseURL}/flights?date={DATE}&origin={origin}&destination={destination}"
        current_time = datetime.datetime.now().isoformat()
        try:
            response = requests.get(url)
            response.raise_for_status()
            all_flights = response.json()
            parsed_flights = self.filter_flights_by_departure_time(all_flights)
            return parsed_flights
        except requests.exceptions.RequestException as e:
            raise Exception(f"Failed to retrieve flights for the date{DATE}: {e}")
        
    def filter_flights_by_departure_time(self, flight_data):
        '''
        Helper function to find_next_availible_flight
        flights: flight dictionary of all avalible flights for the day
        returns dictionary in of next avalible flights
        '''
        # Get the current system time
        current_time = datetime.datetime.now()

        # Initialize a list to store filtered flights
        filtered_flights = []

        # Loop through the flight data
        for flight in flight_data:
            # Parse the departure time from the flight data (changing everything to offset naive for the comparison)
            departure_time_str = flight["departureTime"]
            departure_time = datetime.datetime.fromisoformat(departure_time_str)

            # Check if the flight's departure time is in the future
            if departure_time.astimezone(pytz.utc) > current_time.astimezone(pytz.utc):
                filtered_flights.append(flight)
        return filtered_flights

 
flight_engine_backend = FlightEngine()
# data = flight_engine_backend.get_users_flight_details("2023-11-07", "2524")
data = flight_engine_backend.find_next_availible_flight("DFW", "PHL")
formatted_json = json.dumps(data, indent=4)
print(formatted_json)

