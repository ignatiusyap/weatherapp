import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import TodayWeather from "../components/TodayWeather";
import SearchHistory from "../components/SearchHistory";
import Statecontext from "../context/state-context";
import SearchCityCountryFail from "../components/SearchCityCountryFail";
import "./displayweatherandhistory.css";
//Statecontext used to allow the TodayWeather component to render in Search History Entry
const DisplayWeatherAndHistory = () => {
  const [apiKeyValidation, setApiKeyValidation] = useState(true);
  const [searchFailedSwitch, setSearchFailedSwitch] = useState("");
  const [activeSearchHistory, setActiveSearchHistory] = useState(false);
  const [todayWeatherDetail, setTodayWeatherDetail] = useState({});
  const [apiKey, setApiKey] = useState("");
  //activeSearchHistory prevents componenet from loading first while searchHistoryFailed helps with conditional rendering
  //todayWeather and search history are kept in two different states and componenet level
  //Fetch the results from API from input fields upon button click
  const apiCallSearchButton = (apiCallCredentials, apiKey) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${apiCallCredentials.city},${apiCallCredentials.country}&appid=${apiKey}`
      )
      .then((res) => {
        setTodayWeatherDetail(res.data);
        setSearchFailedSwitch(false);
        setActiveSearchHistory(true);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setApiKeyValidation(false);
        }
        // initial required for the scenario where user first search is wrong to render correctly
        if (error.response.status === 404) {
          if (searchFailedSwitch === "") {
            setSearchFailedSwitch("Initial");
            //setActiveSearchHistory(true);
          } else if (searchFailedSwitch === "Initial") {
            setSearchFailedSwitch("Initial");
          } else {
            setSearchFailedSwitch(true);
          }
        }
        console.log(error);
      });
  };
  //Conditional rendering to prevent the componenet from loading when API call has not been done
  return (
    <div className="weather-app">
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
        {searchFailedSwitch === "" && (
          <>
            <h2>Search History</h2>
            <p>No search history</p>
          </>
        )}
        {searchFailedSwitch === "Initial" && (
          <>
            <SearchCityCountryFail />
            <h2>Search History</h2>
            <p>No search history</p>
          </>
        )}
        {activeSearchHistory === true && (
          <SearchHistory
            latestWeatherDetail={todayWeatherDetail}
            setSearchFailedSwitch={setSearchFailedSwitch}
            todayWeatherDisplay={
              searchFailedSwitch ? (
                <SearchCityCountryFail />
              ) : (
                <TodayWeather todayWeatherDetail={todayWeatherDetail} />
              )
            }
          />
        )}
      </Statecontext.Provider>
    </div>
  );
};

export default DisplayWeatherAndHistory;
