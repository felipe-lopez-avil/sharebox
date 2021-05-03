import React from 'react'

import styles from './sign-in.module.scss';

class SigIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className={styles.sign_in}>
                <h2>¿Ya tienes una cuenta?</h2>
                <span>Haz Login con tu email y contraseña</span>

                <form onSubmit={this.handleSubmit}>
                    <input name="email" type="email" value={this.state.email} onChange={this.handleChange} required />
                    <label>Email</label>
                    <input name="password" type="password" value={this.state.password} onChange={this.handleChange} required/>
                    <label>Password</label>

                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        )
    }
}

export default SigIn;