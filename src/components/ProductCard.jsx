import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import numberWithCommas from '../utils/numberWithCommas'

import Button from './Button'

const ProductCard = props => {
    return (
        <div className="product-card">
            <Link to={`/catalog/${props.slug}`}>
                <div className="product-card_image">
                    <img src={props.img01} alt="" />
                    <img src={props.img02} alt="" />
                </div>
                <h3 className="product-card_name">{props.name}</h3>
                <div className="product-card_price">
                    {numberWithCommas(props.price)}
                    <span className="product-card_price_old">
                        <del>{numberWithCommas(390000)}</del>
                    </span>
                </div>

                <div className="product-card_btn">
                    <Button 
                        size="sm"
                        icon="bx bx-cart"
                        animate={true}
                        >
                        Chọn mua
                    </Button>
                </div>
            </Link>
        </div>
    )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProductCard
