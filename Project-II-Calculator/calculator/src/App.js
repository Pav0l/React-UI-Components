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
      memory: "",
    };
  }

  clickNumber(button) {
    this.setState({
      total: (this.state.total + button.target.dataset.value)
    })
  }

  clearFunction() {
    this.setState({
      total: "",
      operator: "",
      memory: ""
    })
  }

  clickOperator(button) {
    this.setState({
      operator: button.target.dataset.value,
      memory: this.state.total,
      total: ""
    });
  }

  calculateResult() {
    switch (this.state.operator) {
      case '+':
        this.setState({
          total: (Number(this.state.memory) + Number(this.state.total))
        });
        break;
      case '-':
        this.setState({
          total: (Number(this.state.memory) - Number(this.state.total))
        });
        break;
      case 'x':
        this.setState({
          total: (Number(this.state.memory) * Number(this.state.total))
        });
        break;
      case '÷':
        this.setState({
          total: (Number(this.state.memory) / Number(this.state.total))
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className='calculator-container'>
        <CalculatorDisplay total={this.state.total} />
        
        <ButtonsContainer
         clickFunction={this.clickNumber.bind(this)} 
         clearFunction={this.clearFunction.bind(this)} 
         operatorFunction={this.clickOperator.bind(this)} 
         getResultFunction={this.calculateResult.bind(this)}
         /> 
      </div>
    );
  }
}