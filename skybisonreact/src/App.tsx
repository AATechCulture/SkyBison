import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import FlightMap from './FlightMap';
import FlightStatus from './FlightStatus';
import FlightOption from './FlightOptions';
import SearchFlightButton from './SearchFlightButton';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './LoginComponent';
import Searching from './SearchPage';


const App: React.FC = () => {

  const flightStatus = 'Delayed'; // This would be dynamic in a real application
  const delayTime = 45; // Also dynamic

  const flightData = {
    departureTime: '2:05 PM',
    arrivalTime: '4:39 PM',
    departureAirport: 'JFK',
    arrivalAirport: 'ATL',
    flightNumber: 2464,
    gate: 'C24',
    stops: 'Nonstop',
    prices: {
      firstClass: 827,
      business: 624,
      mainCabin: 365
    }
  };

  const flightData2 = {
    departureTime: '12:45 PM',
    arrivalTime: '3:19 AM',
    departureAirport: 'JFK',
    arrivalAirport: 'ATL',
    flightNumber: 1213,
    gate: 'A15',
    stops: 'Nonstop',
    prices: {
      firstClass: 900,
      business: 728,
      mainCabin: 564
    }
  };

  const flightData3 = {
    departureTime: '3:26 PM',
    arrivalTime: '9:06 AM',
    departureAirport: 'JFK',
    arrivalAirport: 'ATL',
    flightNumber: 8516,
    gate: 'B03',
    stops: '1 Stop (CHI)',
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
              <FlightMap status={flightStatus} flightPath={[[40.6413, -73.7781], [33.6404, -84.4198]]} />
              <FlightStatus status={flightStatus} delayTime={delayTime} />
              <FlightOption {...flightData} />
              <FlightOption {...flightData2} />
              <FlightOption {...flightData3} />
              <div>In a hurry? Search for other flights leaving around your original departure time.</div>
              <SearchFlightButton redirectUrl="/Searchpage" />
            </>
          } />
          <Route path = "/SearchPage" element ={<Searching />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
