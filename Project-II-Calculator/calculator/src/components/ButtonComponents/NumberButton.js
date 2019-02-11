import React from 'react';
import './Button.css';

const NumberButton = ({ buttonStyle, text }) => {
  return (
    <button className={buttonStyle} /*onClick={() => props.clickNumber({text})}*/>{text}</button>
  );
}

export default NumberButton;