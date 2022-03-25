import React from "react";

const SearchHistoryEntry = ({ historyOfSearch, deleteEntry }) => {
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
              <button>Search</button>
              <button onClick={() => deleteSearchEntry(index)}>Delete</button>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default SearchHistoryEntry;
