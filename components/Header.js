import React, { useState }  from 'react'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';

import styles from '../styles/Header.module.css'



const Header = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);  

    return (
        
        <>
        <header className="desktop-header">
            <nav>
                <ul className="menu">
                    <li className="logo">
                        <div className="logo_container">
                            <a href="http://localhost:3000/">
                                <img className="header_logo" src="https://cdn.shopify.com/s/files/1/0456/6820/4706/files/Sharebox_editable-17_180x.png?v=1605634439"></img>
                            </a>
                        </div>
                    </li>
                    <div className= {click ? ('item nav_container_active') : ('item nav_container_innactive')}>
                        <li className="item has_submenu">
                            <a tabIndex="0" href="http://localhost:3000/box-to-go">Box to Go!</a>
                            <ul className="submenu">
                                <li className="subitem"><a href="#">All boxes</a></li>
                                <li className="subitem"><a href="#">For Him</a></li>
                                <li className="subitem"><a href="#">For Her</a></li>
                                <li className="subitem"><a href="#">Valentine's</a></li>
                            </ul>
                        </li>
                        <li className="item"><a href="#">Make your Box</a></li>
                        <li className="item"><a href="#">Out of the Box</a></li>
                        <li className="item"><a href="#">Caring for you</a></li>
                    </div>
                    <li className="item icon_section">
                        <div className="icon_container">
                            <a href="#">
                                <ShoppingBasketIcon className="icon" style={{ fontSize: 28 }}/>
                            </a>
                        </div>
                        <div className="icon_container">
                            <a href="#">
                                <PersonIcon className="icon" style={{ fontSize: 30 }}/>
                            </a>
                        </div>
                        <div className="menu_options" onClick={handleClick}>
                            {click ? (
                                <div className='icon_container'>
                                    <a href="#">
                                        <CloseIcon className="icon" style={{ fontSize: 33 }}/>
                                    </a>
                                </div>
                            ) : (
                                <div className='icon_container'>
                                    <a href="#">
                                        <MenuIcon className="icon" style={{ fontSize: 33 }}/>
                                    </a>
                                </div> 
                            )}
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header
