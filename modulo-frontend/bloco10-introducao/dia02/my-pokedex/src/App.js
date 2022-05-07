import React, { Component }from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends Component {
  render(){
    return(
    <div className="App">
      <h1> Bem vindo a Pokedex </h1>
      <Pokedex pokemons={pokemons} />
    </div>
    )
  }
}

export default App;
