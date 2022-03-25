import React from "react";

const SearchHistoryEntry = ({ historyOfSearch }) => {
  return (
    <>
      {historyOfSearch?.map((each, index) => {
        return (
          <li key={each.sys.id}>
            <span>
              {each.name}, {each.sys.country}
            </span>
            <div>
              <button>Search</button>
              <button>Delete</button>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default SearchHistoryEntry;
