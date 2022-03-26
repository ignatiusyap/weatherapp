import axios from "axios";
import React, { useContext } from "react";
import Statecontext from "../context/state-context";
import GetCurrentTime from "./GetCurrentTime";

const SearchHistoryEntry = ({
  historyOfSearch,
  deleteEntry,
  setSearchFailedSwitch,
}) => {
  const { setTodayWeatherDetail, apiKey } = useContext(Statecontext);

  const apiSearchEntry = (city, country) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
      )
      .then((res) => {
        setTodayWeatherDetail(res.data);
        setSearchFailedSwitch(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteSearchEntry = (index, arr) => {
    deleteEntry((prevState) =>
      prevState.filter((element, indexOther) => indexOther !== index)
    );
  };
  return (
    <>
      {historyOfSearch?.map((each, index, arr) => {
        return (
          <li key={index} id={index}>
            <span>
              {each.name}, {each.sys.country}
            </span>
            <div>
              <span>
                <GetCurrentTime />
              </span>
              <button
                onClick={() => apiSearchEntry(each.name, each.sys.country)}
              >
                Search
              </button>
              <button onClick={() => deleteSearchEntry(index, arr)}>
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default SearchHistoryEntry;
