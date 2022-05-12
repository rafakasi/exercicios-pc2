import React, { Component } from 'react';

class ValidateEmail extends Component {
    render(){
        const { value, loginInfo } = this.props;

        return(
            <label htmlFor='labellogin1'>
            EMAIL
            <input id="labellogin1" name="email" type="email" value={value} onChange={loginInfo} />
            </label>
        )
    }
}

export default ValidateEmail