import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import TodayWeather from "../components/TodayWeather";
import SearchResults from "../components/SearchResults";

const DisplayWeatherAndHistory = () => {
  const [apiKeyValidation, setApiKeyValidation] = useState(true);
  const [searchFailedSwitch, setSearchFailedSwtich] = useState(false);
  //Fetch the results from API from input fields upon button click
  const apiCallSearchButton = (apiCallCredentials) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${apiCallCredentials.city},${apiCallCredentials.country}&appid=${apiCallCredentials.apiKey}`
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        if (error === 401) {
          setApiKeyValidation(false);
        }
        if (error === 404) {
          setSearchFailedSwtich(true);
        }
      });
  };
  return (
    <div>
      <SearchBar
        apiCallSearchButton={apiCallSearchButton}
        apiKeyValidation={apiKeyValidation}
      />
      <SearchResults />
    </div>
  );
};

export default DisplayWeatherAndHistory;
