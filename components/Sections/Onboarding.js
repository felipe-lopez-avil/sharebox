import React from 'react'
import styles from '../../styles/Onboarding.module.css'
import Image from 'next/image'

import homeImages from '../../homeImages.json'
import { fromImageToUrl } from '../../utils/urls'

const onboardingImage = homeImages[0]

const Onboarding = () => {
    return (
        <div className={styles.row}>
            <div className={styles.column}>
                <div className={styles.imageContainer}>
                    <img src={fromImageToUrl(onboardingImage.image)}/>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.Onboarding}>
                    <h2>Sharebox</h2>
                    <br/>
                    <p>Sharebox busca dar felicidad a través de cajas personalizadas para toda ocasión, con un sentido más allá de lo material, buscamos regalar una experiencia.</p>
                    <br/>
                    <p>Además, apoyamos a negocios y emprendimientos locales y mexicanos.</p>
                    <button>¡ARMA TU BOX!</button>
                </div>
            </div>
        </div>
        
    )
}

export default Onboarding
