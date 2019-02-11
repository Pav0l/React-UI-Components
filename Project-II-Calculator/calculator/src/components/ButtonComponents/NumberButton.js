import React from 'react';
import './Button.css';

const NumberButton = ({ buttonStyle, text }) => {
  return (
    <button className={buttonStyle}>{text}</button>
  );
}

export default NumberButton;