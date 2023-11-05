import React, { useState } from 'react';
import FlightList from './FlightList';
import { FlightInfo } from './FlightInfo';
import './SearchPage.css';
import SouthwestLogo from './Graphics/Southwest-logo.jpg'
import DeltaLogo from './Graphics/DeltaLogo.png'
import UnitedLogo from './Graphics/United-Airlines-Logo.png'


const initialFlights: FlightInfo[] = [
    {
        airlineLogo: SouthwestLogo, 
        airlineName: "Southwest Airlines",
        departureTime: '9:55 AM',
        arrivalTime: '3:00 PM',
        origin: 'NYC',
        destination: 'ATL',
        stops: '1 Stop (CHI)',
      },
      {
        airlineLogo: DeltaLogo, 
        airlineName: "Delta Airlines",
        departureTime: '8:29 PM',
        arrivalTime: '10:59 PM',
        origin: 'NYC',
        destination: 'ATL',
        stops: 'Nonstop',
      },
      {
        airlineLogo: UnitedLogo, 
        airlineName: "United Airlines",
        departureTime: '3:59 PM',
        arrivalTime: '6:40 PM',
        origin: 'NYC',
        destination: 'ATL',
        stops: 'Nonstop',
      },
];

const SearchPage: React.FC = () => {
    const [visibleFlights, setVisibleFlights] = useState<FlightInfo[]>(initialFlights);
  
    return (
      <div className="SearchPage"> 
        <FlightList flights={visibleFlights} />
      </div>
    );
  };
  

export default SearchPage;
