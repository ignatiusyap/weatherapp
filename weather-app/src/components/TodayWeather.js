import GetCurrentDate from "./GetCurrentDate";
import GetCurrentTime from "./GetCurrentTime";

const TodayWeather = (props) => {
  const today = props.todayWeatherDetail;
  //span used for inline element
  return (
    <div>
      <p>
        {today.name},{today.sys.country}
      </p>
      <h1>{today.weather[0].main}</h1>
      <p>
        <span>Description: </span>
        {today.weather[0].description}
      </p>
      <p>
        <span>Temperature: </span>
        {today.main.temp_min} K to {today.main.temp_max} K
      </p>
      <p>
        <span>Humidity: </span>
        {today.main.humidity} %
      </p>
      <span>
        <GetCurrentDate />
        <GetCurrentTime />
      </span>
    </div>
  );
};

export default TodayWeather;
