import React from 'react';
import './Button.css';

const NumberButton = ({ buttonStyle, text, clicker }) => {
  return (
    <button className={buttonStyle} onClick={clicker} data-value={text} >{text}</button>
  );
}

export default NumberButton;