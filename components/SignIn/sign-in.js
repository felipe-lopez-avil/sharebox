import React from 'react'
import FormInput from '../FormInput/form-input'
import CustomButton from '../CustomButton/custom-button'

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
                <span>Inicia sesión con tu email y contraseña</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="Email" required />
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="Password" required/>

                    <CustomButton type="submit" value="Submit Form">LOGIN</CustomButton>
                </form>
            </div>
        )
    }
}

export default SigIn;