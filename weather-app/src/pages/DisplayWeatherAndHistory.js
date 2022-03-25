import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import TodayWeather from "../components/TodayWeather";
import SearchHistory from "../components/SearchHistory";

const DisplayWeatherAndHistory = () => {
  const [apiKeyValidation, setApiKeyValidation] = useState(true);
  const [searchFailedSwitch, setSearchFailedSwtich] = useState("");
  const [todayWeatherDetail, setTodayWeatherDetail] = useState({});

  //Fetch the results from API from input fields upon button click
  const apiCallSearchButton = (apiCallCredentials) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${apiCallCredentials.city},${apiCallCredentials.country}&appid=${apiCallCredentials.apiKey}`
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
      <SearchBar
        apiCallSearchButton={apiCallSearchButton}
        apiKeyValidation={apiKeyValidation}
      />
      {searchFailedSwitch === false && (
        <>
          <TodayWeather todayWeatherDetail={todayWeatherDetail} />
          <SearchHistory latestWeatherDetail={todayWeatherDetail} />
        </>
      )}
    </div>
  );
};

export default DisplayWeatherAndHistory;
