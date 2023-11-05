import React from 'react';
import './SearchFlightButton.css'; // Make sure to create the corresponding CSS file for styling

type SearchFlightButtonProps = {
  redirectUrl: string; // URL to which the user should be redirected
}

const SearchFlightButton: React.FC<SearchFlightButtonProps> = ({ redirectUrl }) => {
  const handleSearchClick = () => {
    window.location.href = redirectUrl; // Redirects the user to the new webpage
  };

  return (
    <div className="search-flights-container">
      <button onClick={handleSearchClick} className="search-button">Search</button>
    </div>
  );
};

export default SearchFlightButton;