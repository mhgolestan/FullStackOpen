import React, { useEffect, useState } from "react";
import axios from "axios";
import CountriesList from "./components/CountriesList";

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
