import React from 'react'
import Layout from '../components/Layout'
import products from '../btg.json'
import styles from '../styles/Bestsellers.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { fromImageToUrl } from '../utils/urls'


const boxToGo = () => {
    return (
        <div>
            <Head>
                <title>Box To Go</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className="content">
                    <div className="collection">
                        <h2>Box To Go!</h2>
                        <span>Boxes prediseñadas especiales para cada ocasión</span>
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
                </div>
            </Layout>
        </div>
    )
}

export default boxToGo
