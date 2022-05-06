import React, { Component } from 'react';

/* Na pasta src, crie um novo arquivo chamado Content.jsx, que representará o componente Content;
Dentro do arquivo Content.jsx, crie uma classe React chamada Content;
Ainda no arquivo Content.jsx, adicione o seguinte array:
*/

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

/* A classe Content deve renderizar o array conteudos com a utilização da função map, */

class Content extends Component {
    render(){
        return(
            <div>
            {conteudos.map((elementos) => (
            <div key={elementos.conteudo}>
                 <h4>{`O conteudo é: ${elementos.conteudo}`}</h4>
                  <p>{`status: ${elementos.status}`}</p>
                  <p>{`bloco: ${elementos.bloco}`}</p>
            </div>
            ))}
            </div>
        )
    }
}

export default Content