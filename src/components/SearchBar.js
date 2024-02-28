import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setTerm(value);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search countries by name, population, or climate..."
        value={term}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
