import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const ButtonsContainer = () => {
  return (
    <div className="buttons-container">

      <ActionButton value="clear" />
      <NumberButton buttonStyle="calculation-btn" text="÷" />
      <NumberButton buttonStyle="number-btn" text="7" />
      <NumberButton buttonStyle="number-btn" text="8" />
      <NumberButton buttonStyle="number-btn" text="9" />
      <NumberButton buttonStyle="calculation-btn" text="x" />
      <NumberButton buttonStyle="number-btn" text="4" />
      <NumberButton buttonStyle="number-btn" text="5" />
      <NumberButton buttonStyle="number-btn" text="6" />
      <NumberButton buttonStyle="calculation-btn" text="-" />
      <NumberButton buttonStyle="number-btn" text="1" />
      <NumberButton buttonStyle="number-btn" text="2" />
      <NumberButton buttonStyle="number-btn" text="3" />
      <NumberButton buttonStyle="calculation-btn" text="+" />
      <ActionButton value="0" />
      <NumberButton buttonStyle="calculation-btn" text="=" />

    </div>
  );
}

export default ButtonsContainer;