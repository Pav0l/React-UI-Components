import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonsContainer from './components/ButtonComponents/ButtonsContainer';

/*
const App = () => {
  return (
    <div className='calculator-container'>
      <CalculatorDisplay value="0" />
      
      <ButtonsContainer />
    </div>
  );
};

export default App;
*/

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: "",
      operator: "",
      memory: "0",
    };
  }

  clickNumber(button) {
    this.setState(oldState => ({
      memory: oldState.concat(button),
    }));
  }

  clickOperator(button) {
    this.setState({
      operator: button,
      memory: "",
    });
  }





  render() {
    return (
      <div className='calculator-container'>
        <CalculatorDisplay total={this.state.memory} />
        
        <ButtonsContainer click={this.clickNumber.bind(this)} />
      </div>
    );
  }

}