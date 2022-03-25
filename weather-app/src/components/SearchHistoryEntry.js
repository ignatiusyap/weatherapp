import axios from "axios";
import React, { useContext } from "react";
import Statecontext from "../context/state-context";

const SearchHistoryEntry = ({ historyOfSearch, deleteEntry }) => {
  const { setTodayWeatherDetail, apiKey } = useContext(Statecontext);

  const apiSearchEntry = (city, country) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
      )
      .then((res) => {
        setTodayWeatherDetail(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteSearchEntry = (index) => {
    deleteEntry((prevState) =>
      prevState.filter((element, indexOther) => indexOther !== index)
    );
  };
  return (
    <>
      {historyOfSearch?.map((each, index) => {
        return (
          <li key={index} id={index}>
            <span>
              {each.name}, {each.sys.country}
            </span>
            <div>
              <button
                onClick={() => apiSearchEntry(each.name, each.sys.country)}
              >
                Search
              </button>
              <button onClick={() => deleteSearchEntry(index)}>Delete</button>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default SearchHistoryEntry;
