import React from 'react';
import './Button.css';

const Buttons = ({ text, handleOpen }) => (
  <button className="btn" onClick={handleOpen}>
    {text}
  </button>
);

export default Buttons;
