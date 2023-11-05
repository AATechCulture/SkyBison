import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Navigate } from 'react-router-dom';
import './Login.css';
import AAlogo from './Graphics/AAlogo.png';
import QuikBookLogo from './Graphics/QuikBook.png';

const Login: React.FC = () => {
    const [aaNumber, setAaNumber] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const authenticateUser = () => {
    // Here you would have an API call to your backend for authentication
    // For now, we'll just simulate successful login if fields are not empty
    if (aaNumber && firstName && lastName) {
      setIsLoggedIn(true);
    } else {
      alert('Please enter all fields');
    }
  };


  const handleAAChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setAaNumber(event.target.value);
  };

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    authenticateUser();
  };
  if (isLoggedIn) {
    // Redirect to the FlightMap page on successful login
    return <Navigate to="/flightmap" replace />;
  }

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src= {AAlogo} alt="American Airlines" />
        <img src={QuikBookLogo} alt="Secondary Logo" className="secondary-logo" />
      </div>
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <label htmlFor="aaNumber">AA Number:</label>
          <input
            id="aaNumber"
            type="text"
            value={aaNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setAaNumber(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
