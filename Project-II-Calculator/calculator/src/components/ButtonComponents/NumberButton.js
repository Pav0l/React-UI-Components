import React from 'react';
import './Button.css';

const NumberButton = ({ buttonStyle, value, clicker }) => {
  return (
    <button className={buttonStyle} onClick={clicker} data-value={value} >{value}</button>
  );
}

export default NumberButton;