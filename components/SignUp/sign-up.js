import React, { useState } from 'react'
import FormInput from '../FormInput/form-input'
import CustomButton from '../CustomButton/custom-button'
import FormError from '../FormError/form-error'
import Router from 'next/router'

import styles from './sign-up.module.scss';

import firebase from '../../firebase'

// Validaciones
import useValidation from '../../hooks/useValidation'
import validateSignUp from '../../Validation/validateSignUp'

const INITIAL_STATE = {
    name: '',
    email: '',
    password: ''
}

const SignUp = () => {

    const [error, setError] = useState(false)

    const {values, errors, submitForm, handleSubmit, handleChange} = useValidation(INITIAL_STATE, validateSignUp, signUp);

    const {name, email, password} = values;

    async function signUp() {
        try {
            await firebase.register(name, email, password);
            Router.push('/');
        } catch (error) {
            console.error('Hubo un error. No se pudo crear tu cuenta', error.message);
            setError(error.message)
        }
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
                {errors.name && <FormError>{errors.name}</FormError>}

                <FormInput name="email" type="email" id="email"  label="Email" value={email} handleChange={handleChange} required />
                {errors.email && <FormError>{errors.email}</FormError>}

                <FormInput name="password" type="password" id="password" label="Password" value={password} handleChange={handleChange} required/>
                {errors.password && <FormError>{errors.password}</FormError>}

                {error && <FormError>{error}</FormError>}
                <CustomButton type="submit" value="Submit Form">CREAR CUENTA</CustomButton>
            </form>
        </div>
    )  
}

export default SignUp;





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