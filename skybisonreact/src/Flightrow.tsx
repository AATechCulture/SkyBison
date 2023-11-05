import React from 'react';
import { FlightInfo } from './FlightInfo';

interface FlightRowProps {
  flight: FlightInfo;
}

const FlightRow: React.FC<FlightRowProps> = ({ flight }) => {
  return (
    <div className="flightRow">
      <img src={flight.airlineLogo} alt={`${flight.airlineName} logo`} />
      <div>{flight.airlineName}</div>
      <div>{`${flight.origin} -> ${flight.destination}`}</div>
      <div>{`${flight.departureTime} -> ${flight.arrivalTime}`}</div>
      <div>{flight.stops}</div>
    </div>
  );
};

export default FlightRow;