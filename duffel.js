const axios = require('axios');

function searchFlights(origin, destination, departureDate, passengers) {
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
      'Authorization': 'Bearer duffel_test_9ixI6o25Ua7EvCZ1TStQnNonimlussC-J8w3pVuMRqI' 
    },
    data: requestData
  };

axios.request(config)
  .then((response) => {
    if (response.data && response.data.data && Array.isArray(response.data.data.offers)) {
      const allOffers = response.data.data.offers;
      const filteredOffers = allOffers.filter(offer => {
        // Assuming each offer has at least one slice and each slice has at least one segment
        return !offer.slices.some(slice => 
          slice.segments.some(segment => 
            segment.operating_carrier.name === 'American Airlines'
          )
        );
      });

      // Get only the first 5 offers after filtering
      const firstFiveOffers = filteredOffers.slice(0, 5);

      firstFiveOffers.forEach((offer, index) => {
        // Log the offer details here
        console.log(`Offer ${index + 1}:`, offer);
      });
    } else {
      console.error('Unexpected data structure for offers:', JSON.stringify(response.data, null, 2));
    }
  })
  .catch((error) => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });

}

// Test:
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
