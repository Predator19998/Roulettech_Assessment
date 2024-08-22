import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <FormControl
      type="text"
      placeholder="Search recipes..."
      value={query}
      onChange={handleInputChange}
      className="w-100"
    />
  );
};

export default SearchBar;