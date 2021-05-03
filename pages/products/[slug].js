import React from 'react'
import {fromImageToUrl} from '../../utils/urls'
import styles from '../../styles/SingleProduct.module.css'
import products from '../../products.json'
import Layout from '../../components/Layout'


const product = products[0]

const Product = () => {
    return (
        <Layout>
            <div className={styles.product_container}>
                <div className={styles.product_row}>
                    {/* Product Gallery Section */}
                    <div className={styles.product_col}>
                        <div className={styles.img_display}>
                            <img src={fromImageToUrl(product.image)}/>
                        </div>
                    </div>
                    {/* Product Detail Section */}
                    <div className={styles.product_col}>
                        <h2 className={styles.product_title}>{product.title}</h2>
                        <a href="#" className={styles.collection}>Product Collection</a>
                        <div className={styles.product_price}>
                            <p>${product.price}</p>
                        </div>
                        <div className={styles.product_detail}>
                            <h3>Acerca de esta caja</h3>
                            <p>{product.description}</p>
                        </div>
                        <div className={styles.add_to_cart}>
                            <button className={styles.cart_btn}>Añadir a Carrito</button>
                        </div>
                        <div className={styles.product_detail}>
                            <h3>¿Qué incluye?</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Product