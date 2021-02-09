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
            temeperature: response.data.current.temperature,
            icon: response.data.current.weather_icons,
            wind_speed: response.data.current.wind_speed,
            wind_direction: response.data.current.wind_dir,
          };

          setCityData(newCityData);
        }),
    []
  );
  return (
    <div>
      <h2>Weather in {city}</h2>
      <p>Temperature: {cityData.temeperature}</p>
      <img str={cityData.icon} alt="icon"></img>
      <p>
        <strong>Wind</strong> {cityData.wind_speed} mph direction{" "}
        {cityData.wind_direction}
      </p>
    </div>
  );
};

const CountriesList = ({ countriesToShow, setFilteredCountries }) => {
  const handleClick = (countryName) => {
    setFilteredCountries(countryName);
  };

  if (countriesToShow.length === 250) {
    return <div>Insert the name of the country</div>;
  } else if (countriesToShow.length === 1) {
    return (
      <div>
        <h1>{countriesToShow[0].name}</h1>
        <p>Capital: {countriesToShow[0].capital}</p>
        <p>Population: {countriesToShow[0].population}</p>
        <h2>Languages:</h2>
        <ul>
          {countriesToShow[0].languages.map((language, i) => (
            <li key={i}>{language.name}</li>
          ))}
        </ul>
        <img src={countriesToShow[0].flag} alt="flag" />
        <Weather city={countriesToShow[0].capital} />
      </div>
    );
  } else if (countriesToShow.length > 10) {
    return <p>{"Too many matches"}</p>;
  } else {
    return (
      <div>
        <ul>
          {countriesToShow.map((country, i) => (
            <li key={i}>
              {country.name}{" "}
              {<button onClick={() => handleClick(country.name)}>Show</button>}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilteredCountries = (event) => {
    setFilteredCountries(event.target.value);
  };

  const countriesToShow = countries.filter((country) =>
    country.name.includes(filteredCountries)
  );

  return (
    <div>
      Find countries
      <input value={filteredCountries} onChange={handleFilteredCountries} />
      <CountriesList
        countriesToShow={countriesToShow}
        setFilteredCountries={setFilteredCountries}
      />
    </div>
  );
};

export default App;
