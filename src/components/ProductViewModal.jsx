import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import ProductView from './ProductView'
import Button from './Button'

import { remove } from '../redux/product-modal/productModalSlice'

import productData from '../assets/fake-data/products'

const ProductViewModal = () => {

    const productSlug = useSelector(state => state.productModal.value)

    const dispatch = useDispatch()

    const [product, setProduct] = useState(undefined)

    // const product = productData.getProductBySlug('ao-somi-caro-07')

    useEffect(() => {
        setProduct(productData.getProductBySlug(productSlug))
    }, [productSlug])

    return (
        <div className={`product-view_modal ${product === undefined ? '' : 'active'}`}>
            <div className="product-view_modal_content">
                <ProductView product={product}/>
                <div className="product-view_modal_content_close">
                    <Button size="sm" onClick={() => dispatch(remove())} >
                        Đóng
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductViewModal
