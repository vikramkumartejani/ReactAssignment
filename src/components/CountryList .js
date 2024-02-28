import React from 'react';

const CountryList = ({ countries }) => {
  return (
    <div className="country-list">
      {countries.map(country => (
        <div key={country.cca3} className="country">
          <h2>{country.name.common}</h2>
          <p>Population: {country.population}</p>
          <p>Capital: {country.capital}</p>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
