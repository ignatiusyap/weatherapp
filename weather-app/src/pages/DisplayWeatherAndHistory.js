import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import TodayWeather from "../components/TodayWeather";
import SearchHistory from "../components/SearchHistory";
import Statecontext from "../context/state-context";
import SearchCityCountryFail from "../components/SearchCityCountryFail";
//Statecontext used to allow the TodayWeather component to render in Search History Entry
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
        if (error.response.status === 401) {
          setApiKeyValidation(false);
        }
        if (error.response.status === 404) {
          setSearchFailedSwtich(true);
        }
        console.log(error);
      });
  };
  //Conditional rendering to prevent the componenet from loading when API call has not been done
  return (
    <div>
      <Statecontext.Provider
        value={{ todayWeatherDetail, setTodayWeatherDetail, apiKey }}
      >
        <h2>Today's Weather</h2>
        <SearchBar
          apiCallSearchButton={apiCallSearchButton}
          apiKeyValidation={apiKeyValidation}
          apiKey={apiKey}
          setApiKey={setApiKey}
        />
        {searchFailedSwitch === false && (
          <TodayWeather todayWeatherDetail={todayWeatherDetail} />
        )}
        {searchFailedSwitch === true && <SearchCityCountryFail />}
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
