import React from 'react';
import './Button.css';
import CalculationButton from './CalculationButton';
import NumberButton from './NumberButton';

const ButtonsContainer = () => {
  return (
    <div className="buttons-container">
      <CalculationButton />

      <NumberButton />
    </div>
  );
}

export default ButtonsContainer;