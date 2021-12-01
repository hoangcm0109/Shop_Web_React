import React from 'react'

import ProductView from './ProductView'
import Button from './Button'

import productData from '../assets/fake-data/products'

const ProductViewModal = () => {

    const product = productData.getProductBySlug('ao-somi-caro-07')

    return (
        <div className={`product-view_modal ${product === undefined ? '' : 'active'}`}>
            <div className="product-view_modal_content">
                <ProductView product={product}/>
                <div className="product-view_modal_content_close">
                    <Button size="sm">
                        Đóng
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductViewModal
