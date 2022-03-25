import React, { useState } from "react";

const SearchBar = (props) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  //input state for searchbar is kept here to only allow this component to render upon input and not affect the other components
  const apiCallCredentials = { city: city, country: country };
  return (
    <div>
      <div className="api-key">
        <form>
          <label htmlFor="api-key-box">Api Key: </label>
          <input
            type="text"
            value={props.apiKey}
            onChange={(event) => {
              props.setApiKey(event.target.value);
            }}
            id="api-key-box"
          />
        </form>
        {props.apiKeyValidation === false && <p>Api key error</p>}
      </div>
      <div className="search-bar">
        <form>
          <label htmlFor="city-search-box">City: </label>
          <input
            type="text"
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
            }}
            id="city-search-box"
          />
          <label htmlFor="country-search-box">Country: </label>
          <input
            type="text"
            value={country}
            onChange={(event) => {
              setCountry(event.target.value);
            }}
            id="country-search-box"
          />
        </form>
        <button
          onClick={() => {
            props.apiCallSearchButton(apiCallCredentials, props.apiKey);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            setCity("");
            setCountry("");
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
