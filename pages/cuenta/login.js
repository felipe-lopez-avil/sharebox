import React from 'react'
import Layout from '../../components/Layout'
import styles from './login.module.scss'
import SignIn from '../../components/SignIn/sign-in'

const Login = () => {
    return (
        <Layout>
            <div className={styles.login_container}>
                <SignIn/>
            </div>
        </Layout>
    )
}

export default Login
