import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'
import { updateItem, removeItem } from '../redux/shopping-cart/cartItemSlice'

import numberWithCommas from '../utils/numberWithCommas'
import { Link } from 'react-router-dom'

const CartItem = props => {
    
    const dispatch = useDispatch()

    const [ item, setItem ] = useState(props.item)

    console.log(item);

    const [ quantity, setQuantity ] = useState(props.item.quantity)

    useEffect(() => {
        setItem(props.item)
        setQuantity(props.item.quantity)
    }, [props.item])

    const updateQuantity = (option) => {
        if (option === '+' ) {
            dispatch(updateItem({...item, quantity: quantity + 1}))
            // setQuantity(quantity + 1);
        }
        if (option === '-') {
            dispatch(updateItem({...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1}))
            // setQuantity(quantity - 1 === 0 ? 1 : quantity - 1)
        }
    }

    const removeCartItem = () => {
        dispatch(removeItem(item))
        console.log('remove cart');
    }

    return (
        <div className="cart_item">
            <div className="cart_item_image">
                <img src={item.product.image01} alt="#" />
            </div>
            <div className="cart_item_info">
                <div className="cart_item_info_name">
                    <Link to={`/catalog/${item.slug}`}>
                        {`${item.product.title} - ${item.color} - ${item.size}`}
                    </Link>
                </div>
                <div className="cart_item_info_name">
                    {numberWithCommas(Number(item.price))}
                </div>
                <div className="cart_item_info_quantity">
                    <div className="product_info_item_quantity">
                            <div className="product_info_item_quantity_btn" onClick={() => updateQuantity('-')}>
                                <i className="bx bx-minus"></i>
                            </div>
                            <div className="product_info_item_quantity_input">
                                {quantity}
                            </div>
                            <div className="product_info_item_quantity_btn" onClick={() => updateQuantity('+')}>
                                <i className="bx bx-plus"></i>
                            </div>
                    </div>
                </div>
                <div className="cart_item_info_del" onClick={() => removeCartItem()}>
                    <i className="bx bx-trash"></i>
                </div>
            </div>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.object
}

export default CartItem
