import React from 'react';
import './Header.css'; // Import the CSS for styling

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="alert">
        Daylight Saving Time is ending
        <span className="alert-details">
          If you're traveling November 5, 2023, please wait until 23 hours before scheduled departure to check-in.
        </span>
      </div>
      <nav className="navbar">
        <div className="logo">American 🛫</div>
        <div className="nav-items">
          <a href="/plan-travel">Plan travel</a>
          <a href="/travel-information">Travel information</a>
          <a href="/advantage">AAdvantage®</a>
        </div>
        <div className="nav-actions">
          <button className="btn-login">Log in</button>
          <button className="btn-join">Join</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
