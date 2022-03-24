import React from "react";
import axios from "axios";
import TodayWeather from "./TodayWeather";
import SearchHistory from "./SearchHistory";

const SearchResults = () => {
  return (
    <>
      <TodayWeather />
      <SearchHistory />
    </>
  );
};

export default SearchResults;
