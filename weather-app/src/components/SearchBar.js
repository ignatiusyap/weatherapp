import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form>
        <label for="city-search-box">City: </label>
        <input
          type="text"
          value={city}
          onChange={(event) => {
            event.target.value;
          }}
          id="city-search-box"
        />
        <label for="country-search-box">Country: </label>
        <input
          type="text"
          value={country}
          onChange={(event) => {
            event.target.value;
          }}
          id="country-search-box"
        />
      </form>
    </div>
  );
};

export default SearchBar;
