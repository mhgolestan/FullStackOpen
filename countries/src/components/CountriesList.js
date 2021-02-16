import React from "react";
import Weather from "./Weather";

const CountriesList = ({ countriesToShow, setFilteredCountries }) => {
  const handleClick = (countryName) => {
    setFilteredCountries(countryName);
  };

  if (countriesToShow.length === 250) {
    return <div>Insert the name of the country</div>;
  } else if (countriesToShow.length === 1) {
    // console.log(typeof countriesToShow[0].flag);

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

export default CountriesList;
