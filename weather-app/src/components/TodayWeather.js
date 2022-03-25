const TodayWeather = (props) => {
  const today = props.todayWeatherDetail;

  return (
    <div>
      <p>
        {today.name},{today.sys.country}
      </p>
      <h2>{today.weather[0].main}</h2>
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
      <p></p>
    </div>
  );
};

export default TodayWeather;
