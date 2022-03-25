import React, { useEffect, useState } from "react";
import SearchHistoryEntry from "./SearchHistoryEntry";

const SearchHistory = (props) => {
  const [historyOfSearch, setHistoryOfSearch] = useState([]);
  const latest = props.latestWeatherDetail;
  //   useEffect(() => {
  //     setHistoryOfSearch(...historyOfSearch, latest);
  //   }, [latest]);

  return <div>{/* <SearchHistoryEntry {...historyOfSearch} /> */}</div>;
};

export default SearchHistory;
