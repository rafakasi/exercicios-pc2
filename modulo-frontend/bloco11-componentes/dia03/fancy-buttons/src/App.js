import React, { Component } from 'react';
import './App.css';



class App extends Component {
  
  state = {
    numbersClickOne: 0,
    numbersClickTwo: 0,
    numbersClickThree: 0,
  }

  buttonOne = () => {
    this.setState({
      numbersClickOne: this.state.numbersClickOne + 1
    })    
  };
  
  buttonTwo = () => {
    this.setState({
      numbersClickTwo: this.state.numbersClickTwo + 1
    })    
  };
  
  buttonThree = () => {
    this.setState({
      numbersClickThree: this.state.numbersClickThree + 1
    })    
  };

  render() {

    const { numbersClickOne } = this.state;
    const { numbersClickTwo } = this.state;
    const { numbersClickThree } = this.state;

      return (
         /* No React, precisamos dizer explicitamente que queremos uma função da nossa classe
    através da sintaxe `this.minhaFuncao` para usá-la num evento
            Para acessar uma função que criamos dentro de uma classe num eventListener precisamos 
    explicitar a origem de nossa função com a sintaxe this.minhaFuncao. */
      <div className="buttons">
      <button className="amarelo" onClick={this.buttonOne}>{numbersClickOne}</button>
      <button className="vermelho" onClick={this.buttonTwo}>{numbersClickTwo}</button>
      <button className="laranja" onClick={this.buttonThree}>{numbersClickThree}</button>
      </div>
    )
  }
}

export default App;
