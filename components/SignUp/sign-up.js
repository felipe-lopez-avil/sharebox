import React from 'react'
import FormInput from '../FormInput/form-input'
import CustomButton from '../CustomButton/custom-button'
import FormError from '../FormError/form-error'

import styles from './sign-up.module.scss';

// Validaciones
import useValidation from '../../hooks/useValidation'
import validateSignUp from '../../Validation/validateSignUp'

/* class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ name: '', email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className={styles.sign_up}>
                <h2>¿No tienes una cuenta?</h2>
                <span>Regístrate con tu email y contraseña</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="name" type="text" value={this.state.name} handleChange={this.handleChange} label="Name" required />
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="Email" required />
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="Password" required/>

                    <CustomButton type="submit" value="Submit Form">CREAR CUENTA</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp; */

const INITIAL_STATE = {
    name: '',
    email: '',
    password: ''
}

const SignUp = () => {

    const {values, error, submitForm, handleSubmit, handleChange} = useValidation(INITIAL_STATE, validateSignUp, signUp);

    const {name, email, password} = values;

    function signUp() {
        console.log('Creando cuenta..')
    }

    return(
        <div className={styles.sign_up}>
            <h2>¿No tienes una cuenta?</h2>
            <span>Regístrate con tu email y contraseña</span>

            <form
                onSubmit={handleSubmit}
                noValidate
            >
                <FormInput name="name" type="text" id="name" label="Name" value={name} handleChange={handleChange} required />
                {error.name && <FormError>{error.name}</FormError>}

                <FormInput name="email" type="email" id="email"  label="Email" value={email} handleChange={handleChange} required />
                {error.email && <FormError>{error.email}</FormError>}

                <FormInput name="password" type="password" id="password" label="Password" value={password} handleChange={handleChange} required/>
                {error.password && <FormError>{error.password}</FormError>}


                <CustomButton type="submit" value="Submit Form">CREAR CUENTA</CustomButton>
            </form>
        </div>
    )  
}

export default SignUp;