import React from 'react';
import './Button.css';

const CalculationButton = () => {
  return (
    <div className="calculation-buttons">
      <button className='calculation-btn'>÷</button>
      <button className='calculation-btn'>x</button>
      <button className='calculation-btn'>-</button>
      <button className='calculation-btn'>+</button>
      <button className='calculation-btn'>=</button>
    </div>
  );
}

export default CalculationButton;