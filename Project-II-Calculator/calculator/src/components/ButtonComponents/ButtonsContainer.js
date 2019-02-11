import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const ButtonsContainer = () => {
  return (
    <div className="buttons-container">
      <ActionButton />

      <NumberButton />
    </div>
  );
}

export default ButtonsContainer;