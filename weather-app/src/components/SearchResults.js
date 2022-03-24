import React from "react";
import axios from "axios";
import TodayWeather from "./TodayWeather";
import SearchHistory from "./SearchHistory";

const SearchResults = () => {
  //Fetch the results from API from input fields upon button click
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
    )
    .then((res) => {
      if (res.cod === "404") {
        //return state to be error message
      } else {
        //set state to be the data
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <>
      <TodayWeather />
      <SearchHistory />
    </>
  );
};

export default SearchResults;
