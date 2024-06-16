// import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import './HeroSection.css';

import headphone from '../../assets/vibrating-headphone 1.png';

const HeroSection = () => {
  return (
    <div className="header-contianer">
      <div className="header-info">
        <p className="header-p">
          100 Thousand Songs, ad-free <br />
          Over thousands podcast episodes
        </p>
      </div>
      <div className="header-img">
        <img src={headphone} alt="headphone" />
      </div>
    </div>
  );
};

export default HeroSection;
