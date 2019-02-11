import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonsContainer from './components/ButtonComponents/ButtonsContainer';

const App = () => {
  return (
    <div className='calculator-container'>
      <CalculatorDisplay value="0" />
      
      <ButtonsContainer />
    </div>
  );
};

export default App;
