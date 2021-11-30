import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

const Routers = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog/:slug" element={<Product />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />

        </Routes>
    )
}

export default Routers
