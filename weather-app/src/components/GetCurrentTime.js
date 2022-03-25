import React from "react";

const GetCurrentTime = () => {
  let newDate = new Date();
  let currentTime = newDate.toLocaleTimeString("en-US");
  return (
    <>
      <span>{currentTime}</span>
    </>
  );
};
export default GetCurrentTime;
