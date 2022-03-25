import React from "react";

const GetCurrentDate = () => {
  let newDate = new Date();
  let currentDate = newDate
    .toISOString()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("-");

  return (
    <>
      <span>{currentDate}</span>
    </>
  );
};

export default GetCurrentDate;
