import React, { Component } from 'react';

class Forms extends Component {

    state = {
        nome: '',
        piada: '',
        idade: 0,
        divulgar: false,
        estado: 'mg',
    }

    propForms = ({ target }) => {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value

        this.setState({
            [name]: value,
        })
    }

    render(){
        return (
            <div className="forms">
    <h1>Comedy Club</h1>
    <form className="form">
    <label>
        Nos diga seu nome:
       <input type="text" name="nome" value={this.state.nome} onChange={this.propForms} />
      </label>
      <label>
        Conte uma piada!
      <textarea className="textarea" name="piada" value={this.state.piada} onChange={this.propForms} />
      </label>
      <label>
        Idade
       <input type="number" name="idade" value={this.state.idade} onChange={this.propForms} />
      </label>
      <label>
        Podemos divulgar a piada?
       <input type="checkbox" name="divulgar" value={this.state.divulgar} onChange={this.propForms} />
      </label>
      <label>
        De qual Estado participante você é?
       <select name="estado" value={this.state.estado} onChange={this.propForms}>
         <option value="mg">Minas Gerais</option>
         <option value="rs">Rio Grande do Sul</option>
         <option value="sc">Santa Catarina</option>
         <option value="pr">Paraná</option>
       </select>
      </label>
       <input type="file" />
    </form>
    </div>
        )
    }
}

export default Forms;