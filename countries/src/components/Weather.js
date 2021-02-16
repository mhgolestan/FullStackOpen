import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ city }) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [cityData, setCityData] = useState({
    temperature: 0,
    icon: "",
    wind_speed: 0,
    wind_direction: 0,
  });

  useEffect(
    () =>
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`
        )
        .then((response) => {
          const newCityData = {
            temperature: response.data.current.temperature,
            icon: response.data.current.weather_icons,
            wind_speed: response.data.current.wind_speed,
            wind_direction: response.data.current.wind_dir,
          };

          setCityData(newCityData);
        }),
    []
  );
  console.log(cityData.icon[0]);
  return (
    <div>
      <h2>Weather in {city}</h2>
      <p>Temperature: {cityData.temperature}</p>
      <img str={cityData.icon[0]} alt="icon" />
      <p>
        <strong>Wind</strong> {cityData.wind_speed} mph direction{" "}
        {cityData.wind_direction}
      </p>
    </div>
  );
};

export default Weather;
