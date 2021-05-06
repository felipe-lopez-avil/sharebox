import React, { useState } from 'react'
import FormInput from '../FormInput/form-input'
import CustomButton from '../CustomButton/custom-button'
import FormError from '../FormError/form-error'
import Router from 'next/router'

import styles from './sign-in.module.scss';

import firebase from '../../firebase'

// Validaciones
import useValidation from '../../hooks/useValidation'
import validateSignUp from '../../Validation/validateSignUp'

const INITIAL_STATE = {
    name: '',
    email: '',
    password: ''
}

const SigIn = () => {

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
        <div className={styles.sign_in}>
            <h2>¿Ya tienes una cuenta?</h2>
            <span>Inicia sesión con tu email y contraseña</span>

            <form
                onSubmit={handleSubmit}
                noValidate
            >

                <FormInput name="email" type="email" id="email"  label="Email" value={email} handleChange={handleChange} required />
                {errors.email && <FormError>{errors.email}</FormError>}

                <FormInput name="password" type="password" id="password" label="Password" value={password} handleChange={handleChange} required/>
                {errors.password && <FormError>{errors.password}</FormError>}

                {error && <FormError>{error}</FormError>}
                <div className={styles.buttons}>
                        <CustomButton type="submit" value="Submit Form">LOGIN</CustomButton>
                        <CustomButton type="submit" value="Submit Form">Login con Google</CustomButton>
                </div>
            </form>
        </div>
    )  
}

export default SigIn;