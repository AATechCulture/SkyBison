import React from 'react';
import './FlightStatus.css'; // Make sure to create a corresponding CSS file

type FlightStatusProps = {
  status: 'On time' | 'Delayed' | 'Canceled';
  delayTime?: number; // in minutes, only needed if status is 'Delayed'
};

const FlightStatus: React.FC<FlightStatusProps> = ({ status, delayTime }) => {
  let statusColor = '';
  let statusText = '';

  switch (status) {
    case 'On time':
      statusColor = 'green';
      statusText = 'On time';
      break;
    case 'Delayed':
      statusColor = 'yellow';
      statusText = `Delayed ${delayTime} min`;
      break;
    case 'Canceled':
      statusColor = 'red';
      statusText = 'Canceled';
      break;
    default:
      break;
  }

  return (
    <div className={`flight-status ${statusColor}`}>
      STATUS: {statusText}
    </div>
  );
};

export default FlightStatus;
