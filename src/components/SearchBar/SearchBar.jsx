import { Search } from '@mui/icons-material';
import './SearchBar.css';
import React from 'react';

const SearchBar = ({ className, data }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={className}>
        <input
          type="search"
          placeholder='Search an album of your choice'
        />
        <button type="submit" className="searchbar-icons">
          <Search />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;