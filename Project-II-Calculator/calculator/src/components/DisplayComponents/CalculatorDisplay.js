import React from 'react';
import './Display.css';

const CalculatorDisplay = ({ total }) => {
  return (
    <div className="calculator-display">
      {total}
    </div>
  );
}

export default CalculatorDisplay;