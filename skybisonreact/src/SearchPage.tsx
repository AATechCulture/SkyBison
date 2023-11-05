import React, { useState } from 'react';
import FlightList from './FlightList';
import { FlightInfo } from './FlightInfo';
import './SearchPage.css';
import SouthwestLogo from './Graphics/Southwest-logo.jpg'
import DeltaLogo from './Graphics/DeltaLogo.png'


const initialFlights: FlightInfo[] = [
    {
        airlineLogo: SouthwestLogo, 
        airlineName: "Southwest",
        departureTime: "6:50 PM",
        arrivalTime: "3:00 AM",
        origin: "LAX",
        destination: "JFK",
        stops: "Nonstop",
      },
      {
        airlineLogo: DeltaLogo, 
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
      <div className="SearchPage"> 
        <div className = "small-logo"></div> {/* Apply the SearchPage class here */}
        <FlightList flights={visibleFlights} />
      </div>
    );
  };
  

export default SearchPage;
