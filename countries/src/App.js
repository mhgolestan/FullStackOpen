import React, { useEffect, useState } from "react";
import axios from "axios";

const CountriesList = ({ countriesToShow, setFilteredCountries }) => {
  const handleClick = (countryName) => {
    setFilteredCountries(countryName);
  };

  if (countriesToShow.length === 0) {
    return <div></div>;
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
