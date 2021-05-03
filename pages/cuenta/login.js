import React from 'react'
import Layout from '../../components/Layout'
import styles from './login.module.scss'
import SignIn from '../../components/SignIn/sign-in'

const Login = () => {
    return (
        <div>
            <Layout>
                <SignIn/>
            </Layout>
        </div>
    )
}

export default Login
