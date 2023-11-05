
from db_connection import accounts, trips, flights
from data import generate_account

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

flights_data = [
    {
        'flight_id': 'F001',
        'max_passenger_count': 150,
        'departure_time': '2023-11-10T10:00:00',
        'arrival_time': '2023-11-10T12:00:00',
        'trip_id': 1,
        'status': "On Time"
    },
    {
        'flight_id': 'G032',
        'max_passenger_count': 150,
        'departure_time': '2023-12-29T09:00:00',
        'arrival_time' : '2024-01-08T03:00:00',
        'trip_id' : 2,
        'status' : "Delayed"
    }
    # Add more flight data as needed
]

flights.insert_many(flights_data)

print("Database populated with accounts, associated cards, and trips.")
