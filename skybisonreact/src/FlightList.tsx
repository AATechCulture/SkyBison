import React from 'react';
import { FlightInfo } from './FlightInfo';
import './SearchPage.css'; // assuming your CSS file is named SearchPage.css

// Define the props type for the component using TypeScript
interface FlightListProps {
  flights: FlightInfo[];
}

const FlightList: React.FC<FlightListProps> = ({ flights }) => {
  return (
    <div>
      {flights.map((flight, index) => (
        <div key={index} className="flight-container">
          <img src={flight.airlineLogo} className="small-logo" alt={`${flight.airlineName} Logo`} />
          <div className="flight-details">
            <h3>{flight.airlineName}</h3>
            <p><strong>From:</strong> {flight.origin} <strong>To:</strong> {flight.destination}</p>
            <p><strong>Departure:</strong> {flight.departureTime} <strong>Arrival:</strong> {flight.arrivalTime}</p>
            <p><strong>Stops:</strong> {flight.stops}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlightList;
