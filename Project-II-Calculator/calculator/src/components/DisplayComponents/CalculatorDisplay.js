import React from 'react';
import './Display.css';

const CalculatorDisplay = ({ value }) => {
  return (
    <div className="calculator-display">
      {value}
    </div>
  );
}

export default CalculatorDisplay;