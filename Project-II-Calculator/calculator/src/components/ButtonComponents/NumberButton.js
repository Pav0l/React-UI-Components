import React from 'react';
import './Button.css';

const NumberButton = ({ buttonStyle, value, clicker, keys }) => {
  return (
    <button 
      className={buttonStyle} 
      onClick={clicker} 
      data-value={value} 
      key={keys} 
    >
    {value}
    </button>
  );
}

export default NumberButton;