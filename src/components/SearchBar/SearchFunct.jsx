import { Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react';
import './SearchBar.css';
import { Search } from '@mui/icons-material';
import AlbumPlaylistDetails from '../AlbumPlaylistDetails/AlbumPlaylistDetails';

export default function SearchFunct({ className, data }) {
  const [values, setValues] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // console.log(data);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setValues(e.target.value);
  };

  const menuList = data.map((option) => ({
    title: option.title,
    image: option.image,
    follows: option.follows,
  }));

  return (
    <form onSubmit={handleSubmit}>
      <div className={className}>
        <Autocomplete
          fullWidth
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={menuList}
          getOptionLabel={(option) => option.title}
          renderOption={(props, option) => (
            <AlbumPlaylistDetails
              {...props}
              key={option.id}
              title={option.title}
              image={option.image}
              follows={option.follows}
            />
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="search"
              placeholder='search'
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
              value={values}
              onChange={handleChange}
            />
          )}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.defaultMuiPrevented = true;
            }
          }}
        />
        <button type="submit" className="searchbar-icons">
          <Search />
        </button>
      </div>
    </form>
  );
}