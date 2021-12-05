import React, { useRef, useEffect, useState } from 'react'
import { Link, useLocation  } from 'react-router-dom'

import { useSelector } from 'react-redux'

import logo from '../assets/images/Logo-2.png'


const mainNav = [
    {
        display: 'Trang chủ', 
        path: '/'
    }, 
    {
        display: 'Sản phẩm',
        path: '/catalog'
    },
    {
        display: 'Phụ kiện',
        path: '/accessories'
    },
    {
        display: 'Liên hệ',
        path: '/contact'
    }

]

const Header = () => {

    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    const headerRef = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }

    }, [])

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')

    const products = useSelector(state => state.cartItems.value)

    const [quantity, setQuantity] = useState(null)

    useEffect(() => {
        setQuantity(products.length)
    }, [products])

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <Link to="/catalog">
                    <div className="header_logo">
                        <img src={logo} alt="#" />
                    </div>
                </Link>
                <div className="header_menu">
                    <div className="header_menu_mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-menu'></i>
                    </div>
                    <div className="header_menu_left" ref={menuLeft}>
                        <div className="header_menu_left_close" onClick={menuToggle}>
                            <i className='bx bxs-chevron-left'></i>
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div 
                                    className={`header_menu_item 
                                        header_menu_left_item ${index === activeNav ? 'active' : ''}`} 
                                    key={index}
                                    onClick={menuToggle}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>

                    <div className="header_menu_right">
                        <div className="header_menu_item header_menu_right_item">
                            <i className='bx bx-search' ></i>
                        </div>
                        <div className="header_menu_item header_menu_right_item">
                            <Link to="/cart">
                                <i className='bx bx-shopping-bag' ></i>
                            </Link>
                        </div>
                        { quantity === 0 ? '' : <span>{quantity}</span> }
                        <div className="header_menu_item header_menu_right_item">
                            <i className='bx bx-user' ></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
