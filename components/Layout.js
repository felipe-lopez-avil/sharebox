import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <div>
            <main>
                <Header></Header>

                {children}

                <Footer></Footer>
            </main>
        </div>
    )
}

export default Layout
