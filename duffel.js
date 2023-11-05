const axios = require('axios');

async function searchFlights(origin, destination, departureDate, passengers) {
  let requestData = JSON.stringify({
    "data": {
      "slices": [
        {
          "origin": origin,
          "destination": destination,
          "departure_date": departureDate
        }
      ],
      "passengers": passengers,
    }
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.duffel.com/air/offer_requests',
    headers: { 
      'Accept-Encoding': 'gzip', 
      'Accept': 'application/json', 
      'Duffel-Version': 'v1', 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer duffel_test_9ixI6o25Ua7EvCZ1TStQnNonimlussC-J8w3pVuMRqI' // Replace with your actual token
    },
    data: requestData
  };

  try {
    const response = await axios.request(config);
    if (response.data && response.data.data && Array.isArray(response.data.data.offers)) {
      const allOffers = response.data.data.offers;
      const flightOptions = allOffers.map(offer => {
        // Assuming each offer has at least one slice and each slice has at least one segment
        const firstSlice = offer.slices[0];
        const firstSegment = firstSlice.segments[0];
        const lastSegment = firstSlice.segments[firstSlice.segments.length - 1];
        const airlineName = offer.owner ? offer.owner.name : 'Unknown Airline';


        // Map the API response to the FlightOptionProps structure
        const flightOption = {
          airline: airlineName,
          departureTime: firstSegment.departing_at, // Replace with actual field name if different
          arrivalTime: lastSegment.arriving_at, // Replace with actual field name if different
          flightNumber: parseInt(firstSegment.marketing_carrier_flight_number, 10),
          departureAirport: origin,
          arrivalAirport: destination,
          gate: firstSegment.departure_gate || 'N/A', // Assuming gate information is optional
          stops: firstSlice.segments.length - 1, // Assuming direct flight has 1 segment
          prices: {
            firstClass: 0, // You will need to map these based on the API response
            business: 0, // You will need to map these based on the API response
            mainCabin: parseFloat(offer.total_amount) // Assuming total_amount is for main cabin
          }
        };

        return flightOption;
      });

      // Return the mapped flight options
      return flightOptions;
    } else {
      console.error('Unexpected data structure for offers:', JSON.stringify(response.data, null, 2));
      return []; // Return an empty array if the structure is not as expected
    }
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    return []; // Return an empty array in case of error
  }
}

// Test:
// THESE WILL BE INPUT DYNAMICALLY 
(async () => {
  try {
    const flightOptions = await searchFlights(
      'NYC', // Origin
      'ATL', // Destination
      '2024-04-21', // Departure Date
      [ // Passengers
        { "type": "adult" },
        { "type": "adult" },
        { "age": 1 }
      ]
    );
    console.log(flightOptions);
  } catch (error) {
    console.error('Failed to search flights:', error);
  }
})();
