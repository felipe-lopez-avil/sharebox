import { StylesProvider } from '@material-ui/styles'
import React from 'react'
import products from '../../products.json'
import { fromImageToUrl } from '../../utils/urls'
import Link from 'next/link'
import styles from '../../styles/Bestsellers.module.css'

const Bestsellers = () => {
    return (
        <>
            <div className={styles.section_title}>
                <h3>NUESTRAS BOXES MÁS POPULARES</h3>
            </div>
            <div className={styles.productsContainer}>
                {products.map(product => (
                    <Link href={`/products/${product.slug}`}>
                        <div className={styles.productContainer}>
                            <div className={styles.productImg}>
                                <img src={fromImageToUrl(product.image)}/>
                                <div className={styles.overlay}>
                                    <a href="#" className={styles.buyNow}>Comprar Ahora</a>
                                </div>
                            </div>
                            <div className={styles.productInfo}>
                                <div className={styles.type}>
                                    <a href="#"><h4>{product.title}</h4></a>
                                    <span>Just Because</span>
                                </div>
                                <a href="#" className={styles.price}>${product.price}.00</a>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Bestsellers