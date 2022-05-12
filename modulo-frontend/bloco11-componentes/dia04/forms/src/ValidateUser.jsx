import React, { Component } from 'react';
import ValidateEmail from './ValidateEmail';
import ValidatePassword from './ValidatePassword';


class ValidateUser extends Component {
    
    state = {
        email: '',
        password: '',
    }

    loginInfo = ({ target }) => {
        const { name, value } = target;

        this.setState({
            [name]: value,
        })
    }

    render(){
        return (
            <div className="login">
                <form>
                <ValidateEmail value={this.state.email} loginInfo={this.loginInfo} />                   
               <ValidatePassword value={this.state.password} loginInfo={this.loginInfo} />
                <button className="buttonlogin" type="submit">ENTRAR</button>
                </form>
            </div>
        )
    }
}

export default ValidateUser