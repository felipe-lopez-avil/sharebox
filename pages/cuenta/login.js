import React from 'react'
import Layout from '../../components/Layout'
import styles from './login.module.scss'
import SignIn from '../../components/SignIn/sign-in'
import SignUp from '../../components/SignUp/sign-up'

const Login = () => {
    return (
        <Layout>
            <div className={styles.login_container}>
                <SignIn/>
                <SignUp/>
            </div>
        </Layout>
    )
}

export default Login
