import React from 'react';
import './Button.css';
import CalculationButton from './CalculationButton';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const ButtonsContainer = () => {
  return (
    <div className="buttons-container">
      <div className="numbers-buttons">
        <ActionButton value="clear" />
        <div>
          <NumberButton buttonStyle="number-btn" text="7" />
          <NumberButton buttonStyle="number-btn" text="8" />
          <NumberButton buttonStyle="number-btn" text="9" />
          <NumberButton buttonStyle="number-btn" text="4" />
          <NumberButton buttonStyle="number-btn" text="5" />
          <NumberButton buttonStyle="number-btn" text="6" />
          <NumberButton buttonStyle="number-btn" text="1" />
          <NumberButton buttonStyle="number-btn" text="2" />
          <NumberButton buttonStyle="number-btn" text="3" />

        </div> 
        <ActionButton value="0" />
      </div>

      <CalculationButton />
    </div>
  );
}

export default ButtonsContainer;