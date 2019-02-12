import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const ButtonsContainer = ({ clickFunction, clearFunction, operatorFunction, getResultFunction }) => {
  return (
    <div className="buttons-container">

      <ActionButton value="clear" clicker={clearFunction} />
      <NumberButton buttonStyle="calculation-btn" text="/" clicker={operatorFunction} />
      <NumberButton buttonStyle="number-btn" text="7" clicker={clickFunction} />
      <NumberButton buttonStyle="number-btn" text="8" clicker={clickFunction} />
      <NumberButton buttonStyle="number-btn" text="9" clicker={clickFunction} />
      <NumberButton buttonStyle="calculation-btn" text="*" clicker={operatorFunction} />
      <NumberButton buttonStyle="number-btn" text="4" clicker={clickFunction} />
      <NumberButton buttonStyle="number-btn" text="5" clicker={clickFunction} />
      <NumberButton buttonStyle="number-btn" text="6" clicker={clickFunction} />
      <NumberButton buttonStyle="calculation-btn" text="-" clicker={operatorFunction} />
      <NumberButton buttonStyle="number-btn" text="1" clicker={clickFunction} />
      <NumberButton buttonStyle="number-btn" text="2" clicker={clickFunction} />
      <NumberButton buttonStyle="number-btn" text="3" clicker={clickFunction} />
      <NumberButton buttonStyle="calculation-btn" text="+" clicker={operatorFunction} />
      <ActionButton value="0" clicker={clickFunction} />
      <NumberButton buttonStyle="calculation-btn" text="=" clicker={getResultFunction} />

    </div>
  );
}

export default ButtonsContainer;