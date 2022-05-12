import React, { Component } from 'react';

class ValidatePassword extends Component {
    render(){
        const { value, loginInfo } = this.props;

        return(
            <label htmlFor='labellogin2'>
            SENHA
            <input id="labellogin2" name="password" type="password" value={value} onChange={loginInfo} />
            </label>
        )
    }
}

export default ValidatePassword