import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [aaNumber, setAaNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authenticateUser = () => {
    // Here you would have an API call to your backend for authentication
    // For now, we'll just simulate successful login if fields are not empty
    if (aaNumber && firstName && lastName) {
      setIsLoggedIn(true);
    } else {
      alert('Please enter all fields');
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    authenticateUser();
  };

  if (isLoggedIn) {
    // Redirect to the FlightMap page on successful login
    return <Navigate to="/flightmap" replace />;
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>AA Number:</label>
          <input
            type="text"
            value={aaNumber}
            onChange={(e) => setAaNumber(e.target.value)}
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
