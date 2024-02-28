import React, { useState, useEffect } from 'react';
import CountryList from './components/CountryList ';
import SearchBar from './components/SearchBar';
import './App.css'


const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) {
        throw new Error('Failed to fetch countries');
      }
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = term => {
    setSearchTerm(term);
    const filtered = countries.filter(country =>
      country.name.common.toLowerCase().includes(term.toLowerCase()) ||
      country.population.toString().includes(term) ||
      (country.climate && country.climate.includes(term))
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className="app">
      <header>
        <h1>Country Search</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <main>
        <CountryList countries={filteredCountries} />
      </main>
    </div>
  );
};

export default App;
