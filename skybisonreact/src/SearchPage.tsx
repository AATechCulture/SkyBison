import React, { useState } from 'react';
import FlightList from './FlightList';
import { FlightInfo } from './FlightInfo';
import './SearchPage.css';


const initialFlights: FlightInfo[] = [
    {
        airlineLogo: "path_to_southwest_logo.png", 
        airlineName: "Southwest",
        departureTime: "6:50 PM",
        arrivalTime: "3:00 AM",
        origin: "LAX",
        destination: "JFK",
        stops: "Nonstop",
      },
      {
        airlineLogo: "path_to_delta_logo.png", 
        airlineName: "Delta",
        departureTime: "8:50 PM",
        arrivalTime: "5:00 AM",
        origin: "LAX",
        destination: "JFK",
        stops: "1 Stop (HOU)",
      },
];

const SearchPage: React.FC = () => {
    const [visibleFlights, setVisibleFlights] = useState<FlightInfo[]>(initialFlights);
  
    return (
      <div className="SearchPage">  {/* Apply the SearchPage class here */}
        <FlightList flights={visibleFlights} />
      </div>
    );
  };
  

export default SearchPage;
