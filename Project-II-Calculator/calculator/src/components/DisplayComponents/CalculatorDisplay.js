import React from 'react';
import './Display.css';

const CalculatorDisplay = ({ total }) => {
  return (
    <div className="calculator-display">
      {total || 0}
    </div>
  );
}

export default CalculatorDisplay;