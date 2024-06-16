// import { Logo, Modals, Search1, SearchBar } from '../../components';
import React from 'react';
import { Logo, FeedbackButton, SearchFunct } from '../../components';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ data }) => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <Logo />
        </Link>
        {/* <SearchBar data={data} className="searchbar" /> */}
        <SearchFunct data={data} className="searchbar" />

        <FeedbackButton title={'Give Feedback'} />
      </nav>
      {/* <SearchBar className="searchbar-moblie" /> */}
      <SearchFunct data={data} className="searchbar-moblie" />
    </>
  );
};

export default NavBar;
