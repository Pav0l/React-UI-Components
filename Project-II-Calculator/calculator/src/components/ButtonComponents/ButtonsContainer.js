import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';

const ButtonsContainer = ({ clickFunction, clearFunction, operatorFunction, getResultFunction }) => {

  const btnProps = [
    {buttonStyle: 'action-button', value: 'clear', clicker: clearFunction},
    {buttonStyle: 'calculation-btn', value: '÷', clicker: operatorFunction},
    {buttonStyle: 'number-btn', value: 7, clicker: clickFunction},
    {buttonStyle: 'number-btn', value: 8, clicker: clickFunction},
    {buttonStyle: 'number-btn', value: 9, clicker: clickFunction},
    {buttonStyle: 'calculation-btn', value: 'x', clicker: operatorFunction},
    {buttonStyle: 'number-btn', value: 4, clicker: clickFunction},
    {buttonStyle: 'number-btn', value: 5, clicker: clickFunction},
    {buttonStyle: 'number-btn', value: 6, clicker: clickFunction},
    {buttonStyle: 'calculation-btn', value: '-', clicker: operatorFunction},
    {buttonStyle: 'number-btn', value: 1, clicker: clickFunction},
    {buttonStyle: 'number-btn', value: 2, clicker: clickFunction},
    {buttonStyle: 'number-btn', value: 3, clicker: clickFunction},
    {buttonStyle: 'calculation-btn', value: '+', clicker: operatorFunction},
    {buttonStyle: 'action-button', value: 0, clicker: clickFunction},
    {buttonStyle: 'calculation-btn', value: '=', clicker: getResultFunction},
  ];
 
  return (
    <div className="buttons-container">
      {
        btnProps.map((button, idx) => <NumberButton 
          buttonStyle={button.buttonStyle} 
          value={button.value} 
          clicker={button.clicker} 
          key={idx}
          />)
      }
    </div>
  );
}

export default ButtonsContainer;