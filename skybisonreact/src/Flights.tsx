import React from 'react';

interface FlightProps {
  airlineLogo: string;
  airlineName: string;
  departureTime: string;
  arrivalTime: string;
  stops: string;
}

const Flight: React.FC<FlightProps> = ({ airlineLogo, airlineName, departureTime, arrivalTime, stops }) => {
  return (
    <div className="flight">
      <img src={airlineLogo} alt={`${airlineName} Logo`} />
      <h2>{airlineName}</h2>
      <p>{departureTime} → {arrivalTime}</p>
      <p>{stops}</p>
    </div>
  );
};

export default Flight;
