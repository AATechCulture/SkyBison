import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import FlightMap from './FlightMap';
import FlightStatus from './FlightStatus';
import FlightOption from './FlightOptions';
import SearchFlightsButton from './SearchFlightButton';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './LoginComponent';
import Searching from './SearchPage';


const App: React.FC = () => {

  const flightStatus = 'Delayed'; // This would be dynamic in a real application
  const delayTime = 45; // Also dynamic

  const flightData = {
    departureTime: '9:38 PM',
    arrivalTime: '6:00 AM',
    departureAirport: 'LAX',
    arrivalAirport: 'JFK',
    flightNumber: 1598,
    gate: 'C24',
    stops: 'Nonstop',
    prices: {
      firstClass: 827,
      business: 624,
      mainCabin: 365
    }
  };

  const flightData2 = {
    departureTime: '10:38 PM',
    arrivalTime: '7:00 AM',
    departureAirport: 'LAX',
    arrivalAirport: 'JFK',
    flightNumber: 2134,
    gate: 'A15',
    stops: 'Nonstop',
    prices: {
      firstClass: 900,
      business: 728,
      mainCabin: 564
    }
  };

  const flightData3 = {
    departureTime: '11:50 PM',
    arrivalTime: '8:00 AM',
    departureAirport: 'LAX',
    arrivalAirport: 'JFK',
    flightNumber: 8516,
    gate: 'B03',
    stops: 'Nonstop',
    prices: {
      firstClass: 621,
      business: 430,
      mainCabin: 221
    }
  };


  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/FlightMap" element={
            <>
              <FlightMap status={flightStatus} flightPath={[[40.7128, -74.0060], [34.0522, -118.2437]]} />
              <FlightStatus status={flightStatus} delayTime={delayTime} />
              <FlightOption {...flightData} />
              <FlightOption {...flightData2} />
              <FlightOption {...flightData3} />
              <div>In a hurry? Search for other flights leaving around your original departure time.</div>
              <SearchFlightsButton redirectUrl="/Searchpage" />
            </>
         
          } />
          <Route path = "/SearchPage" element ={<Searching />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
