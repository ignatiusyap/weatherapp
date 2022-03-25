import React from "react";

const SearchHistoryEntry = ({ historyOfSearch }) => {
  return (
    <div>
      {historyOfSearch?.map((each, index) => {
        <span>
          {index + 1}
          {each.name}
          {console.log(each)}
        </span>;
      })}

      <div>search</div>
      <div>Delete</div>
    </div>
  );
};

export default SearchHistoryEntry;
