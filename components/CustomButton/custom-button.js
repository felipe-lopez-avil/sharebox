import React from 'react'
import styles from './custom-button.module.scss'

const CustomButton = ({ children, ...otherProps }) => {
    return (
        <button className={styles.custom_button} {...otherProps} >
            {children}
        </button>
    )
}

export default CustomButton
