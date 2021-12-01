import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import ProductViewModal from './ProductViewModal'

import Routers from '../routers/Routers'

const Layout = () => {

    return (
        <BrowserRouter>
            {/* <Routes>
                <Route element={ props => (
                    <div>
                        <Header />
                        
                        <div className="container">
                            <div className="main">
                                <Routers />
                            </div>
                        </div>

                        <Footer />
                    </div>
                    )
                } />
            </Routes> */}
        <div>
            <Header />

            <div className="container">
                <div className="main">
                    <Routers />
                </div>
            </div>

            <Footer />
            <ProductViewModal />
        </div>
        </BrowserRouter>
    )
}

export default Layout
