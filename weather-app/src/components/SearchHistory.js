import React, { useEffect, useState } from "react";
import SearchHistoryEntry from "./SearchHistoryEntry";
import { v4 as uuidv4 } from "uuid";

const SearchHistory = (props) => {
  const [historyOfSearch, setHistoryOfSearch] = useState([]);
  const latest = props.latestWeatherDetail;

  useEffect(() => {
    setHistoryOfSearch([...historyOfSearch, latest]);
  }, [latest]);

  return (
    <div>
      {props.searchFailedSwitch === false && (
        <SearchHistoryEntry historyOfSearch={historyOfSearch} key={uuidv4()} />
      )}
      {console.log(historyOfSearch)}
    </div>
  );
};

export default SearchHistory;
