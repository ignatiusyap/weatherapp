import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import TodayWeather from "../components/TodayWeather";
import SearchHistory from "../components/SearchHistory";
import Statecontext from "../context/state-context";

const DisplayWeatherAndHistory = () => {
  const [apiKeyValidation, setApiKeyValidation] = useState(true);
  const [searchFailedSwitch, setSearchFailedSwtich] = useState("");
  const [todayWeatherDetail, setTodayWeatherDetail] = useState({});
  const [apiKey, setApiKey] = useState("");

  //Fetch the results from API from input fields upon button click
  const apiCallSearchButton = (apiCallCredentials, apiKey) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${apiCallCredentials.city},${apiCallCredentials.country}&appid=${apiKey}`
      )
      .then((res) => {
        setTodayWeatherDetail(res.data);
        setSearchFailedSwtich(false);
      })
      .catch((error) => {
        console.log(error);
        if (error === 401) {
          setApiKeyValidation(false);
        }
        if (error === 404) {
          setSearchFailedSwtich(true);
        }
        console.log(error);
      });
  };
  return (
    <div>
      <Statecontext.Provider
        value={{ todayWeatherDetail, setTodayWeatherDetail, apiKey }}
      >
        <SearchBar
          apiCallSearchButton={apiCallSearchButton}
          apiKeyValidation={apiKeyValidation}
          apiKey={apiKey}
          setApiKey={setApiKey}
        />
        <h2>Today's Weather</h2>
        {searchFailedSwitch === false && (
          <TodayWeather todayWeatherDetail={todayWeatherDetail} />
        )}
        <h2>Seach History</h2>
        {searchFailedSwitch === false && (
          <SearchHistory
            latestWeatherDetail={todayWeatherDetail}
            searchFailedSwitch={searchFailedSwitch}
          />
        )}
      </Statecontext.Provider>
    </div>
  );
};

export default DisplayWeatherAndHistory;
