import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);

    this.state = {
      jokeObj: undefined, // a piada mais recente
      loading: true, // o carregando
      storedJokes: [], // array de piadas
    }
  }

  async fetchJoke() {
      this.setState(
        { loading: true }, // Primeiro parametro da setState()
      async () => {
    const requestHeaders = { headers: { Accept: 'application/json' } } 
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const requestObject = await requestReturn.json();
    this.setState({ // jogando a requisição no state
        loading: false, // só quando o state for atualizado que o componente será realizado
        jokeObj: requestObject,
        })
    })
  }

  componentDidMount() {
    this.fetchJoke();
  }

  //Esse método será responsável por salvar a piada no array de piadas storedJokes!!
  saveJoke() { 
  this.setState(({ storedJokes, jokeObj }) => ({ // recebe o parametro do state anterior
        storedJokes: [...storedJokes, jokeObj] // Arrray antigo + Array novo // Atualizar um array baseado no array anterior com o spreed operator
    }));

    this.fetchJoke();
  }

  renderJokeElement() {
    const { jokeObj } = this.state  
    return (
          <div>
              <p>{ jokeObj.joke }</p>
              <button type="button" onClick={ this.saveJoke }>
                  Salvar piada!
              </button>
          </div>
      )
  }

  render() {
    const { storedJokes, jokeObj, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (
          <p key={id}>{joke}</p>)
          )}
        </span>
          
        <p>
          {loading ? loadingElement : this.renderJokeElement()} 
        </p>
      </div>
    );
  }
}

export default DadJoke;
        
    // Duas maneiras de rederizar a piada com loading.
    /* {jokeObj === undefined ? loadingElement : jokeObj.joke }  // Se jokeObj for undefined me retorna loading, caso contrário renderiza a piada */
    /* {jokeObj ? jokeObj.joke : loadingElement } // Se jokeObj for true me retorna a piada, caso contrário retorna o loadin */