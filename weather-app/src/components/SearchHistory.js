import React, { useEffect, useState } from "react";
import SearchHistoryEntry from "./SearchHistoryEntry";
const SearchHistory = (props) => {
  const [historyOfSearch, setHistoryOfSearch] = useState([]);
  const latest = props.latestWeatherDetail;

  useEffect(() => {
    setHistoryOfSearch((prevState) => [...prevState, latest]);
  }, [latest]);

  return (
    <div>
      {props.todayWeatherDisplay}
      <h2>Search History</h2>
      <ol>
        <SearchHistoryEntry
          setSearchFailedSwitch={props.setSearchFailedSwitch}
          historyOfSearch={historyOfSearch}
          deleteEntry={setHistoryOfSearch}
        />
      </ol>
    </div>
  );
};

export default SearchHistory;
