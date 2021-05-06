import React from 'react'
import styles from './form-error.module.scss'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';


const FormError = ({ children, ...otherProps }) => {
    return (
        <div className={styles.error} {...otherProps} >
            <ErrorOutlineIcon/>
            <div className={styles.details}>
                {children}
            </div>
        </div>
    )
}

export default FormError