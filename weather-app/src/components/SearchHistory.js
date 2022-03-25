import React, { useEffect, useState } from "react";
import SearchHistoryEntry from "./SearchHistoryEntry";
const SearchHistory = (props) => {
  const [historyOfSearch, setHistoryOfSearch] = useState([]);
  const latest = props.latestWeatherDetail;

  useEffect(() => {
    setHistoryOfSearch([...historyOfSearch, latest]);
  }, [latest]);

  return (
    <div>
      <ol>
        {props.searchFailedSwitch === false && (
          <SearchHistoryEntry
            historyOfSearch={historyOfSearch}
            deleteEntry={setHistoryOfSearch}
          />
        )}
      </ol>
    </div>
  );
};

export default SearchHistory;
