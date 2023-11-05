// FlightList.tsx
import React from 'react';
import FlightRow from './Flightrow';
import { FlightInfo } from './FlightInfo';

interface FlightListProps {
  flights: FlightInfo[];
}

const FlightList: React.FC<FlightListProps> = ({ flights }) => {
  return (
    <div>
      {flights.map((flight, index) => (
        <FlightRow key={index} flight={flight} />
      ))}
    </div>
  );
};

export default FlightList;
