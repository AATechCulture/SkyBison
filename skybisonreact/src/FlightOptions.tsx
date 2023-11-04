// FlightOption.tsx
import React from 'react';
import { FlightOptionProps } from './FlightOptionsProps';
import './FlightOption.css'; // Ensure you create a corresponding CSS file

const FlightOption: React.FC<FlightOptionProps> = ({
  departureAirport,
  arrivalAirport,
  departureTime,
  arrivalTime,
  flightNumber,
  gate,
  stops,
  prices,
}) => {
  return (
    <div className="flight-option">
      <div className="airports">
        <div>{departureAirport}</div>
        <div>{arrivalAirport}</div>
      </div>
      <div className="flight-times">
        {departureTime} → {arrivalTime}
      </div>
      <div className="flight-details">
        <span>Flight</span>
        <span>{flightNumber}</span>
      </div>
      <div className="flight-gate">
        <span>Gate</span>
        <span>{gate}</span>
      </div>
      <div className="flight-stops">
        {stops}
      </div>
      <div className="flight-prices">
        <div className="price first-class">First: ${prices.firstClass}</div>
        <div className="price business">Business: ${prices.business}</div>
        <div className="price main-cabin">Main Cabin: ${prices.mainCabin}</div>
      </div>
    </div>
  );
};

export default FlightOption;
