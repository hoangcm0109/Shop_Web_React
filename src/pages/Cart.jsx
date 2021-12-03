import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import Button from '../components/Button'
import CartItem from '../components/CartItem'

import productData from '../assets/fake-data/products'
import numberWithCommas from '../utils/numberWithCommas'

const Cart = () => {

    const cartItems = useSelector(state => state.cartItems.value)

    console.log(cartItems);

    const [ cartProducts, setCartProducts ] = useState([])

    const [totalProducts, setTotalProducts] = useState(0)

    const [ totalPrice, setTotalPrice ] = useState(0) 

    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems))

        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * (Number(item.price))), 0))

        setTotalProducts(cartItems.reduce((total, item) => total + (Number(item.quantity)), 0))

    }, [cartItems])

    return (
        <Helmet title="Cart">
            <div className="cart">
                <div className="cart_info">
                    <div className="cart_info_txt">
                        <p>
                            Bạn đang có { totalProducts } sản phẩm
                        </p>
                        <div className="cart_info_txt_price">
                            <span>Thành tiền</span>
                            <span>{numberWithCommas(totalPrice)}</span>
                        </div>
                    </div>
                    <div className="cart_info_btn">
                        <Button size="block">Đặt hàng</Button>
                        <Link to="/catalog">
                            <Button size="block">Tiếp tục mua hàng</Button>
                        </Link>
                    </div>
                </div>
                <div className="cart_list">
                    {
                        cartProducts.map((item, index) => (
                            <CartItem item={item} key={index} />
                        ))
                    }
                </div>
            </div>
        </Helmet>
    )
}

export default Cart
